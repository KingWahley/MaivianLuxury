import Image from "next/image";

export const metadata = {
  title: "Our Story | Luxura",
  description: "Learn about Luxura's mission to redefine luxury shortlet living.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      {/* Header */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 bg-secondary/50 border-b border-white/5">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Our Story</h1>
          <div className="w-16 h-1 bg-gold mx-auto"></div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 relative h-[500px]">
            <Image 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
              alt="Luxury Living"
              fill
              className="object-cover"
            />
            <div className="absolute -bottom-8 -right-8 w-2/3 h-2/3 border-4 border-gold z-[-1] hidden md:block"></div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Elevating the Art of Hospitality</h2>
            <p className="text-gray-muted text-lg font-light leading-relaxed mb-6">
              Founded on the principle that luxury is not just a price tag, but an experience, Luxura was created to redefine the standard of shortlet apartments. We believe that whether you travel for business or leisure, your accommodation should offer the comfort of home combined with the premium services of a five-star hotel.
            </p>
            <p className="text-gray-muted text-lg font-light leading-relaxed mb-8">
              Every residence in our portfolio is meticulously selected and curated with bespoke furnishings, modern amenities, and uncompromising attention to detail, ensuring an unforgettable stay.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <span className="block text-4xl text-gold font-serif mb-2">50+</span>
                <span className="text-sm uppercase tracking-widest text-gray-muted">Luxury Properties</span>
              </div>
              <div>
                <span className="block text-4xl text-gold font-serif mb-2">5k+</span>
                <span className="text-sm uppercase tracking-widest text-gray-muted">Happy Guests</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
