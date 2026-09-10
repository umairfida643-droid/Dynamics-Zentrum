import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { StatCounters } from '../components/home/StatCounters';
import { DeliveryConsole } from '../components/home/DeliveryConsole';
import { SolutionsGrid } from '../components/home/SolutionsGrid';
import { IndustriesGrid } from '../components/home/IndustriesGrid';
import { SpotlightCard } from '../components/home/SpotlightCard';
import { ServicesGrid } from '../components/home/ServicesGrid';
import { RoiCalculator } from '../components/home/RoiCalculator';
import { CtaBanner } from '../components/home/CtaBanner';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatCounters />
      <DeliveryConsole />
      <SolutionsGrid />
      <IndustriesGrid />
      <SpotlightCard />
      <ServicesGrid />
      <RoiCalculator />
      <CtaBanner />
    </div>
  );
};
