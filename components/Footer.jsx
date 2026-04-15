import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';


export default function Footer() {
  return (
    <footer className="bg-secondary pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-3xl font-serif font-bold text-white tracking-wide mb-6 inline-block">
              MAIVAN LUXURY<span className="text-gold">.</span>
            </Link>
            <p className="text-gray-muted max-w-sm font-light leading-relaxed">
              Experience luxury living redefined. Premium shortlet apartments designed for the ultimate comfort and class.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-serif text-lg mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/apartments" className="text-gray-muted hover:text-gold transition-colors text-sm tracking-wide">Our Apartments</Link></li>
              <li><Link href="/about" className="text-gray-muted hover:text-gold transition-colors text-sm tracking-wide">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-muted hover:text-gold transition-colors text-sm tracking-wide">Contact Us</Link></li>
              <li><Link href="#" className="text-gray-muted hover:text-gold transition-colors text-sm tracking-wide">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6 tracking-wide">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-muted tracking-wide font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>No 1 dr Goddy Idam street Aisha estate block A flat 6 Dawaki behind Dawaki modern market</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>+234 8163 334 514</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>maivanluxuryapartment@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gold shrink-0" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M448 209.9a210.1 210.1 0 0 1-122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
                </svg>
                <Link href="https://www.tiktok.com/@maivan.luxury.apa?_r=1&_t=ZS-95Ww3AtN1r2" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  @maivan.luxury.apa
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-muted/60 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} MAIVAN LUXURY APARTMENTS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
