import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Maivan Luxury | Premium Shortlet Apartments",
    template: "%s | Maivan Luxury"
  },
  description: "Experience Luxury Living, Redefined. Premium shortlet apartments designed for exceptional comfort, privacy, and class.",
  keywords: ["luxury apartments", "shortlet", "premium accommodation", "maivan luxury", "vacation rentals", "luxury stays"],
  authors: [{ name: "Maivan Luxury" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Maivan Luxury",
    title: "Maivan Luxury | Premium Shortlet Apartments",
    description: "Experience Luxury Living, Redefined. Premium shortlet apartments designed for comfort, exclusivity, and class.",
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
    title: "Maivan Luxury | Premium Shortlet Apartments",
    description: "Experience Luxury Living, Redefined. Premium shortlet apartments designed for exceptional comfort.",
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
