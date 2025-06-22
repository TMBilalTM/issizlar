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
        className={`${inter.variable} ${playfairDisplay.variable} antialiased bg-slate-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
