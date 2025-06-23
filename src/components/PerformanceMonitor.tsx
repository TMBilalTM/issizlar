"use client";

import { useEffect } from 'react';

type GtagFunction = (...args: unknown[]) => void;

export function PerformanceMonitor() {
  useEffect(() => {
    // Core Web Vitals measurement
    const measureWebVitals = async () => {
      try {
        const vitals = await import('web-vitals');
        
        const sendToGoogleAnalytics = (metric: { name: string; delta: number; value: number; id: string }) => {
          if (typeof window !== 'undefined' && 'gtag' in window) {
            const gtag = (window as { gtag: GtagFunction }).gtag;
            gtag('event', metric.name, {
              event_category: 'Web Vitals',
              event_label: metric.id,
              value: Math.round(metric.name === 'CLS' ? metric.delta * 1000 : metric.delta),
              non_interaction: true,
            });
          }
          
          // Console log for development
          console.log(`${metric.name}: ${metric.value} (delta: ${metric.delta})`);
        };

        // Measure all Core Web Vitals with proper imports
        if (vitals.onCLS) vitals.onCLS(sendToGoogleAnalytics);
        if (vitals.onINP) vitals.onINP(sendToGoogleAnalytics);
        if (vitals.onFCP) vitals.onFCP(sendToGoogleAnalytics);
        if (vitals.onLCP) vitals.onLCP(sendToGoogleAnalytics);
        if (vitals.onTTFB) vitals.onTTFB(sendToGoogleAnalytics);
      } catch (error) {
        console.warn('Web Vitals measurement failed:', error);
      }
    };

    // Performance observer for advanced metrics
    const observePerformance = () => {
      if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
        try {
          // Observe long tasks (blocking main thread)
          const longTaskObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.duration > 50) {
                console.warn('Long task detected:', entry.duration + 'ms');
                if ('gtag' in window) {
                  const gtag = (window as { gtag: GtagFunction }).gtag;
                  gtag('event', 'long_task', {
                    event_category: 'Performance',
                    event_label: 'Long Task',
                    value: Math.round(entry.duration),
                    non_interaction: true,
                  });
                }
              }
            }
          });

          longTaskObserver.observe({ entryTypes: ['longtask'] });
        } catch (error) {
          console.log('Performance observers not fully supported:', error);
        }
      }
    };

    // Font loading optimization
    const optimizeFontLoading = () => {
      if (typeof window !== 'undefined' && 'fonts' in document) {
        document.fonts.ready.then(() => {
          document.documentElement.classList.add('fonts-loaded');
          
          if ('gtag' in window) {
            const gtag = (window as { gtag: GtagFunction }).gtag;
            gtag('event', 'fonts_loaded', {
              event_category: 'Performance',
              event_label: 'All Fonts Loaded',
              non_interaction: true,
            });
          }
        });
      }
    };

    // Initialize monitoring
    measureWebVitals();
    observePerformance();
    optimizeFontLoading();

    // Page visibility change monitoring
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden' && 'gtag' in window) {
        const gtag = (window as { gtag: GtagFunction }).gtag;
        gtag('event', 'page_hidden', {
          event_category: 'User Engagement',
          non_interaction: true,
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return null;
}
