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
    default: "Maivian Luxury | Premium Shortlet Apartments",
    template: "%s | Maivian Luxury"
  },
  description: "Experience Luxury Living, Redefined. Premium shortlet apartments designed for exceptional comfort, privacy, and class.",
  keywords: ["luxury apartments", "shortlet", "premium accommodation", "maivian luxury", "vacation rentals", "luxury stays"],
  authors: [{ name: "Maivian Luxury" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Maivian Luxury",
    title: "Maivian Luxury | Premium Shortlet Apartments",
    description: "Experience Luxury Living, Redefined. Premium shortlet apartments designed for comfort, exclusivity, and class.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Maivian Luxury",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maivian Luxury | Premium Shortlet Apartments",
    description: "Experience Luxury Living, Redefined. Premium shortlet apartments designed for exceptional comfort.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
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
