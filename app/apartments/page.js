import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Filter, MapPin, Bed, Bath } from "lucide-react";

export const metadata = {
  title: "Our Residences | Maivian Luxury",
  description: "Browse our exclusive collection of luxury shortlet apartments.",
};

const apartments = [
  { id: 1, name: "The Presidential Suite", location: "Downtown Metropolis", price: "$450", beds: 3, baths: 3, img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, name: "Oceanview Penthouse", location: "Coastal Bay", price: "$650", beds: 4, baths: 4, img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, name: "Urban City Loft", location: "Midtown", price: "$320", beds: 2, baths: 2, img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, name: "The Zenith Villa", location: "Highland Park", price: "$850", beds: 5, baths: 6, img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop" },
  { id: 5, name: "Elegance Studio", location: "Downtown Metropolis", price: "$200", beds: 1, baths: 1, img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000&auto=format&fit=crop" },
  { id: 6, name: "Skyline Retreat", location: "Financial District", price: "$510", beds: 2, baths: 3, img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" },
];

export default function ApartmentsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      {/* Header */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 bg-secondary/50 border-b border-white/5">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Our Residences</h1>
          <p className="text-gray-muted max-w-2xl text-lg font-light">
            Discover our curated collection of extraordinary homes, handpicked for their unique charm, premium amenities, and unparalleled comfort.
          </p>
        </div>
      </section>

      {/* Listing Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar / Filters (UI Only) */}
          <aside className="w-full lg:w-1/4">
            <div className="bg-secondary/40 p-8 border border-white/5 rounded-sm lg:sticky top-32">
              <div className="flex items-center gap-2 text-white mb-8 border-b border-white/10 pb-4">
                <Filter size={20} className="text-gold" />
                <h3 className="font-serif text-xl">Refine Search</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-muted mb-2 uppercase tracking-wide">Location</label>
                  <select className="w-full bg-primary border border-white/10 text-white p-3 focus:border-gold outline-none transition-colors appearance-none rounded-none">
                    <option>All Locations</option>
                    <option>Downtown Metropolis</option>
                    <option>Coastal Bay</option>
                    <option>Midtown</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-muted mb-2 uppercase tracking-wide">Guests</label>
                  <select className="w-full bg-primary border border-white/10 text-white p-3 focus:border-gold outline-none transition-colors appearance-none rounded-none">
                    <option>Any</option>
                    <option>1-2 Guests</option>
                    <option>3-4 Guests</option>
                    <option>5+ Guests</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-muted mb-2 uppercase tracking-wide">Price Range</label>
                  <input type="range" className="w-full accent-gold" min="100" max="1000" />
                  <div className="flex justify-between text-xs text-gray-muted mt-2">
                    <span>$100</span>
                    <span>$1000+</span>
                  </div>
                </div>

                <button className="w-full bg-gold text-primary font-bold py-3 uppercase tracking-widest text-sm hover:bg-white transition-colors mt-8">
                  Apply Filters
                </button>
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8">
            {apartments.map((apt) => (
              <div key={apt.id} className="group border border-white/5 bg-secondary/20 hover:bg-secondary/50 transition-colors duration-300">
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
                    <MapPin size={14} className="text-gold" />
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
                  <Link href={`/apartments/${apt.id}`} className="flex items-center justify-between text-sm uppercase tracking-widest font-semibold text-white group-hover:text-gold transition-colors">
                    View Details <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
