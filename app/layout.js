import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL ||
  "https://www.maivanluxuryapartments.com";

function normalizeSiteUrl(value) {
  const withProtocol = value.startsWith("http") ? value : `https://${value}`;
  return withProtocol.replace(/\/+$/, "");
}

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(normalizeSiteUrl(siteUrl)),
  title: {
    default: "Maivan Luxury Abuja | Premium Shortlet Apartments in Nigeria",
    template: "%s | Maivan Luxury"
  },
  description: "Experience luxury living in Abuja, Nigeria. Maivan Luxury offers premium shortlet apartments designed for exceptional comfort, privacy, and class.",
  keywords: [
    "luxury apartments Abuja",
    "shortlet Abuja",
    "premium accommodation Abuja Nigeria",
    "maivan luxury",
    "vacation rentals Abuja",
    "luxury stays Nigeria",
    "Abuja shortlet apartments",
    "serviced apartments Abuja",
  ],
  authors: [{ name: "Maivan Luxury" }],
  category: "Travel",
  other: {
    "geo.region": "NG-FC",
    "geo.placename": "Abuja, Nigeria",
    "ICBM": "9.0765, 7.3986",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Maivan Luxury",
    title: "Maivan Luxury Abuja | Premium Shortlet Apartments in Nigeria",
    description: "Experience luxury living in Abuja, Nigeria with premium shortlet apartments designed for comfort, exclusivity, and class.",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Maivan Luxury",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maivan Luxury Abuja | Premium Shortlet Apartments in Nigeria",
    description: "Experience luxury living in Abuja, Nigeria with premium shortlet apartments designed for exceptional comfort.",
    images: ["/images/logo.jpeg"],
  },
  icons: {
    icon: "/images/logo.jpeg",
    shortcut: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-primary text-white font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
