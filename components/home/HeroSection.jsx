"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
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
          className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight mb-6"
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
          <Link href="https://api.whatsapp.com/send/?phone=2348163334514" className="px-8 py-4 bg-gold text-primary font-bold tracking-widest uppercase text-sm hover:bg-white transition-all duration-300 w-full sm:w-auto text-center">
            Book Now
          </Link>
          <Link href="/apartments" className="px-8 py-4 border border-white/30 text-white font-bold tracking-widest uppercase text-sm hover:border-white hover:bg-white/10 transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2">
            Explore <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
