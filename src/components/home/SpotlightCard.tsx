import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, Users, Clock, Award } from 'lucide-react';

export const SpotlightCard: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-navy-card text-white py-20 md:py-28">
      {/* Background ambient orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 size-[32rem] rounded-full bg-brand/25 blur-3xl animate-float" />
      <div 
        className="pointer-events-none absolute -bottom-40 -right-40 size-[32rem] rounded-full bg-purple/20 blur-3xl animate-float"
        style={{ animationDelay: '2s' }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Heading and narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 ring-1 ring-white/20">
              <ShieldCheck className="size-3.5 text-sky" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky">
                Proven Enterprise Results
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
              Delivering Impact Where It Matters Because You Deserve More
            </h2>

            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              At Dynamics Zentrum, we’ve guided businesses to optimise operations and boost performance. As a results-driven Microsoft Dynamics 365 partner in the UK, we’ve helped clients achieve 4x revenue growth, 87% customer retention, and real transformation through strategic implementations.
            </p>

            <div className="space-y-3 pt-2">
              {[
                'Predictable fixed-milestone sprint architecture with zero unexpected cost overruns',
                'Comprehensive HMRC Making Tax Digital (MTD), FCA, and UK GDPR data compliance',
                'Zero-downtime cutover rehearsal protocols ensuring continuous operational continuity',
                'Dedicated UK Practice Directors assigned to your project from discovery through go-live'
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="size-5 text-brand shrink-0" />
                  <span className="text-sm font-medium text-white/90">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/book-consultation"
                className="btn-shine inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm md:text-base font-semibold text-white shadow-xl shadow-brand/30 ring-1 ring-brand hover:scale-[1.02] transition-all"
              >
                <span>Book Architecture Consultation</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3.5 text-sm md:text-base font-semibold text-white ring-1 ring-white/15 hover:bg-white/15 transition-all"
              >
                <span>About Our Methodology</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Live Value Metric Cards (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {/* Metric 1 */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-md">
              <div className="grid size-10 place-items-center rounded-xl bg-brand/20 text-brand">
                <TrendingUp className="size-5" />
              </div>
              <div className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white tabular-nums">
                4x
              </div>
              <div className="mt-1 text-xs text-white/60 uppercase tracking-wider font-semibold">
                Revenue Growth Velocity
              </div>
              <p className="mt-2 text-[11px] text-white/70 leading-relaxed">
                Scaled commercial capacity through unified ERP & CRM automation.
              </p>
            </div>

            {/* Metric 2 */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-md">
              <div className="grid size-10 place-items-center rounded-xl bg-purple/25 text-purple">
                <Users className="size-5" />
              </div>
              <div className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white tabular-nums">
                87%
              </div>
              <div className="mt-1 text-xs text-white/60 uppercase tracking-wider font-semibold">
                Customer Retention
              </div>
              <p className="mt-2 text-[11px] text-white/70 leading-relaxed">
                Long-term client adoption driven by proactive post-live care.
              </p>
            </div>

            {/* Metric 3 */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-md">
              <div className="grid size-10 place-items-center rounded-xl bg-emerald-500/20 text-emerald-400">
                <Clock className="size-5" />
              </div>
              <div className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white tabular-nums">
                99.8%
              </div>
              <div className="mt-1 text-xs text-white/60 uppercase tracking-wider font-semibold">
                On-Time Deployment
              </div>
              <p className="mt-2 text-[11px] text-white/70 leading-relaxed">
                Strict milestone governance eliminates delivery delays.
              </p>
            </div>

            {/* Metric 4 */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-md">
              <div className="grid size-10 place-items-center rounded-xl bg-sky/20 text-sky">
                <Award className="size-5" />
              </div>
              <div className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white tabular-nums">
                100%
              </div>
              <div className="mt-1 text-xs text-white/60 uppercase tracking-wider font-semibold">
                UK Sovereign Team
              </div>
              <p className="mt-2 text-[11px] text-white/70 leading-relaxed">
                Onshore consultants based in London, Manchester & Birmingham.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
