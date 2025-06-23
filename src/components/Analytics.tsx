"use client";

import Script from 'next/script';
import { useEffect } from 'react';

// Google Analytics tracking ID - replace with your actual tracking ID
const GA_TRACKING_ID = 'G-XXXXXXXXXX';

// Custom event tracking function
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export function Analytics() {
  useEffect(() => {
    // Track page views
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_TRACKING_ID, {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, []);

  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            anonymize_ip: true,
            send_page_view: false
          });
        `}
      </Script>

      {/* Facebook Pixel */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR_FACEBOOK_PIXEL_ID');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* Yandex Metrica */}
      <Script id="yandex-metrica" strategy="afterInteractive">
        {`
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(YOUR_YANDEX_ID, "init", {
               clickmap:true,
               trackLinks:true,
               accurateTrackBounce:true,
               webvisor:true
          });
        `}
      </Script>
    </>
  );
}

// Custom event tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackMusicPlay = (trackName: string, albumName: string) => {
  trackEvent('music_play', {
    track_name: trackName,
    album_name: albumName,
    event_category: 'Music',
    event_label: `${albumName} - ${trackName}`
  });
};

export const trackPageView = (pageName: string) => {
  trackEvent('page_view', {
    page_title: pageName,
    page_location: window.location.href
  });
};

export const trackContactForm = (formType: string) => {
  trackEvent('contact_form_submit', {
    form_type: formType,
    event_category: 'Contact'
  });
};

export const trackSocialClick = (platform: string) => {
  trackEvent('social_click', {
    platform: platform,
    event_category: 'Social Media'
  });
};
