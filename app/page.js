"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Zap, MapPin, ConciergeBell, ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2000&auto=format&fit=crop"
            alt="Luxury Apartment"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/90"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-6 text-center mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight mb-6"
          >
            Maivian Luxury 
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-muted max-w-2xl mx-auto mb-10 font-light tracking-wide"
          >
            Premium shortlet apartments designed for the ultimate comfort, exclusivity, and class.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link href="/apartments" className="px-8 py-4 bg-gold text-primary font-bold tracking-widest uppercase text-sm hover:bg-white transition-all duration-300 w-full sm:w-auto text-center">
              Book Now
            </Link>
            <Link href="/apartments" className="px-8 py-4 border border-white/30 text-white font-bold tracking-widest uppercase text-sm hover:border-white hover:bg-white/10 transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2">
              Explore <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-primary relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Uncompromising Quality</h2>
            <div className="w-16 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Star, title: "Premium Interiors", desc: "Curated furnishings and breathtaking aesthetics that redefine modern living." },
              { icon: Zap, title: "24/7 Power", desc: "Uninterrupted living with backup power and round-the-clock professional security." },
              { icon: MapPin, title: "Prime Location", desc: "Situated in the most sought-after neighborhoods for your convenience." },
              { icon: ConciergeBell, title: "Concierge Services", desc: "Tailored services catering to your every need, whenever you need them." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group flex flex-col items-center text-center p-8 border border-white/5 bg-secondary/30 hover:bg-secondary/80 transition-colors duration-500"
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-gold/20">
                  <feature.icon className="text-gold" size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-white mb-3">{feature.title}</h3>
                <p className="text-gray-muted text-sm leading-relaxed font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Apartments */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Available Apartments</h2>
              <div className="w-16 h-1 bg-gold"></div>
            </div>
            <Link href="/apartments" className="hidden md:flex items-center gap-2 text-gold hover:text-white transition-colors duration-300 uppercase tracking-widest text-sm mt-6 md:mt-0">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "The Penthouse", price: "$450", img: "/images/Penthouse/1.jpeg" },
              { name: "3 bedroom luxury apartment", price: "$650", img: "/images/3 bedroom luxury apartment/1.jpeg" }
            ].map((apt, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="group cursor-pointer relative overflow-hidden"
              >
                <div className="relative h-[450px] w-full overflow-hidden">
                  <Image 
                    src={apt.img}
                    alt={apt.name}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-2xl font-serif text-white mb-2">{apt.name}</h3>
                      <p className="text-gold font-sans font-semibold tracking-wide">{apt.price} <span className="text-gray-muted text-sm font-normal">/ night</span></p>
                    </div>
                  </div>
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <span className="inline-block border-b border-gold text-white text-sm tracking-widest uppercase pb-1">Explore Apartment</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link href="/apartments" className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors duration-300 uppercase tracking-widest text-sm border-b border-gold pb-1">
              View All Apartments <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Reviews From Our Guests</h2>
            <div className="w-16 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Chioma O.", role: "Business Executive", text: "Maivian Luxury provided an experience unlike any other. The attention to detail and 24/7 concierge service made my stay exceptional.", rating: 5 },
              { name: "Adekunle T.", role: "International Traveler", text: "A true masterclass in hospitality. The penthouse was stunning, and the location was perfectly central to everything I needed.", rating: 5 },
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
                  <p className="text-gold text-sm tracking-widest uppercase mt-1 text-xs">{review.role}</p>
                </div>
                <div className="absolute top-2 right-6 opacity-10 pointer-events-none">
                  <span className="text-8xl font-serif text-white leading-none">"</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop"
            alt="Luxury Interior"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            Ready to Elevate Your Stay?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-muted max-w-xl mx-auto mb-10 text-lg font-light leading-relaxed"
          >
            Book your stay today and experience the perfect blend of comfort, privacy, and luxury.
          </motion.p>
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
          >
            <Link href="/apartments" className="inline-block px-10 py-5 bg-gold text-primary font-bold tracking-widest uppercase text-sm hover:bg-white transition-all duration-300">
              Reserve Your Suite
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
