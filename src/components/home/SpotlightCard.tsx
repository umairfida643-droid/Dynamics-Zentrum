import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Users, Building, Clock } from 'lucide-react';

export const SpotlightCard: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-navy-card text-white py-16 md:py-24">
      {/* Background ambient orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 size-96 rounded-full bg-brand/30 blur-3xl animate-float" />
      <div 
        className="pointer-events-none absolute -bottom-40 -right-40 size-96 rounded-full bg-purple/25 blur-3xl animate-float"
        style={{ animationDelay: '2s' }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left: Transformation Story (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/20">
              <ShieldCheck className="size-3.5 text-sky" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky">
                Spotlight Enterprise Transformation
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
              Global asset manager scales operations by 40% with D365 Finance.
            </h2>

            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              Consolidated 14 international entities onto a single Dynamics 365 Finance instance in six months, with full FCA compliance and Copilot-assisted close.
            </p>

            <div className="space-y-3 pt-2">
              {[
                'Real-time consolidated reporting across 14 entities',
                'Copilot-assisted month-end close in 3 days',
                'SOX & FCA compliance baked in from day one'
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="size-5 text-brand shrink-0" />
                  <span className="text-sm font-medium text-white/90">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to="/book-consultation"
                className="btn-shine inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm md:text-base font-semibold text-white shadow-xl shadow-brand/30 ring-1 ring-brand hover:scale-[1.02] transition-all"
              >
                <span>Request Enterprise Architecture Review</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          {/* Right: Live Metrics & Snapshot Cards (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {/* Metric 1 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-md">
              <div className="grid size-9 place-items-center rounded-lg bg-sky/20 text-sky">
                <Users className="size-5" />
              </div>
              <div className="mt-4 text-3xl font-semibold tracking-tight text-white tabular-nums">
                12k+
              </div>
              <div className="mt-1 text-xs text-white/60 uppercase tracking-wider font-medium">
                Users Migrated
              </div>
            </div>

            {/* Metric 2 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-md">
              <div className="grid size-9 place-items-center rounded-lg bg-purple/20 text-purple">
                <Building className="size-5" />
              </div>
              <div className="mt-4 text-3xl font-semibold tracking-tight text-white tabular-nums">
                14
              </div>
              <div className="mt-1 text-xs text-white/60 uppercase tracking-wider font-medium">
                Entities Unified
              </div>
            </div>

            {/* Metric 3 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-md">
              <div className="grid size-9 place-items-center rounded-lg bg-brand/20 text-brand">
                <Clock className="size-5" />
              </div>
              <div className="mt-4 text-3xl font-semibold tracking-tight text-white tabular-nums">
                6mo
              </div>
              <div className="mt-1 text-xs text-white/60 uppercase tracking-wider font-medium">
                Time to Value
              </div>
            </div>

            {/* Metric 4: Efficiency */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-md">
              <div className="grid size-9 place-items-center rounded-lg bg-emerald-500/20 text-emerald-400">
                <ShieldCheck className="size-5" />
              </div>
              <div className="mt-4 text-3xl font-semibold tracking-tight text-emerald-400 tabular-nums">
                40%
              </div>
              <div className="mt-1 text-xs text-white/60 uppercase tracking-wider font-medium">
                Opex Efficiency
              </div>
            </div>

            {/* Live Snapshot Widget */}
            <div className="col-span-2 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-md">
              <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-sky">
                Live Audit Snapshot
              </div>
              <div className="mt-3 space-y-2.5">
                {[
                  { k: 'FCA regulatory compliance', v: '100%' },
                  { k: 'Copilot workforce adoption', v: '82%' },
                  { k: 'Annual recurrent cost saving', v: '£1.2M' },
                ].map((item) => (
                  <div key={item.k} className="flex items-center justify-between text-xs">
                    <span className="text-white/70">{item.k}</span>
                    <span className="font-semibold text-white tabular-nums">{item.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
