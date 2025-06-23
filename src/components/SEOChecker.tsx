"use client";

import { useEffect } from 'react';

export function SEOChecker() {
  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      // SEO Checks for development
      const performSEOChecks = () => {
        const checks = [];
        
        // Check title length
        const title = document.title;
        if (title.length < 30 || title.length > 60) {
          checks.push(`⚠️ Title length (${title.length}) should be 30-60 characters`);
        } else {
          checks.push(`✅ Title length (${title.length}) is optimal`);
        }
        
        // Check meta description
        const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute('content');
        if (!metaDesc) {
          checks.push('❌ Meta description missing');
        } else if (metaDesc.length < 120 || metaDesc.length > 160) {
          checks.push(`⚠️ Meta description length (${metaDesc.length}) should be 120-160 characters`);
        } else {
          checks.push(`✅ Meta description length (${metaDesc.length}) is optimal`);
        }
        
        // Check H1 tags
        const h1Tags = document.querySelectorAll('h1');
        if (h1Tags.length === 0) {
          checks.push('❌ No H1 tag found');
        } else if (h1Tags.length > 1) {
          checks.push(`⚠️ Multiple H1 tags found (${h1Tags.length}), should be only one`);
        } else {
          checks.push('✅ Single H1 tag found');
        }
        
        // Check images without alt text
        const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
        if (imagesWithoutAlt.length > 0) {
          checks.push(`⚠️ ${imagesWithoutAlt.length} images without alt text`);
        } else {
          checks.push('✅ All images have alt text');
        }
        
        // Check for robots meta tag
        const robotsMeta = document.querySelector('meta[name="robots"]');
        if (!robotsMeta) {
          checks.push('⚠️ No robots meta tag found');
        } else {
          checks.push('✅ Robots meta tag found');
        }
        
        // Check for canonical URL
        const canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
          checks.push('❌ No canonical URL found');
        } else {
          checks.push('✅ Canonical URL found');
        }
        
        // Check for structured data
        const structuredData = document.querySelectorAll('script[type="application/ld+json"]');
        if (structuredData.length === 0) {
          checks.push('❌ No structured data found');
        } else {
          checks.push(`✅ ${structuredData.length} structured data scripts found`);
        }
        
        // Check for Open Graph tags
        const ogTags = document.querySelectorAll('meta[property^="og:"]');
        if (ogTags.length < 4) {
          checks.push(`⚠️ Only ${ogTags.length} Open Graph tags found, should have at least 4`);
        } else {
          checks.push(`✅ ${ogTags.length} Open Graph tags found`);
        }
        
        // Check for Twitter Card tags
        const twitterTags = document.querySelectorAll('meta[name^="twitter:"]');
        if (twitterTags.length < 3) {
          checks.push(`⚠️ Only ${twitterTags.length} Twitter Card tags found`);
        } else {
          checks.push(`✅ ${twitterTags.length} Twitter Card tags found`);
        }
        
        // Check page loading speed (simplified)
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        if (loadTime > 3000) {
          checks.push(`⚠️ Page load time (${Math.round(loadTime/1000)}s) is slow`);
        } else {
          checks.push(`✅ Page load time (${Math.round(loadTime/1000)}s) is good`);
        }
        
        // Log all checks
        console.group('🔍 SEO Health Check');
        checks.forEach(check => console.log(check));
        console.groupEnd();
        
        // Calculate score
        const passed = checks.filter(check => check.startsWith('✅')).length;
        const total = checks.length;
        const score = Math.round((passed / total) * 100);
        
        console.log(`📊 SEO Score: ${score}% (${passed}/${total} checks passed)`);
        
        if (score >= 90) {
          console.log('🎉 Excellent SEO! Your site is well optimized.');
        } else if (score >= 70) {
          console.log('👍 Good SEO! A few improvements could help.');
        } else {
          console.log('⚠️ SEO needs improvement. Please address the issues above.');
        }
      };
      
      // Run checks after page load
      if (document.readyState === 'complete') {
        setTimeout(performSEOChecks, 1000);
      } else {
        window.addEventListener('load', () => {
          setTimeout(performSEOChecks, 1000);
        });
      }
    }
  }, []);

  return null;
}
