import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { StructuredData } from "@/components/StructuredData";
import { Analytics } from "@/components/Analytics";
import { PerformanceMonitor } from "@/components/PerformanceMonitor";
import { SEOChecker } from "@/components/SEOChecker";
import "./globals.css";
import "./critical.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://issizlar.vercel.app'),
  title: {
    default: "Issızlar - Türk Müzik Grubu | Resmi Website",
    template: "%s | Issızlar"
  },
  description: "Issızlar müzik grubu resmi websitesi. Ruhun derinliklerinden gelen melodiler, kalbin sessizliğinde yankılanan şarkılar. Modern Türk rock ve alternatif müziğin özgün sesi.",
  keywords: [
    "Issızlar",
    "müzik grubu", 
    "Türk müziği",
    "rock müzik",
    "alternatif müzik",
    "indie rock",
    "Türk rock",
    "konser",
    "müzik etkinlikleri",
    "Spotify",
    "Apple Music",
    "YouTube Music",
    "SoundCloud",
    "canlı performans",
    "müzik albümü",
    "şarkı sözleri",
    "Sessizliğin Derinliği",
    "Umudun Işığı"
  ],
  authors: [
    { name: "Issızlar Müzik Grubu" },
    { name: "BilalTM", url: "https://github.com/BilalTM" }
  ],
  creator: "BilalTM",
  publisher: "Issızlar Müzik Grubu",
  category: "Music",
  classification: "Music Band Website",
  
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://issizlar.vercel.app",
    title: "Issızlar - Türk Müzik Grubu | Resmi Website",
    description: "Ruhun derinliklerinden gelen melodiler, kalbin sessizliğinde yankılanan şarkılar. Modern Türk rock ve alternatif müziğin özgün sesi.",
    siteName: "Issızlar",
    images: [
      {
        url: "/logos/main_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Issızlar Müzik Grubu Logo",
        type: "image/jpeg",
      },
      {
        url: "/logos/main_logo2.png", 
        width: 800,
        height: 800,
        alt: "Issızlar Logo",
        type: "image/png",
      }
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Issızlar - Türk Müzik Grubu",
    description: "Ruhun derinliklerinden gelen melodiler, kalbin sessizliğinde yankılanan şarkılar.",
    images: ["/logos/main_logo.jpg"],
    creator: "@issizlar_band",
    site: "@issizlar_band",
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  icons: {
    icon: [
      { url: "/logos/main_logo2.png", sizes: "32x32", type: "image/png" },
      { url: "/logos/main_logo2.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/logos/main_logo2.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/logos/main_logo2.png",
        color: "#3b82f6",
      },
    ],
  },
  
  manifest: "/manifest.json",
  
  alternates: {
    canonical: "https://issizlar.vercel.app",
    languages: {
      "tr-TR": "https://issizlar.vercel.app",
    },
  },
  
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Issızlar",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#0f172a",
    "msapplication-TileImage": "/logos/main_logo2.png",
    "theme-color": "#0f172a",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        {/* SEO and accessibility meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="color-scheme" content="dark light" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <link rel="canonical" href="https://issizlar.vercel.app" />
        
        {/* Additional SEO meta tags */}
        <meta name="googlebot" content="index,follow,max-video-preview:-1,max-image-preview:large,max-snippet:-1" />
        <meta name="bingbot" content="index,follow,max-video-preview:-1,max-image-preview:large,max-snippet:-1" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="coverage" content="worldwide" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        
        {/* Social media meta tags */}
        <meta property="fb:app_id" content="your-facebook-app-id" />
        <meta name="twitter:domain" content="issizlar.com" />
        <meta name="twitter:url" content="https://issizlar.vercel.app" />
        
        {/* Schema.org markup for search engines */}
        <meta itemProp="name" content="Issızlar - Türk Müzik Grubu" />
        <meta itemProp="description" content="Ruhun derinliklerinden gelen melodiler, kalbin sessizliğinde yankılanan şarkılar." />
        <meta itemProp="image" content="https://issizlar.vercel.app/logos/main_logo.jpg" />
         {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://upload.wikimedia.org" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://analytics.google.com" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://open.spotify.com" />
        <link rel="dns-prefetch" href="https://music.apple.com" />
        <link rel="dns-prefetch" href="https://music.youtube.com" />
        <link rel="dns-prefetch" href="https://soundcloud.com" />
        <link rel="dns-prefetch" href="https://deezer.com" />
        <link rel="dns-prefetch" href="https://music.amazon.com" />
        
        {/* Resource hints for critical resources */}
        <link rel="preload" href="/logos/main_logo2.png" as="image" type="image/png" />
        <link rel="preload" href="/logos/main_logo.jpg" as="image" type="image/jpeg" />
        
        {/* Critical CSS hint */}
        <link rel="preload" href="/fonts/Inter-VariableFont_slnt,wght.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/PlayfairDisplay-VariableFont_wght.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Favicon and app icons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/logos/main_logo2.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logos/main_logo2.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logos/main_logo2.png" />
        <link rel="mask-icon" href="/logos/main_logo2.png" color="#3b82f6" />
        
        {/* Microsoft tiles */}
        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta name="msapplication-TileImage" content="/logos/main_logo2.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Theme colors */}
        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-navbutton-color" content="#0f172a" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        
        {/* Geo tags */}
        <meta name="geo.region" content="TR" />
        <meta name="geo.placename" content="Turkey" />
        
        {/* Language alternatives */}
        <link rel="alternate" hrefLang="tr" href="https://issizlar.vercel.app" />
        <link rel="alternate" hrefLang="x-default" href="https://issizlar.vercel.app" />
      </head>
      <body
        className={`${inter.variable} ${playfairDisplay.variable} antialiased bg-slate-950 text-white relative min-h-screen font-display-swap`}
      >
        <StructuredData />
        <Analytics />
        <PerformanceMonitor />
        <SEOChecker />
        {/* Enhanced Background Effects */}
        <div className="pointer-events-none absolute inset-0 z-0">
          {/* Base gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"></div>
          
          {/* Enhanced radial gradients for more depth */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 15% 25%, #3b82f630 0%, transparent 60%)",
            }}
          ></div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 50% 40% at 85% 75%, #a78bfa28 0%, transparent 70%)",
            }}
          ></div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 95%, #06b6d425 0%, transparent 65%)",
            }}
          ></div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 45% 35% at 10% 80%, #8b5cf625 0%, transparent 75%)",
            }}
          ></div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 40% 30% at 90% 20%, #f59e0b20 0%, transparent 80%)",
            }}
          ></div>
          
          {/* Enhanced grid pattern overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          
          {/* Secondary grid for depth */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background:
                "linear-gradient(to right, rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,0.05) 1px, transparent 1px)",
              backgroundSize: "120px 120px",
            }}
          />
          
          {/* Animated gradient orbs */}
          <div className="absolute inset-0">
            <div
              className="absolute w-96 h-96 rounded-full animate-pulse"
              style={{
                background: "radial-gradient(circle, #3b82f615 0%, transparent 70%)",
                top: "10%",
                left: "10%",
                animationDuration: "4s",
              }}
            />
            <div
              className="absolute w-80 h-80 rounded-full animate-pulse"
              style={{
                background: "radial-gradient(circle, #a78bfa12 0%, transparent 70%)",
                top: "60%",
                right: "15%",
                animationDuration: "6s",
                animationDelay: "2s",
              }}
            />
            <div
              className="absolute w-72 h-72 rounded-full animate-pulse"
              style={{
                background: "radial-gradient(circle, #06b6d418 0%, transparent 70%)",
                bottom: "10%",
                left: "50%",
                transform: "translateX(-50%)",
                animationDuration: "5s",
                animationDelay: "1s",
              }}
            />
          </div>
          
          {/* Subtle noise texture */}
          <div
            className="absolute inset-0 opacity-25"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, transparent 50%, rgba(0,0,0,0.1) 100%)",
            }}
          />
          
          {/* Vignette effect */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.3) 100%)",
            }}
          />
        </div>
        
        {/* Main Content */}
        <div className="relative z-10" style={{ minHeight: 'calc(100vh - 5rem)' }}>
          {children}
        </div>
      </body>
    </html>
  );
}
