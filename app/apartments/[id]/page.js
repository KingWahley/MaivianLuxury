import Image from "next/image";
import Link from "next/link";
import { MapPin, Bed, Bath, Users, Wifi, Tv, Coffee, Wind, ArrowLeft, Star, ShieldCheck } from "lucide-react";
import GallerySlider from "./GallerySlider";

export default async function ApartmentDetails({ params }) {
  // In Next.js 15, params is a Promise.
  const resolvedParams = await params;
  const { id } = resolvedParams;

  let apt = {};
  if (id === '1') {
    apt = {
      id,
      name: "The Penthouse",
      location: "No 1 Oladikpo ige street harmony estate news engineering Dawaki",
      price: "$450",
      beds: 3,
      baths: 3,
      guests: 6,
      images: Array.from({length: 31}, (_, i) => `/images/Penthouse/${i + 1}.jpeg`),
      description: "Experience unparalleled luxury in The Penthouse. Spanning the entire top floor, this residence offers breathtaking city views, custom designer furnishings, and state-of-the-art smart home integration. Perfect for families or executives seeking the finest accommodations."
    };
  } else {
    apt = {
      id,
      name: "3 bedroom luxury apartment",
      location: "No 1 dr Goddy Idam street Aisha estate Dawaki. Behind Dawaki modern market",
      price: "$650",
      beds: 4,
      baths: 4,
      guests: 8,
      images: Array.from({length: 18}, (_, i) => `/images/3 bedroom luxury apartment/${i + 1}.jpeg`),
      description: "Discover true comfort in this 3 bedroom luxury apartment. Handpicked for its unique charm, premium amenities, and unparalleled elegance. Make yourself at home in our curated collection of extraordinary residences."
    };
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
            <div className="bg-secondary/80 p-8 border border-white/10 sticky top-32">
              <h3 className="text-2xl font-serif text-white mb-6">Reserve Now</h3>
              
              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-muted mb-2">Check-in</label>
                  <input type="date" className="w-full bg-primary border border-white/20 text-white p-4 outline-none focus:border-gold" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-muted mb-2">Check-out</label>
                  <input type="date" className="w-full bg-primary border border-white/20 text-white p-4 outline-none focus:border-gold" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-muted mb-2">Guests</label>
                  <select className="w-full bg-primary border border-white/20 text-white p-4 outline-none focus:border-gold appearance-none">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4+ Guests</option>
                  </select>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 mb-8">
                <div className="flex justify-between text-gray-muted mb-2">
                  <span>{apt.price} x 3 nights</span>
                  <span>$1,350</span>
                </div>
                <div className="flex justify-between text-gray-muted mb-4">
                  <span>Service fee</span>
                  <span>$150</span>
                </div>
                <div className="flex justify-between text-white text-lg font-bold border-t border-white/10 pt-4">
                  <span>Total</span>
                  <span className="text-gold">$1,500</span>
                </div>
              </div>

              <button className="w-full bg-gold text-primary font-bold py-4 uppercase tracking-widest hover:bg-white transition-colors duration-300">
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
