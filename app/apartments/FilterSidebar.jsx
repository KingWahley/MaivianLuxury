"use client";

import { useState } from "react";
import { Filter, ChevronDown, ChevronUp } from "lucide-react";

export default function FilterSidebar({ onFilter }) {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState("All Locations");
  const [guests, setGuests] = useState("Any");
  
  // The highest base price is 170k, so 200k max is good.
  const [price, setPrice] = useState(200000); 

  const handleApply = () => {
    if (onFilter) {
      onFilter({ location, guests, price });
    }
    // Auto-close on mobile after applying
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  return (
    <aside className="w-full lg:w-1/4">
      <div className="bg-secondary/40 p-6 lg:p-8 border border-white/5 rounded-sm lg:sticky top-32">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between text-white lg:mb-8 border-b border-white/10 pb-4 lg:pointer-events-none"
        >
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-gold" />
            <h3 className="font-serif text-xl">Refine Search</h3>
          </div>
          <div className="lg:hidden text-gold pointer-events-auto">
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </button>
        
        <div className={`space-y-6 pt-6 lg:pt-0 ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <div>
            <label className="block text-sm text-gray-muted mb-2 uppercase tracking-wide">Location</label>
            <select 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-primary border border-white/10 text-white p-3 focus:border-gold outline-none transition-colors appearance-none rounded-none"
            >
              <option>All Locations</option>
              <option>Dawaki</option>
              <option>Maitama</option>
              <option>Wuse</option>
              <option>Gwarinpa</option>
              <option>Asokoro</option>
              <option>Jabi</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm text-gray-muted mb-2 uppercase tracking-wide">Guests</label>
            <select 
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-primary border border-white/10 text-white p-3 focus:border-gold outline-none transition-colors appearance-none rounded-none"
            >
              <option>Any</option>
              <option>1-2 Guests</option>
              <option>3-4 Guests</option>
              <option>5+ Guests</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-muted mb-2 uppercase tracking-wide">Max Price / Night</label>
            <input 
              type="range" 
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full accent-gold" 
              min="50000" 
              max="300000" 
              step="10000"
            />
            <div className="flex justify-between text-xs text-gray-muted mt-2">
              <span>₦50k</span>
              <span className="text-white font-bold">₦{(price / 1000).toFixed(0)}k</span>
              <span>₦300k+</span>
            </div>
          </div>

          <button 
            onClick={handleApply}
            className="w-full bg-gold text-primary font-bold py-3 uppercase tracking-widest text-sm hover:bg-white transition-colors mt-8"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </aside>
  );
}
