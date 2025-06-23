import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Music } from "@/components/Music";
import { Members } from "@/components/Members";
import { Events } from "@/components/Events";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Issızlar - Türk Müzik Grubu | Ana Sayfa | Rock ve Alternatif Müzik",
  description: "Issızlar müzik grubu resmi websitesi. Modern Türk rock ve alternatif müziğin özgün sesi. Spotify, Apple Music ve tüm platformlarda dinleyin. Ruhun derinliklerinden gelen melodiler, kalbin sessizliğinde yankılanan şarkılar.",
  keywords: "Issızlar, Türk müzik grubu, rock müzik, alternatif müzik, indie rock, konser, Spotify, Apple Music, YouTube Music, SoundCloud",
  openGraph: {
    title: "Issızlar - Türk Müzik Grubu | Rock ve Alternatif Müzik",
    description: "Modern Türk rock ve alternatif müziğin özgün sesi. Ruhun derinliklerinden gelen melodiler. Spotify, Apple Music ve tüm platformlarda dinleyin.",
    url: "https://issizlar.vercel.app",
    type: "website",
    locale: "tr_TR",
    siteName: "Issızlar",
    images: [
      {
        url: "https://issizlar.vercel.app/logos/main_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Issızlar Müzik Grubu - Türk Rock ve Alternatif Müzik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Issızlar - Türk Müzik Grubu",
    description: "Modern Türk rock ve alternatif müziğin özgün sesi. Spotify, Apple Music ve tüm platformlarda dinleyin.",
    images: ["https://issizlar.vercel.app/logos/main_logo.jpg"],
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
  alternates: {
    canonical: "https://issizlar.vercel.app",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Skip to main content for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
      >
        Ana içeriğe geç
      </a>
      
      <Navigation />
      
      {/* Main content wrapper with semantic HTML */}
      <div id="main-content">
        <Hero />
        <About />
        <Music />
        <Members />
        <Events />
        <Contact />
      </div>
    </main>
  );
}
