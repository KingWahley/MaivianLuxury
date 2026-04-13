"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function GallerySlider({ images }) {
  const [startIndex, setStartIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const nextImages = () => {
    setStartIndex((prev) => (prev + 3 >= images.length ? 0 : prev + 3));
  };

  const prevImages = () => {
    setStartIndex((prev) => {
      if (prev - 3 < 0) {
        // If we are at 0, wrap around to the end, ensuring valid index
        const remainder = images.length % 3;
        return Math.max(0, images.length - (remainder === 0 ? 3 : remainder));
      }
      return prev - 3;
    });
  };

  const currentImages = images.slice(startIndex, startIndex + 3);
  
  // Pad with wrap-around images if we have less than 3
  if (currentImages.length < 3 && images.length > currentImages.length) {
    const needed = 3 - currentImages.length;
    currentImages.push(...images.slice(0, needed));
  }

  // Ensure there's always an array of 3 images (even if duplicated, to maintain layout)
  const displayImages = [
    currentImages[0] || images[0],
    currentImages[1] || images[0],
    currentImages[2] || images[0]
  ];

  return (
    <div className="relative mb-12 group">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[60vh] min-h-[400px]">
        <div className="lg:col-span-2 relative h-full w-full bg-secondary/30">
          {displayImages[0] && (
             <Image src={displayImages[0]} alt="Gallery Main" fill className="object-cover" />
          )}
        </div>
        <div className="hidden lg:grid grid-rows-2 gap-4 h-full">
          <div className="relative w-full h-full bg-secondary/30">
            {displayImages[1] && (
               <Image src={displayImages[1]} alt="Gallery 1" fill className="object-cover" />
            )}
          </div>
          <div className="relative w-full h-full bg-secondary/30">
            {displayImages[2] && (
               <Image src={displayImages[2]} alt="Gallery 2" fill className="object-cover" />
            )}
          </div>
        </div>
      </div>
      
      {images.length > 3 && (
        <>
          <button 
            onClick={prevImages}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 hover:bg-gold transition-colors z-10 opacity-0 group-hover:opacity-100 duration-300 md:block hidden border border-white/10"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextImages}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 hover:bg-gold transition-colors z-10 opacity-0 group-hover:opacity-100 duration-300 md:block hidden border border-white/10"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {images.length > 0 && (
        <div className="absolute bottom-6 right-6 bg-black/80 text-white px-4 py-2 text-sm z-10 font-bold tracking-widest border border-white/20">
          {Math.min(startIndex + 3, images.length)} / {images.length}
        </div>
      )}
    </div>
  );
}
