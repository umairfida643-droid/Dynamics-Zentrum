import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Database, Shield } from 'lucide-react';
import { SOLUTIONS_DATA } from '../data/siteData';

export const SolutionDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const solution = SOLUTIONS_DATA.find((s) => s.slug === slug);

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  return (
    <div className="py-16 px-6 max-w-5xl mx-auto">
      <Link
        to="/solutions"
        className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-brand transition-colors mb-8"
      >
        <ArrowLeft className="size-4" />
        <span>Back to all solutions</span>
      </Link>

      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand block">
        Solution Overview
      </span>
      <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-navy dark:text-foreground">
        {solution.title}
      </h1>
      <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed">
        {solution.summary}
      </p>

      {/* Feature cards */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-black/5 bg-card p-6 dark:border-white/10">
          <Sparkles className="size-6 text-brand mb-3" />
          <h4 className="font-semibold text-navy dark:text-foreground">Copilot Grounded</h4>
          <p className="mt-1 text-xs text-muted-foreground">Autonomous workflows and generative assistant embedded in your day-to-day screens.</p>
        </div>
        <div className="rounded-2xl border border-black/5 bg-card p-6 dark:border-white/10">
          <Database className="size-6 text-purple mb-3" />
          <h4 className="font-semibold text-navy dark:text-foreground">Single Data Model</h4>
          <p className="mt-1 text-xs text-muted-foreground">Unified across Microsoft Dataverse with bi-directional ERP and CRM synchronization.</p>
        </div>
        <div className="rounded-2xl border border-black/5 bg-card p-6 dark:border-white/10">
          <Shield className="size-6 text-emerald-500 mb-3" />
          <h4 className="font-semibold text-navy dark:text-foreground">Enterprise Security</h4>
          <p className="mt-1 text-xs text-muted-foreground">Granular field-level security, audit logging, and automated compliance policies.</p>
        </div>
      </div>

      <div className="mt-12 rounded-3xl border border-black/5 bg-card p-8 dark:border-white/10">
        <h3 className="text-xl font-semibold text-navy dark:text-foreground">
          Key Capabilities & Module Features
        </h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            'Comprehensive real-time reporting dashboards with Power BI embedded',
            'Native integrations with Microsoft 365, Teams, and Outlook',
            'Configurable approval hierarchies and multi-currency ledger support',
            'Automated batch job scheduler and anomaly detection alerts',
            'Modular microservice extensions via Azure Logic Apps',
            'Full mobile tablet and smartphone native application access'
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-brand shrink-0 mt-0.5" />
              <span className="text-sm text-navy/90 dark:text-foreground/90">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4 pt-6 border-t border-black/5 dark:border-white/10">
          <Link
            to="/book-consultation"
            className="btn-shine inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/25"
          >
            <span>Request Demo & Solution Architecture</span>
            <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-muted px-6 py-3 text-sm font-semibold text-navy dark:text-foreground hover:bg-muted/80 transition-colors"
          >
            <span>Speak with a Practice Lead</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
