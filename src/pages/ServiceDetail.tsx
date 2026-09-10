import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, Clock, Users } from 'lucide-react';
import { SERVICES_DATA } from '../data/siteData';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="py-16 px-6 max-w-5xl mx-auto">
      <Link
        to="/services"
        className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-brand transition-colors mb-8"
      >
        <ArrowLeft className="size-4" />
        <span>Back to all services</span>
      </Link>

      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand block">
        Service Architecture
      </span>
      <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-navy dark:text-foreground">
        {service.title}
      </h1>
      <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed">
        {service.summary}
      </p>

      {/* Highlights */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-black/5 bg-card p-6 dark:border-white/10">
          <Clock className="size-6 text-brand mb-3" />
          <h4 className="font-semibold text-navy dark:text-foreground">Accelerated Sprints</h4>
          <p className="mt-1 text-xs text-muted-foreground">Standardized template accelerators reducing delivery time by 35%.</p>
        </div>
        <div className="rounded-2xl border border-black/5 bg-card p-6 dark:border-white/10">
          <Users className="size-6 text-purple mb-3" />
          <h4 className="font-semibold text-navy dark:text-foreground">Dedicated Pod</h4>
          <p className="mt-1 text-xs text-muted-foreground">Certified Solution Architect, Functional Consultants, and QA engineers.</p>
        </div>
        <div className="rounded-2xl border border-black/5 bg-card p-6 dark:border-white/10">
          <ShieldCheck className="size-6 text-emerald-500 mb-3" />
          <h4 className="font-semibold text-navy dark:text-foreground">Zero Downtime Guarantee</h4>
          <p className="mt-1 text-xs text-muted-foreground">Tested cutover blueprints with automated fallback procedures.</p>
        </div>
      </div>

      <div className="mt-12 rounded-3xl border border-black/5 bg-card p-8 dark:border-white/10">
        <h3 className="text-xl font-semibold text-navy dark:text-foreground">
          What Our {service.title} Engagement Delivers
        </h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            'Architecture & Security Blueprint validated by Microsoft standards',
            'Full fit-gap analysis with detailed process swimlane mappings',
            'Automated regression test suites and data cleansing pipelines',
            'Role-based change management and super-user enablement',
            '24/7 hypercare support with 15-minute critical SLA response',
            'Ongoing post-launch value realization audits'
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
            <span>Schedule Discovery Call</span>
            <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-muted px-6 py-3 text-sm font-semibold text-navy dark:text-foreground hover:bg-muted/80 transition-colors"
          >
            <span>Request Scope Estimate</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
