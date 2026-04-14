import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-3xl font-serif font-bold text-white tracking-wide mb-6 inline-block">
              MAIVIAN LUXURY<span className="text-gold">.</span>
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
              <li>123 Luxury Avenue, Metropolis</li>
              <li>+234 8163 334 514</li>
              <li>reservations@maivianluxury.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-muted/60 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} MAIVIAN LUXURY APARTMENTS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
