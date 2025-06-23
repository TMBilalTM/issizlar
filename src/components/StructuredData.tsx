"use client";

import Script from 'next/script';

export function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": "Issızlar",
    "alternateName": "Issızlar Müzik Grubu",
    "url": "https://issizlar.vercel.app",
    "logo": "https://issizlar.vercel.app/logos/main_logo.jpg",
    "image": [
      "https://issizlar.vercel.app/logos/main_logo.jpg",
      "https://issizlar.vercel.app/logos/main_logo2.png"
    ],
    "description": "Ruhun derinliklerinden gelen melodiler, kalbin sessizliğinde yankılanan şarkılar. Modern Türk rock ve alternatif müziğin özgün sesi.",
    "genre": ["Rock", "Alternative Rock", "Indie Rock", "Turkish Rock"],
    "foundingDate": "2024",
    "foundingLocation": {
      "@type": "Country",
      "name": "Turkey"
    },
    "memberOf": {
      "@type": "Organization",
      "name": "Turkish Music Industry"
    },
    "sameAs": [
      "https://open.spotify.com/artist/issizlar",
      "https://music.apple.com/artist/issizlar",
      "https://music.youtube.com/channel/issizlar",
      "https://soundcloud.com/issizlar",
      "https://www.instagram.com/issizlar_band",
      "https://twitter.com/issizlar_band",
      "https://www.facebook.com/issizlar.band"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-555-123-4567",
      "contactType": "customer service",
      "email": "info@issizlar.com",
      "availableLanguage": "Turkish"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TR",
      "addressLocality": "Istanbul"
    }
  };

  const albumsData = [
    {
      "@context": "https://schema.org",
      "@type": "MusicAlbum",
      "name": "Sessizliğin Derinliği",
      "byArtist": {
        "@type": "MusicGroup",
        "name": "Issızlar"
      },
      "datePublished": "2025",
      "genre": ["Rock", "Alternative"],
      "numTracks": 4,
      "description": "İlk albümümüz, modern yaşamın yalnızlığını ve iç dünyamızın derinliklerini keşfediyor.",
      "track": [
        {
          "@type": "MusicRecording",
          "name": "Kaybolmuş Rüyalar",
          "duration": "PT4M23S",
          "byArtist": {
            "@type": "MusicGroup", 
            "name": "Issızlar"
          }
        },
        {
          "@type": "MusicRecording",
          "name": "Gecenin Sessizliği",
          "duration": "PT3M45S",
          "byArtist": {
            "@type": "MusicGroup",
            "name": "Issızlar"
          }
        },
        {
          "@type": "MusicRecording",
          "name": "Uzak Anılar", 
          "duration": "PT5M12S",
          "byArtist": {
            "@type": "MusicGroup",
            "name": "Issızlar"
          }
        },
        {
          "@type": "MusicRecording",
          "name": "Yalnızlığın Şarkısı",
          "duration": "PT4M01S",
          "byArtist": {
            "@type": "MusicGroup",
            "name": "Issızlar"
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MusicAlbum",
      "name": "Umudun Işığı",
      "byArtist": {
        "@type": "MusicGroup",
        "name": "Issızlar"
      },
      "datePublished": "2025",
      "genre": ["Rock", "Alternative"],
      "numTracks": 4,
      "description": "İkinci albümümüzde, karanlığın ardından gelen ışığı ve yeniden doğuşu anlatıyoruz.",
      "track": [
        {
          "@type": "MusicRecording",
          "name": "Yeni Başlangıç",
          "duration": "PT3M58S",
          "byArtist": {
            "@type": "MusicGroup",
            "name": "Issızlar"
          }
        },
        {
          "@type": "MusicRecording",
          "name": "Işığın Peşinde",
          "duration": "PT4M31S",
          "byArtist": {
            "@type": "MusicGroup",
            "name": "Issızlar"
          }
        },
        {
          "@type": "MusicRecording",
          "name": "Umudun Gücü",
          "duration": "PT5M05S",
          "byArtist": {
            "@type": "MusicGroup",
            "name": "Issızlar"
          }
        },
        {
          "@type": "MusicRecording",
          "name": "Özgürlük",
          "duration": "PT4M44S",
          "byArtist": {
            "@type": "MusicGroup",
            "name": "Issızlar"
          }
        }
      ]
    }
  ];

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Issızlar - Türk Müzik Grubu",
    "url": "https://issizlar.vercel.app",
    "description": "Issızlar müzik grubu resmi websitesi. Ruhun derinliklerinden gelen melodiler, kalbin sessizliğinde yankılanan şarkılar.",
    "inLanguage": "tr-TR",
    "publisher": {
      "@type": "MusicGroup",
      "name": "Issızlar"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://issizlar.vercel.app/?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Ana Sayfa",
        "item": "https://issizlar.vercel.app"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": "Hakkımızda",
        "item": "https://issizlar.vercel.app#about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Müziklerimiz",
        "item": "https://issizlar.vercel.app#music"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Grup Üyeleri",
        "item": "https://issizlar.vercel.app#members"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Etkinlikler",
        "item": "https://issizlar.vercel.app#events"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "İletişim",
        "item": "https://issizlar.vercel.app#contact"
      }
    ]
  };

  return (
    <>
      <Script
        id="organization-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <Script
        id="albums-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(albumsData),
        }}
      />
      <Script
        id="website-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
      <Script
        id="breadcrumb-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
      />
    </>
  );
}
