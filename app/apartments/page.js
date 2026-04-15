import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Bed, Bath } from "lucide-react";
import FilterSidebar from "./FilterSidebar";

export const metadata = {
  title: "Our Residences | Maivan Luxury",
  description: "Browse our exclusive collection of luxury shortlet apartments.",
};

import ApartmentsBrowser from "./ApartmentsBrowser";
import { apartments } from "../data/apartments";

export default function ApartmentsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      {/* Header */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 bg-secondary/50 border-b border-white/5">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Our Apartments</h1>
          <p className="text-gray-muted max-w-2xl text-lg font-light">
            Discover our curated collection of extraordinary homes, handpicked for their unique charm, premium amenities, and unparalleled comfort.
          </p>
        </div>
      </section>

      {/* Listing Content */}
      <section className="py-16">
        <ApartmentsBrowser initialApartments={apartments} />
      </section>
    </div>
  );
}
