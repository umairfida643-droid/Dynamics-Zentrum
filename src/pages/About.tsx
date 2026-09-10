import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, ShieldCheck, Target, MapPin, CheckCircle2 } from 'lucide-react';
import { COMPANY_METRICS } from '../data/siteData';

export const About: React.FC = () => {
  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
          About Dynamics Zentrum
        </span>
        <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-navy dark:text-foreground leading-tight">
          UK’s Trusted Microsoft Dynamics 365 Partner
        </h1>
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          As a certified Microsoft Solutions Partner, we empower UK and international enterprises with future-ready technologies that deliver tangible commercial impact. With 14+ years of proven expertise, 500+ successful deployments, and 150+ certified consultants across our United Kingdom, United States, and Pakistan offices, we deliver transformations that last.
        </p>
      </div>

      {/* 4 Stats Grid */}
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

      {/* Core Mission and Pillars */}
      <div className="mt-20 grid gap-8 md:grid-cols-3">
        <div className="card-3d rounded-3xl border border-black/5 bg-card p-8 shadow-sm dark:border-white/10 dark:bg-card">
          <div className="grid size-12 place-items-center rounded-2xl bg-brand/10 text-brand mb-6">
            <Award className="size-6" />
          </div>
          <h3 className="text-xl font-bold text-navy dark:text-foreground">
            Microsoft Solutions Partner
          </h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Officially accredited across Business Applications, Modern Work, and Data &amp; AI. Our 150+ consultants undergo continuous Microsoft certifications and architectural review boards.
          </p>
          <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-3.5 text-brand shrink-0" />
              <span>Certified Solution Architects</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-3.5 text-brand shrink-0" />
              <span>Cloud Solution Provider (CSP)</span>
            </li>
          </ul>
        </div>

        <div className="card-3d rounded-3xl border border-black/5 bg-card p-8 shadow-sm dark:border-white/10 dark:bg-card">
          <div className="grid size-12 place-items-center rounded-2xl bg-purple/10 text-purple mb-6">
            <Target className="size-6" />
          </div>
          <h3 className="text-xl font-bold text-navy dark:text-foreground">
            Milestone Agile Governance
          </h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            We eliminate scope creep with fixed-milestone sprint architecture, weekly live prototypes, and zero-downtime cutover rehearsal frameworks that protect day-to-day operations.
          </p>
          <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-3.5 text-brand shrink-0" />
              <span>100% On-Time Cadence</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-3.5 text-brand shrink-0" />
              <span>Data Migration Factory with 100% audit</span>
            </li>
          </ul>
        </div>

        <div className="card-3d rounded-3xl border border-black/5 bg-card p-8 shadow-sm dark:border-white/10 dark:bg-card">
          <div className="grid size-12 place-items-center rounded-2xl bg-emerald-500/10 text-emerald-500 mb-6">
            <ShieldCheck className="size-6" />
          </div>
          <h3 className="text-xl font-bold text-navy dark:text-foreground">
            UK Sovereign &amp; Compliant
          </h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            ISO 27001 certified and Cyber Essentials Plus aligned. All architectures conform to HMRC Making Tax Digital (MTD), FCA regulations, and UK GDPR sovereign requirements.
          </p>
          <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-3.5 text-brand shrink-0" />
              <span>ISO 27001 Certified Security</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-3.5 text-brand shrink-0" />
              <span>UK Crown Commercial Service Supplier</span>
            </li>
          </ul>
        </div>
      </div>

      {/* UK Nationwide Hubs */}
      <div className="mt-20 rounded-3xl border border-black/5 bg-card p-8 md:p-12 shadow-sm dark:border-white/10 dark:bg-card">
        <div className="flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
          <div>
            <div className="flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-wider">
              <MapPin className="size-4" />
              <span>Global Presence &amp; Delivery</span>
            </div>
            <h3 className="mt-2 text-2xl md:text-3xl font-bold text-navy dark:text-foreground">
              International Offices in United Kingdom, United States &amp; Pakistan
            </h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
              Strategically positioned across London, Cheyenne, and Islamabad to provide around-the-clock enterprise engineering, solution architecture, and continuous managed support.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-black/10 bg-background px-6 py-3 text-sm font-semibold text-navy hover:bg-muted dark:border-white/10 dark:text-foreground transition-all"
          >
            <span>View Office Locations</span>
            <ArrowRight className="size-4 text-brand" />
          </Link>
        </div>
      </div>

      {/* Pre-footer CTA */}
      <div className="mt-20 rounded-3xl bg-navy-card p-8 md:p-14 text-white text-center">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
          Let’s build the future of your business—together!
        </h2>
        <p className="mt-3 max-w-xl mx-auto text-white/80 text-sm md:text-base">
          Schedule a preliminary architecture review with one of our Senior Practice Directors. Transparent, actionable, and completely free of obligation.
        </p>
        <div className="mt-8">
          <Link
            to="/book-consultation"
            className="btn-shine inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand/25 hover:scale-[1.02] transition-all"
          >
            <span>Book Free Architecture Consultation</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
