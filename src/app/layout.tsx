import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

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
  title: "Issızlar - Türk Müzik Grubu",
  description: "Issızlar müzik grubu resmi websitesi. Ruhun derinliklerinden gelen melodiler, kalbin sessizliğinde yankılanan şarkılar.",
  keywords: "Issızlar, müzik grubu, Türk müziği, rock, alternatif, indie, konser, müzik",
  authors: [{ name: "Issızlar" }],
  openGraph: {
    title: "Issızlar - Türk Müzik Grubu",
    description: "Ruhun derinliklerinden gelen melodiler, kalbin sessizliğinde yankılanan şarkılar.",
    type: "website",
    locale: "tr_TR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} antialiased bg-slate-950 text-white relative min-h-screen`}
      >
        {/* Background Effects */}
        <div className="pointer-events-none absolute inset-0 z-0">

          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 40% 30% at 80% 80%, #a78bfa22 0%, transparent 80%)",
            }}
          ></div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
              backgroundSize: "120px 120px",
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
