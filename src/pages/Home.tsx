import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { StatCounters } from '../components/home/StatCounters';
import { ServicesGrid } from '../components/home/ServicesGrid';
import { IndustriesGrid } from '../components/home/IndustriesGrid';
import { SolutionsGrid } from '../components/home/SolutionsGrid';
import { BusinessSizeSection } from '../components/home/BusinessSizeSection';
import { SpotlightCard } from '../components/home/SpotlightCard';
import { DeliveryConsole } from '../components/home/DeliveryConsole';
import { RoiCalculator } from '../components/home/RoiCalculator';
import { FeaturedRecognitionSection } from '../components/home/FeaturedRecognitionSection';
import { CtaBanner } from '../components/home/CtaBanner';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* SECTION 0: Centered Hero Banner with Floating Showcase & Partner Logos */}
      <HeroSection />

      {/* SECTION 1: Dynamics Zentrum: Your Microsoft Solutions Partner (Metrics & Overview) */}
      <StatCounters />

      {/* SECTION 2: Our Services: Simple, Clear, and Focused (4 Core Cards) */}
      <ServicesGrid />

      {/* SECTION 3: Your Industry? Our Expertise! (Tabbed Sector Experience) */}
      <IndustriesGrid />

      {/* SECTION 5: Microsoft Business Apps: New Age Solutions (Tabbed Apps Experience) */}
      <SolutionsGrid />

      {/* SECTION 6: Smart AI Solutions for Every Business (Startups, Small, Medium, Large) */}
      <BusinessSizeSection />

      {/* SECTION 7: Delivering Impact Where It Matters Because You Deserve More */}
      <SpotlightCard />

      {/* Live Enterprise Infrastructure Diagnostics & Telemetry Console */}
      <DeliveryConsole />

      {/* Interactive Enterprise ROI & TCO Calculator */}
      <RoiCalculator />

      {/* SECTION 8: Featured On & Industry Recognition */}
      <FeaturedRecognitionSection />

      {/* SECTION 9 & 10: Consultation Banner & Where We Operate (London, Manchester, Birmingham) */}
      <CtaBanner />
    </div>
  );
};
