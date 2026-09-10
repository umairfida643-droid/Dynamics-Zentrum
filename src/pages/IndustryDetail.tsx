import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { INDUSTRIES_DATA } from '../data/siteData';

export const IndustryDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = INDUSTRIES_DATA.find((i) => i.slug === slug);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  return (
    <div className="py-16 px-6 max-w-5xl mx-auto">
      <Link
        to="/industries"
        className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-brand transition-colors mb-8"
      >
        <ArrowLeft className="size-4" />
        <span>Back to all industries</span>
      </Link>

      <span className="font-mono text-xs font-bold text-brand uppercase tracking-wider block">
        Sector #{industry.code}
      </span>
      <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-navy dark:text-foreground">
        {industry.title} Dynamics 365 Accelerator
      </h1>
      <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed">
        {industry.summary}
      </p>

      <div className="mt-12 rounded-3xl border border-black/5 bg-card p-8 dark:border-white/10">
        <div className="flex items-center gap-3">
          <ShieldCheck className="size-6 text-brand" />
          <h3 className="text-xl font-semibold text-navy dark:text-foreground">
            Compliance & Regulatory Rigor
          </h3>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Built specifically to satisfy UK & EMEA regulatory mandates with automated audit trails and governance controls.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            'Custom compliance data schemas mapped to industry standards',
            'Pre-configured chart of accounts and sub-ledger groupings',
            'Automated statutory reporting export templates',
            'Role-based segregation of duties (SoD) enforcement',
            'Traceability across supply chains and customer records',
            'Secure document archival aligned with GDPR & regional guidelines'
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-sm text-navy/90 dark:text-foreground/90">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4 pt-6 border-t border-black/5 dark:border-white/10">
          <Link
            to="/book-consultation"
            className="btn-shine inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/25"
          >
            <span>Book Sector Strategy Session</span>
            <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-muted px-6 py-3 text-sm font-semibold text-navy dark:text-foreground hover:bg-muted/80 transition-colors"
          >
            <span>Request Sector Blueprint PDF</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
