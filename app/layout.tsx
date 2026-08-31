import type { Metadata } from "next";
import { Inter, Instrument_Sans } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/SiteShell";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Indo Asia Cargo Movers — Transport & Logistics Hyderabad",
    template: "%s | Indo Asia Cargo Movers",
  },
  description: "Reliable Transport & Logistics Solutions for Businesses That Keep Moving. Hyderabad-based cargo movers — FTL, PTL, warehousing & distribution. Call 90000 70930.",
  metadataBase: new URL("https://indo-asiacargo.example.com"),
  openGraph: {
    title: "Indo Asia Cargo Movers — Reliable Transport & Logistics",
    description: "Hyderabad-based logistics partner for FTL, PTL, cargo & warehousing. Professional handling, timely coordination.",
    type: "website",
  },
  keywords: ["transport services Hyderabad", "logistics Hyderabad", "cargo movers Hyderabad", "FTL PTL transport", "warehousing Hyderabad"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Indo Asia Cargo Movers",
    image: "/logo.jpeg",
    telephone: "+91-9000070930",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 194B, Telecom Colony, Kalajeguda, Alwal",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500015",
      addressCountry: "IN",
    },
    url: "https://indo-asiacargo.example.com",
    description: "Reliable Transport & Logistics Solutions — FTL, PTL, cargo transportation, warehousing & distribution from Hyderabad.",
  };
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
