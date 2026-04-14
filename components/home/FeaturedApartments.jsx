"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { apartments } from "../../app/data/apartments";

export default function FeaturedApartments() {
  return (
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
          {apartments.slice(0, 2).map((apt, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group cursor-pointer relative overflow-hidden"
            >
              <Link href={`/apartments/${apt.id}`} className="block h-full w-full">
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
              </Link>
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
  );
}
