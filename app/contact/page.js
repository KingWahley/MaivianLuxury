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
                    <p className="text-gray-muted font-light leading-relaxed"> No 1 dr Goddy Idam street Aisha estate block A flat 6 Dawaki behind Dawaki modern market</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1"><Phone className="text-gold" size={24} /></div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone Number</h3>
                    <p className="text-gray-muted font-light">+234 8163 334 514</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1"><Mail className="text-gold" size={24} /></div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email Address</h3>
                    <p className="text-gray-muted font-light">maivanluxuryapartment@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <svg className="text-gold w-6 h-6" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M448 209.9a210.1 210.1 0 0 1-122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">TikTok</h3>
                    <a href="https://www.tiktok.com/@maivan.luxury.apa?_r=1&_t=ZS-95Ww3AtN1r2" target="_blank" rel="noopener noreferrer" className="text-gray-muted font-light hover:text-gold transition-colors">@maivan.luxury.apa</a>
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
