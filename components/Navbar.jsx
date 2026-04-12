"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold text-white tracking-wide">
          LUXURA<span className="text-gold">.</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm uppercase tracking-widest text-gray-muted hover:text-white transition-colors">Home</Link>
          <Link href="/apartments" className="text-sm uppercase tracking-widest text-gray-muted hover:text-white transition-colors">Apartments</Link>
          <Link href="/about" className="text-sm uppercase tracking-widest text-gray-muted hover:text-white transition-colors">About</Link>
          <Link href="/contact" className="text-sm uppercase tracking-widest text-gray-muted hover:text-white transition-colors">Contact</Link>
        </nav>
        
        <div className="hidden md:block">
          <Link href="/apartments" className="px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-primary transition-all duration-300 uppercase text-xs tracking-widest font-semibold">
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white hover:text-gold transition-colors" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-primary/95 backdrop-blur-md border-t border-secondary/50 p-6 flex flex-col space-y-6 text-center shadow-xl">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-lg uppercase tracking-widest text-gray-muted hover:text-white transition-colors">Home</Link>
          <Link href="/apartments" onClick={() => setIsOpen(false)} className="text-lg uppercase tracking-widest text-gray-muted hover:text-white transition-colors">Apartments</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg uppercase tracking-widest text-gray-muted hover:text-white transition-colors">About</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg uppercase tracking-widest text-gray-muted hover:text-white transition-colors">Contact</Link>
          <div className="pt-4 flex justify-center">
            <Link href="/apartments" onClick={() => setIsOpen(false)} className="inline-block px-8 py-4 bg-gold text-primary hover:bg-white transition-all duration-300 uppercase text-sm tracking-widest font-bold">
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
