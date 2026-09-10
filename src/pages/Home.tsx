import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { StatCounters } from '../components/home/StatCounters';
import { ServicesGrid } from '../components/home/ServicesGrid';
import { SolutionsGrid } from '../components/home/SolutionsGrid';
import { BusinessSizeSection } from '../components/home/BusinessSizeSection';
import { IndustriesGrid } from '../components/home/IndustriesGrid';
import { DeliveryConsole } from '../components/home/DeliveryConsole';
import { SpotlightCard } from '../components/home/SpotlightCard';
import { RoiCalculator } from '../components/home/RoiCalculator';
import { FeaturedRecognitionSection } from '../components/home/FeaturedRecognitionSection';
import { CtaBanner } from '../components/home/CtaBanner';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Banner with Interactive App Navigator & UK Trust Credentials */}
      <HeroSection />

      {/* 2. Dynamics Zentrum: Your Microsoft Solutions Partner (Metrics & Stats) */}
      <StatCounters />

      {/* 3. Our Services: Simple, Clear, and Focused (Consulting, Implementation, Upgrade, Ongoing Support) */}
      <ServicesGrid />

      {/* 4. Microsoft Business Apps: New Age Solutions to Drive Exponential Growth */}
      <SolutionsGrid />

      {/* 5. Smart AI Solutions for Every Business (Startups, Small, Medium, Large Enterprises) */}
      <BusinessSizeSection />

      {/* 6. Your Industry? Our Expertise! (Retail, Education, Manufacturing, Distribution, etc.) */}
      <IndustriesGrid />

      {/* 7. Live UK Infrastructure Delivery Console & Telemetry */}
      <DeliveryConsole />

      {/* 8. Delivering Impact Where It Matters Because You Deserve More (4x Revenue, 87% Retention) */}
      <SpotlightCard />

      {/* 9. Interactive ROI & Enterprise TCO Scoping Calculator */}
      <RoiCalculator />

      {/* 10. Featured On & Industry Recognition */}
      <FeaturedRecognitionSection />

      {/* 11. Consultation Booking Banner & Where We Operate (London, Manchester, Birmingham) */}
      <CtaBanner />
    </div>
  );
};
