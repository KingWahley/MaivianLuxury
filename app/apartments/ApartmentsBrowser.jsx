"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Bed, Bath } from "lucide-react";
import FilterSidebar from "./FilterSidebar";

export default function ApartmentsBrowser({ initialApartments }) {
  const [apartments, setApartments] = useState(initialApartments);

  const handleFilter = (filters) => {
    let filtered = initialApartments;

    if (filters.location && filters.location !== "All Locations") {
      filtered = filtered.filter(apt => apt.area.toLowerCase() === filters.location.toLowerCase());
    }

    if (filters.guests && filters.guests !== "Any") {
      filtered = filtered.filter(apt => {
        if (filters.guests === "1-2 Guests") return apt.guests >= 1; // Simplistic match, usually means apt supports at least 1-2
        if (filters.guests === "3-4 Guests") return apt.guests >= 3;
        if (filters.guests === "5+ Guests") return apt.guests >= 5;
        return true;
      });
    }

    if (filters.price) {
      filtered = filtered.filter(apt => {
        // Base price is the cheapest available layout
        const basePrice = apt.pricing[0].price;
        return basePrice <= filters.price;
      });
    }

    setApartments(filtered);
  };

  return (
    <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12">
      <FilterSidebar onFilter={handleFilter} />

      <div className="w-full lg:w-3/4">
        {apartments.length === 0 ? (
          <div className="text-center py-20 text-gray-muted text-lg border border-white/5 bg-secondary/20">
            No apartments match your search criteria. Please adjust your filters.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {apartments.map((apt) => (
              <div key={apt.id} className="group border border-white/5 bg-secondary/20 hover:bg-secondary/50 transition-colors duration-300">
                <Link href={`/apartments/${apt.id}`}>
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={apt.img}
                    alt={apt.name}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-primary/80 backdrop-blur-sm px-3 py-1 border border-white/10 pointer-events-none">
                    <span className="text-gold font-bold">{apt.price}</span>
                    <span className="text-gray-muted text-xs">/night</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-muted mb-2">
                    <MapPin size={30} className="text-gold" />
                    <span>{apt.location}</span>
                  </div>
                  <h3 className="text-xl font-serif text-white mb-4">{apt.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-muted mb-6 pb-6 border-b border-white/5">
                    <div className="flex items-center gap-1">
                      <Bed size={16} /> <span>{apt.beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath size={16} /> <span>{apt.baths} Baths</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm uppercase tracking-widest font-semibold text-white group-hover:text-gold transition-colors">
                    View Details <ArrowRight size={16} />
                  </div>
                </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
