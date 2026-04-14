"use client";

import { useState } from "react";

export default function BookingWidget({ apartment }) {
  const [bedrooms, setBedrooms] = useState(apartment.pricing[0].beds);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1 Guest");

  const currentPrice = apartment.pricing.find(p => p.beds === parseInt(bedrooms))?.price || apartment.pricing[0].price;
  
  // Calculate nights based on dates
  let nights = 3; // Default to 3 nights
  if (checkIn && checkOut) {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end - start;
    if (diffTime > 0) {
      nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
  }

  // Base calculation
  const subtotal = currentPrice * nights;
  const total = subtotal;

  const handleBooking = () => {
    const checkInText = checkIn ? checkIn : "To be decided";
    const checkOutText = checkOut ? checkOut : "To be decided";
    const nightsText = (checkIn && checkOut) ? `${nights} nights` : "To be decided";

    const message = `Hello Maivian Luxury! I would like to book an apartment:

*Apartment:* ${apartment.name}
*Bedrooms:* ${bedrooms} Bedrooms
*Check-in:* ${checkInText}
*Check-out:* ${checkOutText}
*Nights:* ${nightsText}
*Guests:* ${guests}

*Estimated Total:* ₦${total.toLocaleString()}

Please confirm availability.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/2348163334514?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-secondary/80 p-5 lg:p-8 border border-white/10 sticky top-32 max-w-full box-border">
      <h3 className="text-2xl font-serif text-white mb-6">Reserve Now</h3>
      
      <div className="space-y-4 mb-8 max-w-full overflow-hidden">
        <div className="w-full">
          <label className="block text-xs uppercase tracking-widest text-gray-muted mb-2">Check-in</label>
          <input 
            type="date" 
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full max-w-full min-w-[0] bg-primary border border-white/20 text-white p-3 text-sm outline-none focus:border-gold block box-border" 
          />
        </div>
        <div className="w-full">
          <label className="block text-xs uppercase tracking-widest text-gray-muted mb-2">Check-out</label>
          <input 
            type="date" 
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            min={checkIn} // Optional: ensures checkout is after checkin
            className="w-full max-w-full min-w-[0] bg-primary border border-white/20 text-white p-3 text-sm outline-none focus:border-gold block box-border" 
          />
        </div>
        <div className="w-full">
          <label className="block text-xs uppercase tracking-widest text-gray-muted mb-2">Bedrooms to Book</label>
          <select 
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="w-full max-w-full min-w-[0] bg-primary border border-white/20 text-white p-3 text-sm outline-none focus:border-gold appearance-none block box-border"
          >
            {apartment.pricing.map(p => (
              <option key={p.beds} value={p.beds}>{p.beds} Bedrooms</option>
            ))}
          </select>
        </div>
        <div className="w-full">
          <label className="block text-xs uppercase tracking-widest text-gray-muted mb-2">Guests</label>
          <select 
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full max-w-full min-w-[0] bg-primary border border-white/20 text-white p-3 text-sm outline-none focus:border-gold appearance-none block box-border"
          >
            <option value="1 Guest">1 Guest</option>
            <option value="2 Guests">2 Guests</option>
            <option value="3 Guests">3 Guests</option>
            <option value="4+ Guests">4+ Guests</option>
          </select>
        </div>
      </div>

      <div className="border-t border-white/10 pt-4 mb-8">
        <div className="flex justify-between text-gray-muted mb-4">
          <span>₦{currentPrice.toLocaleString()} x {nights} nights</span>
          <span>₦{subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-white text-lg font-bold border-t border-white/10 pt-4">
          <span>Total</span>
          <span className="text-gold">₦{total.toLocaleString()}</span>
        </div>
      </div>

      <button 
        onClick={handleBooking}
        className="w-full bg-gold text-primary font-bold py-4 uppercase tracking-widest hover:bg-white transition-colors duration-300"
      >
        Confirm Booking
      </button>
    </div>
  );
}
