import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, Building2, TrendingUp } from 'lucide-react';
import { INDUSTRIES_DATA } from '../data/siteData';

export const IndustryDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = INDUSTRIES_DATA.find((i) => i.slug === slug);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  const relatedIndustries = INDUSTRIES_DATA.filter((i) => i.slug !== slug).slice(0, 4);

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      <Link
        to="/industries"
        className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-brand transition-colors mb-8"
      >
        <ArrowLeft className="size-4" />
        <span>Back to all industries</span>
      </Link>

      {/* Hero Banner */}
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3.5 py-1 text-xs font-semibold text-brand mb-4">
          <Building2 className="size-3.5" />
          <span>Regulated Sector #{industry.code}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-navy dark:text-foreground">
          {industry.title}
        </h1>
        <p className="mt-4 text-xl font-medium text-brand">
          Pre-built industry IP and regulatory accelerators on Microsoft Dynamics 365.
        </p>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
          {industry.summary}
        </p>
      </div>

      {/* Regulatory Governance Card */}
      <div className="mt-12 rounded-3xl border border-black/5 bg-card p-8 md:p-10 dark:border-white/10 dark:bg-card shadow-sm">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-xl bg-brand/10 text-brand">
            <ShieldCheck className="size-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand">Mandatory Governance Standards</span>
            <h3 className="text-xl font-semibold text-navy dark:text-foreground">{industry.regulatoryFocus}</h3>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          We tailor your chart of accounts, field audit trails, data retention policies, and statutory reporting exports directly to UK & international regulatory frameworks.
        </p>
      </div>

      {/* Accelerator Modules & Outcomes */}
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {/* Accelerator Modules */}
        <div className="rounded-3xl border border-black/5 bg-card p-8 dark:border-white/10 dark:bg-card shadow-sm">
          <h3 className="text-xl font-semibold text-navy dark:text-foreground mb-6">
            Sector Accelerator Modules
          </h3>
          <div className="space-y-4">
            {industry.acceleratorModules.map((mod, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-muted/40 dark:bg-muted/15 border border-black/5 dark:border-white/5">
                <CheckCircle2 className="size-5 text-brand shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-navy dark:text-foreground">{mod}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quantified Business Outcomes */}
        <div className="rounded-3xl bg-navy-card p-8 text-white shadow-xl">
          <div className="flex items-center gap-2 text-sky text-xs font-bold uppercase tracking-wider mb-2">
            <TrendingUp className="size-4" />
            <span>Proven Benchmarks</span>
          </div>
          <h3 className="text-xl font-semibold mb-6">
            Demonstrated Commercial Outcomes
          </h3>
          <div className="space-y-4">
            {industry.keyOutcomes.map((outcome, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.06] border border-white/10">
                <div className="size-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                <span className="text-sm font-medium text-white/95">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pre-footer Call to Action */}
      <div className="mt-16 rounded-3xl border border-black/5 bg-card p-8 md:p-12 text-center shadow-sm dark:border-white/10 dark:bg-card">
        <h3 className="text-2xl md:text-3xl font-semibold text-navy dark:text-foreground">
          Deploy our {industry.title} Accelerator
        </h3>
        <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
          Schedule a tailored consultation with our Sector Lead to review our pre-built process maps and compliance blueprints.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            to="/book-consultation"
            className="btn-shine inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white shadow-xl shadow-brand/25 hover:scale-[1.02] transition-all"
          >
            <span>Book Sector Strategy Call</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>

      {/* Related Industries */}
      <div className="mt-20 border-t border-black/5 pt-12 dark:border-white/10">
        <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
          Other Supported Sectors
        </h4>
        <div className="grid gap-4 sm:grid-cols-4">
          {relatedIndustries.map((rel) => (
            <Link
              key={rel.slug}
              to={`/industries/${rel.slug}`}
              className="group flex flex-col justify-between p-4 rounded-2xl border border-black/5 bg-card hover:border-brand/30 dark:border-white/10 dark:bg-card transition-all"
            >
              <div>
                <span className="font-mono text-xs font-bold text-brand">{rel.code}</span>
                <h5 className="font-semibold text-sm text-navy dark:text-foreground group-hover:text-brand transition-colors mt-1">
                  {rel.title}
                </h5>
              </div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand">
                <span>View sector</span>
                <ArrowRight className="size-3" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
