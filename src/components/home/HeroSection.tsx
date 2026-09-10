import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRightCircle,
  Sparkles, 
  BarChart2, 
  Zap,
  MessageSquare
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#24133d] via-[#1a0e30] to-[#120824] text-white pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-white/5">
      {/* 1. Background Ambient Radial Glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] rounded-full bg-[#ec4899]/15 blur-[160px]" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-[#7c3aed]/20 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(168,85,247,0.12),transparent_70%)]" />

      {/* 2. Signature Concentric Dashed Orbital Rings matching screenshot */}
      <div className="pointer-events-none absolute top-[360px] left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 size-[620px] rounded-full border border-dashed border-white/15" />
      <div className="pointer-events-none absolute top-[360px] left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 size-[920px] rounded-full border border-dashed border-white/10" />
      <div className="pointer-events-none absolute top-[360px] left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 size-[1220px] rounded-full border border-dashed border-white/[0.06]" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* CENTER STAGE: Headline, Narrative & CTA */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Top Pre-title: UK's Trusted Microsoft Dynamics 365 Partner */}
          <div className="text-sm sm:text-base font-medium text-white/90 tracking-wide mb-3 sm:mb-4">
            UK's Trusted Microsoft Dynamics 365 Partner
          </div>

          {/* Main Huge H1 Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold tracking-tight text-white leading-[1.12] text-balance">
            When results count,<br className="hidden sm:inline" />{' '}
            <span>Dynamics Zentrum delivers!</span>
          </h1>

          {/* Centered Descriptive Narrative */}
          <p className="mx-auto mt-6 max-w-3xl text-sm sm:text-base md:text-lg text-white/80 leading-relaxed font-normal">
            As a certified Microsoft Dynamics 365 partner in the UK, we empower businesses with future-ready technologies that deliver impact. Dominate and thrive with AI-powered Microsoft solutions. With Dynamics Zentrum, your success is powered by years of proven expertise—no matter the industry!
          </p>

          {/* Primary CTA Button: Coral/Rose Gradient Pill */}
          <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center">
            <Link
              to="/book-consultation"
              className="btn-shine group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#ff5252] via-[#ff4081] to-[#e040fb] px-8 py-4 text-base sm:text-lg font-bold text-white shadow-2xl shadow-rose-600/35 ring-1 ring-white/25 hover:scale-[1.03] transition-all"
            >
              <Sparkles className="size-5 text-white animate-pulse" />
              <span>Book a Free Consultation</span>
              <ArrowRightCircle className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Trust Assurance Subtext */}
            <div className="mt-3.5 text-xs sm:text-sm text-white/65 font-medium tracking-wide">
              Trusted by 500+ businesses · No obligation · Fast response
            </div>
          </div>
        </div>

        {/* INTERACTIVE FLOATING WINGS & CENTER AI SILHOUETTE */}
        <div className="relative mt-8 lg:mt-2 min-h-[380px] sm:min-h-[420px] flex items-center justify-center">
          {/* Center Bottom: Holographic Digital Neural AI Head Watermark */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none w-[320px] sm:w-[400px] h-[340px] opacity-75 select-none z-0">
            <img 
              src="/assets/neural-head.svg" 
              alt="Neural AI Architecture" 
              className="w-full h-full object-contain animate-pulse-glow"
            />
          </div>

          {/* LEFT WING: Floating Pill Elements matching screenshot */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-8 relative z-10">
            {/* Left Group */}
            <div className="flex flex-col gap-6 sm:gap-8 items-start w-full lg:w-auto">
              {/* Card 1: Industry Leaders */}
              <div className="relative group self-start lg:translate-x-2 xl:translate-x-6 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-48 sm:w-56 h-32 sm:h-36 rounded-[28px] overflow-hidden border-2 border-purple-400/40 bg-[#1e1035]/80 shadow-2xl backdrop-blur-sm">
                  <img 
                    src="/assets/hero-leaders.jpg" 
                    alt="Industry Leaders" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                </div>
                {/* Purple Badge: Industry Leaders */}
                <div className="absolute -bottom-3 left-4 rounded-full bg-[#7c3aed] px-3.5 py-1 text-[11px] text-white shadow-lg ring-1 ring-white/20 flex items-center gap-1">
                  <span className="font-normal text-white/90">Industry</span>
                  <strong className="font-bold text-white">Leaders</strong>
                </div>
                {/* Floating Square Purple Pill with Bar Chart */}
                <div className="absolute -right-3 top-8 size-7 rounded-lg bg-[#9333ea] grid place-items-center text-white shadow-lg ring-1 ring-white/20">
                  <BarChart2 className="size-4" />
                </div>
              </div>

              {/* Card 2: Empowering Growth */}
              <div className="relative group self-start sm:translate-x-4 lg:translate-x-8 xl:translate-x-16 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-56 sm:w-64 h-24 sm:h-28 rounded-full overflow-hidden border-2 border-purple-400/40 bg-[#1e1035]/80 shadow-2xl backdrop-blur-sm">
                  <img 
                    src="/assets/hero-robothand.jpg" 
                    alt="Empowering Growth" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                </div>
                {/* Purple Badge: Empowering Growth */}
                <div className="absolute -bottom-3 right-4 rounded-full bg-[#7c3aed] px-3.5 py-1 text-[11px] text-white shadow-lg ring-1 ring-white/20 flex items-center gap-1">
                  <span className="font-normal text-white/90">Empowering</span>
                  <strong className="font-bold text-white">Growth</strong>
                </div>
                {/* Sparkle Star */}
                <Sparkles className="absolute -top-3 right-8 size-4 text-purple-300 animate-pulse" />
              </div>
            </div>

            {/* RIGHT WING: Floating Pill Elements matching screenshot */}
            <div className="flex flex-col gap-6 sm:gap-8 items-end w-full lg:w-auto mt-4 lg:mt-0">
              {/* Card 3: Trusted Partner */}
              <div className="relative group self-end lg:-translate-x-2 xl:-translate-x-6 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-40 sm:w-48 h-52 sm:h-60 rounded-[32px] overflow-hidden border-2 border-purple-400/40 bg-[#1e1035]/80 shadow-2xl backdrop-blur-sm">
                  <img 
                    src="/assets/hero-consultant.jpg" 
                    alt="Trusted Partner" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                </div>
                {/* Purple Badge: Trusted Partner */}
                <div className="absolute -bottom-3 right-2 rounded-full bg-[#7c3aed] px-3.5 py-1 text-[11px] text-white shadow-lg ring-1 ring-white/20 flex items-center gap-1">
                  <span className="font-normal text-white/90">Trusted</span>
                  <strong className="font-bold text-white">Partner</strong>
                </div>
                {/* Floating Square Purple Pill with Lightning Zap */}
                <div className="absolute -left-3 top-14 size-7 rounded-lg bg-[#9333ea] grid place-items-center text-white shadow-lg ring-1 ring-white/20">
                  <Zap className="size-4 fill-current" />
                </div>
              </div>

              {/* Card 4: Proven Expertise */}
              <div className="relative group self-end sm:-translate-x-4 lg:-translate-x-8 xl:-translate-x-16 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-56 sm:w-64 h-24 sm:h-28 rounded-full overflow-hidden border-2 border-purple-400/40 bg-[#1e1035]/80 shadow-2xl backdrop-blur-sm">
                  <img 
                    src="/assets/hero-ai-bot.jpg" 
                    alt="Proven Expertise" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                </div>
                {/* Purple Badge: Proven Expertise */}
                <div className="absolute -bottom-3 left-6 rounded-full bg-[#7c3aed] px-3.5 py-1 text-[11px] text-white shadow-lg ring-1 ring-white/20 flex items-center gap-1">
                  <span className="font-normal text-white/90">Proven</span>
                  <strong className="font-bold text-white">Expertise</strong>
                </div>
                {/* Sparkle Star */}
                <Sparkles className="absolute -top-3 right-10 size-4 text-purple-300 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* 5. BOTTOM CLIENT / ACCREDITATION LOGO STRIP matching screenshot */}
        <div className="mt-14 pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-8 sm:gap-12 opacity-80 hover:opacity-100 transition-opacity">
            {/* Parweld */}
            <div className="flex items-center gap-1 text-white tracking-tight font-black text-xl sm:text-2xl">
              <span>parweld</span>
              <span className="text-[10px] ml-0.5 text-brand self-start">▲</span>
            </div>

            {/* NCC Education */}
            <div className="flex items-center gap-2">
              <div className="rounded-full border border-white/60 px-2 py-0.5 text-center">
                <span className="font-black text-xs sm:text-sm tracking-wider text-white">NCC</span>
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-white/80">education</span>
            </div>

            {/* COMXO */}
            <div className="border-y border-white/40 py-0.5 px-2 text-center">
              <span className="font-black tracking-[0.25em] text-base sm:text-lg text-white">COMXO</span>
            </div>

            {/* Arteak */}
            <div className="flex items-center gap-1.5 font-bold text-base sm:text-lg text-white">
              <span className="grid size-5 place-items-center rounded bg-white/15 text-[10px] font-black">A</span>
              <span>Arteak<sup className="text-[8px] ml-0.5">™</sup></span>
            </div>

            {/* MTA */}
            <div className="rounded-full border border-white/50 px-4 py-1 flex items-center">
              <span className="font-black tracking-widest text-sm sm:text-base text-white">MTA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Bubble Widget matching screenshot (bottom-right) */}
      <Link
        to="/contact"
        aria-label="Chat with Dynamics 365 Specialist"
        className="fixed bottom-6 right-6 z-50 size-13 sm:size-14 rounded-full bg-gradient-to-tr from-[#ff3366] to-[#ff5252] shadow-2xl shadow-rose-600/50 flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all group"
      >
        <MessageSquare className="size-6 group-hover:rotate-6 transition-transform" />
      </Link>
    </section>
  );
};
