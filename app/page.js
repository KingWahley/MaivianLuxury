"use client";

import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import FeaturedApartments from "../components/home/FeaturedApartments";
import ReviewsSection from "../components/home/ReviewsSection";
import CtaSection from "../components/home/CtaSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <FeaturedApartments />
      <ReviewsSection />
      <CtaSection />
    </div>
  );
}
