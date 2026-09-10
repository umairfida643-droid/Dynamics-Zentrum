import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, Zap, Boxes, Workflow } from 'lucide-react';
import { TRUST_BADGES } from '../../data/siteData';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden px-6 pt-12 pb-14 md:pt-20 md:pb-20">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 size-[32rem] rounded-full bg-brand/10 blur-[120px] animate-float" />
      <div 
        className="pointer-events-none absolute top-1/3 right-[-8rem] size-[28rem] rounded-full bg-purple/10 blur-[120px] animate-float"
        style={{ animationDelay: '2s' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.08),transparent_60%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          {/* Left Column: Copy & CTAs */}
          <div className="flex flex-col gap-6 animate-fade-up">
            {/* Pulsing Microsoft Partner Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-brand/5 px-3 py-1 ring-1 ring-brand/15 dark:bg-brand/10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
                Microsoft Solutions Partner · Business Applications
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="max-w-[20ch] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight text-navy dark:text-foreground text-balance">
              UK's Trusted{' '}
              <span className="bg-gradient-to-r from-brand via-brand to-purple bg-clip-text text-transparent">
                Microsoft Dynamics 365
              </span>{' '}
              Partner
            </h1>

            {/* Lead Description */}
            <p className="max-w-xl text-base md:text-lg text-muted-foreground text-pretty leading-relaxed">
              We help organisations digitally transform with Dynamics 365, Business Central, Finance, Supply Chain, CRM and Copilot — delivered by 150+ certified consultants.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/book-consultation"
                className="btn-shine group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm md:text-base font-semibold text-brand-foreground shadow-xl shadow-brand/25 ring-1 ring-brand transition-all hover:shadow-2xl hover:scale-[1.02]"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/services"
                className="btn-shine inline-flex items-center gap-2 rounded-full bg-card/70 px-6 py-3.5 text-sm md:text-base font-semibold text-navy dark:text-foreground ring-1 ring-black/10 backdrop-blur hover:bg-card dark:ring-white/10"
              >
                <Sparkles className="size-4 text-brand" />
                <span>Explore Our Services</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-2 flex flex-wrap items-center gap-2">
              {TRUST_BADGES.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-full border border-black/5 bg-card/70 px-3 py-1.5 text-[11px] font-semibold text-navy backdrop-blur dark:border-white/10 dark:text-foreground shadow-sm"
                >
                  <ShieldCheck className="size-3.5 text-brand" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Orbiting Visual */}
          <div className="relative mx-auto flex aspect-square w-full max-w-[22rem] items-center justify-center sm:max-w-sm md:max-w-[24rem] lg:max-w-[26rem]">
            {/* Glowing Orb Background */}
            <div className="pointer-events-none absolute inset-8 rounded-full bg-gradient-to-br from-brand/25 via-purple/15 to-sky/10 blur-3xl animate-float" />
            
            {/* Concentric Rotating Rings */}
            <div className="pointer-events-none absolute inset-6 rounded-full border border-brand/20 animate-[spin_40s_linear_infinite]" />
            <div className="pointer-events-none absolute inset-16 rounded-full border border-purple/20 animate-[spin_30s_linear_infinite_reverse]" />
            <div className="pointer-events-none absolute inset-24 rounded-full border border-sky/20 animate-[spin_20s_linear_infinite]" />

            {/* Central 3D Image */}
            <img
              src="/assets/d365-3d.png"
              alt="Microsoft Dynamics 365"
              width={1024}
              height={1024}
              className="relative z-10 w-2/3 max-w-[280px] drop-shadow-2xl animate-float object-contain"
            />

            {/* Floating Glass Badges */}
            {/* Badge 1: Copilot AI (Top-Right) */}
            <div className="absolute top-4 right-0 z-20 flex items-center gap-2 rounded-2xl bg-gradient-to-br from-brand/90 to-purple/90 px-3 py-2 text-white shadow-2xl ring-1 ring-white/25 backdrop-blur-md animate-float">
              <Sparkles className="size-4 text-sky" />
              <span className="text-xs font-semibold whitespace-nowrap">AI Copilot</span>
            </div>

            {/* Badge 2: Power Platform (Bottom-Right) */}
            <div 
              className="absolute bottom-6 right-2 z-20 flex items-center gap-2 rounded-2xl bg-gradient-to-br from-purple/90 to-sky/80 px-3 py-2 text-white shadow-2xl ring-1 ring-white/25 backdrop-blur-md animate-float"
              style={{ animationDelay: '1.5s' }}
            >
              <Zap className="size-4 text-amber-300" />
              <span className="text-xs font-semibold whitespace-nowrap">Power Platform</span>
            </div>

            {/* Badge 3: Azure Fabric (Bottom-Left) */}
            <div 
              className="absolute bottom-8 left-0 z-20 flex items-center gap-2 rounded-2xl bg-gradient-to-br from-navy-card to-brand/80 px-3 py-2 text-white shadow-2xl ring-1 ring-white/25 backdrop-blur-md animate-float"
              style={{ animationDelay: '2.5s' }}
            >
              <Boxes className="size-4 text-sky" />
              <span className="text-xs font-semibold whitespace-nowrap">Microsoft Fabric</span>
            </div>

            {/* Badge 4: Supply Chain (Top-Left) */}
            <div 
              className="absolute top-8 left-0 z-20 flex items-center gap-2 rounded-2xl bg-gradient-to-br from-emerald-600/90 to-brand/70 px-3 py-2 text-white shadow-2xl ring-1 ring-white/25 backdrop-blur-md animate-float"
              style={{ animationDelay: '3.5s' }}
            >
              <Workflow className="size-4 text-emerald-200" />
              <span className="text-xs font-semibold whitespace-nowrap">Supply Chain</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
