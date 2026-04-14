import Image from "next/image";
import Link from "next/link";
import { MapPin, Bed, Bath, Users, Wifi, Tv, Coffee, Wind, ArrowLeft, Star, ShieldCheck } from "lucide-react";
import GallerySlider from "./GallerySlider";
import BookingWidget from "./BookingWidget";

import { apartments } from "../../data/apartments";

export default async function ApartmentDetails({ params }) {
  // In Next.js 15, params is a Promise.
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const apt = apartments.find(a => a.id.toString() === id);

  if (!apt) {
    return (
      <div className="pt-40 pb-20 bg-primary min-h-screen flex items-center justify-center text-white font-serif text-2xl">
        Apartment not found
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-primary min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <Link href="/apartments" className="inline-flex items-center gap-2 text-gray-muted hover:text-white transition-colors mb-8 text-sm uppercase tracking-wider">
          <ArrowLeft size={16} /> Back to Residences
        </Link>

        {/* Hero Gallery */}
        <GallerySlider images={apt.images} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Details */}
          <div className="lg:col-span-2">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-white">{apt.name}</h1>
              <div className="bg-secondary/50 px-6 py-2 border border-gold/30 self-start">
                <span className="text-xl font-bold text-gold">{apt.price}</span>
                <span className="text-gray-muted text-sm"> / night</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-gray-muted mb-8">
              <MapPin size={18} className="text-gold" />
              <span className="text-lg">{apt.location}</span>
            </div>

            <div className="flex overflow-x-auto gap-8 mb-12 pb-8 border-b border-white/10 text-gray-muted">
              <div className="flex items-center gap-2 whitespace-nowrap"><Users size={20} className="text-gold"/> {apt.guests} Guests</div>
              <div className="flex items-center gap-2 whitespace-nowrap"><Bed size={20} className="text-gold"/> {apt.beds} Bedrooms</div>
              <div className="flex items-center gap-2 whitespace-nowrap"><Bath size={20} className="text-gold"/> {apt.baths} Bathrooms</div>
              <div className="flex items-center gap-2 whitespace-nowrap"><Coffee size={20} className="text-gold"/> Kitchen</div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-serif text-white mb-6">About this residence</h2>
              <p className="text-gray-muted leading-relaxed font-light text-lg">
                {apt.description}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-white mb-6">Premium Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                <div className="flex items-center gap-3 text-gray-muted text-sm"><Wifi className="text-white" size={18} /> High-Speed WiFi</div>
                <div className="flex items-center gap-3 text-gray-muted text-sm"><Wind className="text-white" size={18} /> Air Conditioning</div>
                <div className="flex items-center gap-3 text-gray-muted text-sm"><Tv className="text-white" size={18} /> Smart TV</div>
                <div className="flex items-center gap-3 text-gray-muted text-sm"><ShieldCheck className="text-white" size={18} /> 24/7 Security</div>
                <div className="flex items-center gap-3 text-gray-muted text-sm"><Star className="text-white" size={18} /> Concierge</div>
              </div>
            </div>
          </div>

          {/* Booking Widget */}
          <div className="lg:col-span-1">
            <BookingWidget apartment={apt} />
          </div>
        </div>
      </div>
    </div>
  );
}
