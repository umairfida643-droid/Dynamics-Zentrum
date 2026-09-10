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

      {/* 2. Signature Animated Concentric Dashed Orbital Rings with Orbiting Nodes matching reference */}
      <div className="pointer-events-none absolute top-[380px] sm:top-[360px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] flex items-center justify-center select-none opacity-35 transition-opacity duration-700">
        {/* Ring 1 (Inner) - Clockwise Rotation */}
        <div className="absolute size-[460px] sm:size-[540px] rounded-full border border-dashed border-white/30 dark:border-purple-300/35 orbit-spin-cw">
          {/* Orbiting Satellite Node 1 */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 size-2.5 rounded-full bg-brand shadow-[0_0_8px_#cc00e6]" />
          {/* Orbiting Satellite Node 2 */}
          <div className="absolute -bottom-1 left-1/4 size-1.5 rounded-full bg-white shadow-[0_0_6px_#ffffff]" />
        </div>

        {/* Ring 2 (Medium) - Counter-Clockwise Rotation */}
        <div className="absolute size-[680px] sm:size-[780px] rounded-full border border-dashed border-white/25 dark:border-purple-300/30 orbit-spin-ccw">
          {/* Orbiting Satellite Node 1 */}
          <div className="absolute top-1/4 -left-1.5 size-2 rounded-full bg-sky shadow-[0_0_8px_#f5a8ff]" />
          {/* Orbiting Satellite Node 2 */}
          <div className="absolute bottom-1/3 -right-1 size-1.5 rounded-full bg-pink-400 shadow-[0_0_6px_#f472b6]" />
        </div>

        {/* Ring 3 (Large) - Clockwise Rotation */}
        <div className="absolute size-[940px] sm:size-[1060px] rounded-full border border-dashed border-white/20 dark:border-purple-300/25 orbit-spin-outer">
          {/* Orbiting Satellite Node 1 */}
          <div className="absolute -top-1.5 right-1/3 size-2 rounded-full bg-purple shadow-[0_0_8px_#a855f7]" />
          {/* Orbiting Satellite Node 2 */}
          <div className="absolute bottom-1/4 left-1/5 size-1.5 rounded-full bg-white shadow-[0_0_6px_#ffffff]" />
        </div>

        {/* Ring 4 (Extra Large) - Counter-Clockwise Rotation */}
        <div className="absolute size-[1220px] sm:size-[1360px] rounded-full border border-dashed border-white/15 dark:border-purple-300/20 orbit-spin-ccw">
          {/* Orbiting Satellite Node 1 */}
          <div className="absolute top-1/3 -right-1.5 size-2 rounded-full bg-brand shadow-[0_0_8px_#cc00e6]" />
        </div>

        {/* Ring 5 (Ambient Outermost) - Slow Rotation */}
        <div className="absolute size-[1520px] sm:size-[1680px] rounded-full border border-dotted border-white/10 dark:border-purple-300/15 orbit-spin-outer">
          <div className="absolute -bottom-1 right-1/4 size-2 rounded-full bg-purple-300 shadow-[0_0_6px_#c084fc]" />
        </div>
      </div>

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
              className="btn-shine group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#ff5252] via-[#ff4081] to-[#e040fb] px-8 py-4 text-base sm:text-lg font-bold text-white shadow-[0_20px_40px_-10px_rgba(255,64,129,0.5),_0_0_25px_rgba(224,64,251,0.35)] ring-1 ring-white/30 hover:scale-[1.03] hover:-translate-y-1 active:translate-y-0.5 active:scale-[0.99] transition-all duration-300"
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

        {/* INTERACTIVE 3D FLOATING WINGS & CENTER AI HOLOGRAPHIC ARCHITECTURE */}
        <div className="relative mt-8 lg:mt-2 min-h-[380px] sm:min-h-[440px] flex items-center justify-center perspective-1000">
          {/* Center 3D Holographic AI Circuit Head with ambient aura */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none w-[340px] sm:w-[420px] md:w-[480px] h-auto select-none z-0">
            {/* 3D ambient aura glow */}
            <div className="absolute inset-0 -top-6 rounded-full bg-gradient-to-b from-brand/20 via-purple-600/15 to-transparent blur-2xl animate-pulse-glow" />
            <img 
              src="/assets/circuit-head.png" 
              alt="AI Circuit Architecture" 
              className="w-full h-auto object-contain opacity-60 drop-shadow-[0_15px_35px_rgba(204,0,230,0.3)] transition-all duration-700 hover:opacity-80"
            />
          </div>

          {/* 3D FLOATING WINGS */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-8 relative z-10 preserve-3d">
            {/* LEFT WING: Floating 3D Cards */}
            <div className="flex flex-col gap-6 sm:gap-10 items-start w-full lg:w-auto">
              {/* Card 1: Industry Leaders (Executive Boardroom) */}
              <div className="relative group self-start lg:translate-x-2 xl:translate-x-6 animate-float-3d-1 preserve-3d">
                {/* 3D Backlight Glow */}
                <div className="absolute -inset-1 rounded-[30px] bg-gradient-to-r from-purple-600/30 to-brand/30 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                
                <div className="w-52 sm:w-60 h-34 sm:h-40 rounded-[28px] overflow-hidden border-2 border-purple-300/40 bg-[#190b2b]/90 shadow-[0_20px_45px_rgba(0,0,0,0.65)] ring-1 ring-white/20 backdrop-blur-md transition-all duration-500 group-hover:scale-[1.03] group-hover:border-purple-300/70 group-hover:shadow-[0_25px_55px_rgba(124,58,237,0.4)]">
                  <img 
                    src="/assets/hero-leaders.jpg" 
                    alt="Industry Leaders" 
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-95 brightness-105"
                  />
                  {/* 3D Specular Sheen Gradient */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* 3D Floating Badge: Industry Leaders */}
                <div className="absolute -bottom-3.5 left-4 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#9333ea] px-4 py-1.5 text-[11px] text-white shadow-[0_8px_20px_rgba(124,58,237,0.6)] ring-1 ring-white/30 flex items-center gap-1.5 transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-0.5">
                  <span className="font-normal text-white/90">Industry</span>
                  <strong className="font-bold text-white tracking-wide">Leaders</strong>
                </div>

                {/* 3D Micro Emblem: Bar Chart */}
                <div className="absolute -right-3 top-8 size-8 rounded-xl bg-gradient-to-br from-[#a855f7] to-[#7c3aed] grid place-items-center text-white shadow-[0_8px_20px_rgba(147,51,234,0.5)] ring-1 ring-white/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <BarChart2 className="size-4" />
                </div>
              </div>

              {/* Card 2: Empowering Growth (3D Cloud Analytics Visualization) */}
              <div className="relative group self-start sm:translate-x-4 lg:translate-x-8 xl:translate-x-16 animate-float-3d-2 preserve-3d">
                {/* 3D Backlight Glow */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-brand/30 to-purple-600/30 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                <div className="w-60 sm:w-72 h-26 sm:h-30 rounded-full overflow-hidden border-2 border-purple-300/40 bg-[#190b2b]/90 shadow-[0_20px_45px_rgba(0,0,0,0.65)] ring-1 ring-white/20 backdrop-blur-md transition-all duration-500 group-hover:scale-[1.03] group-hover:border-purple-300/70 group-hover:shadow-[0_25px_55px_rgba(204,0,230,0.4)]">
                  <img 
                    src="/assets/hero-robothand.jpg" 
                    alt="Empowering Growth" 
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-95 brightness-105"
                  />
                  {/* 3D Specular Sheen */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* 3D Floating Badge: Empowering Growth */}
                <div className="absolute -bottom-3.5 right-6 rounded-full bg-gradient-to-r from-[#9333ea] to-[#c026d3] px-4 py-1.5 text-[11px] text-white shadow-[0_8px_20px_rgba(192,38,211,0.6)] ring-1 ring-white/30 flex items-center gap-1.5 transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-0.5">
                  <span className="font-normal text-white/90">Empowering</span>
                  <strong className="font-bold text-white tracking-wide">Growth</strong>
                </div>

                {/* 3D Sparkle Star */}
                <Sparkles className="absolute -top-3 right-10 size-4 text-purple-300 animate-pulse" />
              </div>
            </div>

            {/* RIGHT WING: Floating 3D Cards */}
            <div className="flex flex-col gap-6 sm:gap-10 items-end w-full lg:w-auto mt-4 lg:mt-0">
              {/* Card 3: Trusted Partner (Distinguished Executive Consultant) */}
              <div className="relative group self-end lg:-translate-x-2 xl:-translate-x-6 animate-float-3d-2 preserve-3d">
                {/* 3D Backlight Glow */}
                <div className="absolute -inset-1 rounded-[34px] bg-gradient-to-r from-brand/30 to-purple-600/30 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                <div className="w-44 sm:w-52 h-56 sm:h-64 rounded-[32px] overflow-hidden border-2 border-purple-300/40 bg-[#190b2b]/90 shadow-[0_20px_45px_rgba(0,0,0,0.65)] ring-1 ring-white/20 backdrop-blur-md transition-all duration-500 group-hover:scale-[1.03] group-hover:border-purple-300/70 group-hover:shadow-[0_25px_55px_rgba(124,58,237,0.4)]">
                  <img 
                    src="/assets/hero-consultant.jpg" 
                    alt="Trusted Partner" 
                    className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700 opacity-95 brightness-105"
                  />
                  {/* 3D Specular Sheen */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* 3D Floating Badge: Trusted Partner */}
                <div className="absolute -bottom-3.5 right-3 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#9333ea] px-4 py-1.5 text-[11px] text-white shadow-[0_8px_20px_rgba(124,58,237,0.6)] ring-1 ring-white/30 flex items-center gap-1.5 transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-0.5">
                  <span className="font-normal text-white/90">Trusted</span>
                  <strong className="font-bold text-white tracking-wide">Partner</strong>
                </div>

                {/* 3D Micro Emblem: Lightning Zap */}
                <div className="absolute -left-3 top-16 size-8 rounded-xl bg-gradient-to-br from-[#a855f7] to-[#7c3aed] grid place-items-center text-white shadow-[0_8px_20px_rgba(147,51,234,0.5)] ring-1 ring-white/30 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <Zap className="size-4 fill-current" />
                </div>
              </div>

              {/* Card 4: Proven Expertise (3D AI Copilot Neural Core) */}
              <div className="relative group self-end sm:-translate-x-4 lg:-translate-x-8 xl:-translate-x-16 animate-float-3d-1 preserve-3d">
                {/* 3D Backlight Glow */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600/30 to-brand/30 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                <div className="w-60 sm:w-72 h-26 sm:h-30 rounded-full overflow-hidden border-2 border-purple-300/40 bg-[#190b2b]/90 shadow-[0_20px_45px_rgba(0,0,0,0.65)] ring-1 ring-white/20 backdrop-blur-md transition-all duration-500 group-hover:scale-[1.03] group-hover:border-purple-300/70 group-hover:shadow-[0_25px_55px_rgba(204,0,230,0.4)]">
                  <img 
                    src="/assets/hero-ai-bot.jpg" 
                    alt="Proven Expertise" 
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-95 brightness-105"
                  />
                  {/* 3D Specular Sheen */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* 3D Floating Badge: Proven Expertise */}
                <div className="absolute -bottom-3.5 left-6 rounded-full bg-gradient-to-r from-[#9333ea] to-[#c026d3] px-4 py-1.5 text-[11px] text-white shadow-[0_8px_20px_rgba(192,38,211,0.6)] ring-1 ring-white/30 flex items-center gap-1.5 transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-0.5">
                  <span className="font-normal text-white/90">Proven</span>
                  <strong className="font-bold text-white tracking-wide">Expertise</strong>
                </div>

                {/* 3D Sparkle Star */}
                <Sparkles className="absolute -top-3 right-12 size-4 text-purple-300 animate-pulse" />
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
