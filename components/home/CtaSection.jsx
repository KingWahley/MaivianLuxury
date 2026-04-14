"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
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
          <Link href="https://api.whatsapp.com/send/?phone=2348163334514" className="inline-block px-10 py-5 bg-gold text-primary font-bold tracking-widest uppercase text-sm hover:bg-white transition-all duration-300">
            Reserve Your Suite
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
