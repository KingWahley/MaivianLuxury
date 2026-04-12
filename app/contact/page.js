"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      {/* Header */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 bg-secondary/50 border-b border-white/5">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-gray-muted max-w-2xl mx-auto text-lg font-light mb-6">
            Our concierge team is available around the clock to assist you with inquiries, reservations, or special requests.
          </p>
          <div className="w-16 h-1 bg-gold mx-auto"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
          
          {/* Contact Details */}
          <div className="w-full lg:w-1/3 space-y-12">
            <div>
              <h2 className="text-2xl font-serif text-white mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1"><MapPin className="text-gold" size={24} /></div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Our Headquarters</h3>
                    <p className="text-gray-muted font-light leading-relaxed">123 Luxury Avenue, Penthouse Level<br />Metropolis, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1"><Phone className="text-gold" size={24} /></div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone Number</h3>
                    <p className="text-gray-muted font-light">+1 (555) 123-4567<br />+1 (555) 987-6543 (Concierge)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1"><Mail className="text-gold" size={24} /></div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email Address</h3>
                    <p className="text-gray-muted font-light">reservations@maivianluxury.com<br />inquiries@maivianluxury.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-secondary/30 p-8 md:p-12 border border-white/5">
              <h2 className="text-2xl font-serif text-white mb-8">Send a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-muted mb-2">First Name</label>
                    <input type="text" className="w-full bg-primary border border-white/10 text-white p-4 outline-none focus:border-gold transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-muted mb-2">Last Name</label>
                    <input type="text" className="w-full bg-primary border border-white/10 text-white p-4 outline-none focus:border-gold transition-colors" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-muted mb-2">Email Address</label>
                    <input type="email" className="w-full bg-primary border border-white/10 text-white p-4 outline-none focus:border-gold transition-colors" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-muted mb-2">Phone Number</label>
                    <input type="tel" className="w-full bg-primary border border-white/10 text-white p-4 outline-none focus:border-gold transition-colors" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-muted mb-2">Message</label>
                  <textarea rows="5" className="w-full bg-primary border border-white/10 text-white p-4 outline-none focus:border-gold transition-colors" placeholder="How can we assist you?"></textarea>
                </div>

                <button type="submit" className="flex items-center justify-center gap-2 w-full md:w-auto px-10 py-4 bg-gold text-primary font-bold tracking-widest uppercase text-sm hover:bg-white transition-all duration-300">
                  <Send size={16} /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
