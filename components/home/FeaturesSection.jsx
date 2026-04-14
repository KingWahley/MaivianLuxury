"use client";
import { motion } from "framer-motion";
import { Zap, MapPin, ConciergeBell, Star } from "lucide-react";

export default function FeaturesSection() {
  return (
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
  );
}
