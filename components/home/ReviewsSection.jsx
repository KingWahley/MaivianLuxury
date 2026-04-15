"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function ReviewsSection() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Reviews From Our Guests</h2>
          <div className="w-16 h-1 bg-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Chioma O.", role: "Business Executive", text: "Maivan Luxury provided an experience unlike any other. The attention to detail and 24/7 concierge service made my stay exceptional.", rating: 5 },
            { name: "Adekunle T.", role: "International Traveler", text: "A true masterclass in hospitality. The penthouse was stunning, and the location was perfectly central to everything I needed. Highly recommended!", rating: 5 },
            { name: "Amina B.", role: "Fashion Designer", text: "The aesthetic of these apartments is simply breathtaking. Every piece of furniture feels curated. I will definitely be returning.", rating: 5 }
          ].map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-secondary/30 p-10 border border-white/5 relative group hover:bg-secondary/60 transition-colors duration-500"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className="text-gold" />
                ))}
              </div>
              <p className="text-gray-muted text-lg font-light leading-relaxed mb-8 italic">"{review.text}"</p>
              <div>
                <h4 className="text-white font-serif font-bold">{review.name}</h4>
                {/* <p className="text-gold text-sm tracking-widest uppercase mt-1 text-xs">{review.role}</p> */}
              </div>
              <div className="absolute top-2 right-6 opacity-10 pointer-events-none">
                <span className="text-8xl font-serif text-white leading-none">"</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
