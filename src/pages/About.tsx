import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, ShieldCheck, Target } from 'lucide-react';
import { COMPANY_METRICS } from '../data/siteData';

export const About: React.FC = () => {
  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
          About Dynamics Zentrum
        </span>
        <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-navy dark:text-foreground">
          Delivering Enterprise Excellence Since 2010
        </h1>
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          The UK's premier independent Microsoft Dynamics 365 consulting partner, helping complex organisations modernize their core operational systems with zero business disruption.
        </p>
      </div>

      {/* Metrics Strip */}
      <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4 rounded-3xl border border-black/5 bg-card p-8 shadow-sm dark:border-white/10 dark:bg-card">
        {COMPANY_METRICS.map((m) => (
          <div key={m.label} className="text-center">
            <div className="text-3xl md:text-5xl font-semibold text-brand tracking-tight">
              {m.target}{m.suffix}
            </div>
            <div className="mt-1 text-xs text-muted-foreground uppercase tracking-wider font-medium">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {/* Pillars */}
      <div className="mt-20 grid gap-8 md:grid-cols-3">
        <div className="card-3d rounded-3xl border border-black/5 bg-card p-8 shadow-sm dark:border-white/10 dark:bg-card">
          <div className="grid size-12 place-items-center rounded-2xl bg-brand/10 text-brand mb-6">
            <Award className="size-6" />
          </div>
          <h3 className="text-xl font-semibold text-navy dark:text-foreground">
            Microsoft Solutions Partner
          </h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Recognized across Business Applications, Modern Work, and Data & AI with over 150+ certified technical professionals.
          </p>
        </div>

        <div className="card-3d rounded-3xl border border-black/5 bg-card p-8 shadow-sm dark:border-white/10 dark:bg-card">
          <div className="grid size-12 place-items-center rounded-2xl bg-purple/10 text-purple mb-6">
            <Target className="size-6" />
          </div>
          <h3 className="text-xl font-semibold text-navy dark:text-foreground">
            Pragmatic Delivery Model
          </h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Fixed-fee milestone governance and proven sprint playbooks that eliminate scope creep and ensure predictable time-to-value.
          </p>
        </div>

        <div className="card-3d rounded-3xl border border-black/5 bg-card p-8 shadow-sm dark:border-white/10 dark:bg-card">
          <div className="grid size-12 place-items-center rounded-2xl bg-emerald-500/10 text-emerald-500 mb-6">
            <ShieldCheck className="size-6" />
          </div>
          <h3 className="text-xl font-semibold text-navy dark:text-foreground">
            ISO 27001 Certified
          </h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Rigorous security protocols, sovereign data compliance, and enterprise change management designed for regulated UK industries.
          </p>
        </div>
      </div>

      {/* Pre-footer CTA */}
      <div className="mt-20 rounded-3xl bg-navy-card p-8 md:p-14 text-white text-center">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
          Partner with our practice leadership
        </h2>
        <p className="mt-3 max-w-xl mx-auto text-white/80 text-sm md:text-base">
          Connect directly with a Senior Practice Director to review your current architecture and discuss your roadmap.
        </p>
        <div className="mt-8">
          <Link
            to="/book-consultation"
            className="btn-shine inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand/25 hover:scale-[1.02] transition-all"
          >
            <span>Book Consultation</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
