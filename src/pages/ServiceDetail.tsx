import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle,
  Wrench
} from 'lucide-react';
import { SERVICES_DATA } from '../data/siteData';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedServices = SERVICES_DATA.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground mb-8">
        <Link to="/services" className="hover:text-brand transition-colors">Services</Link>
        <span>/</span>
        <span className="text-brand uppercase tracking-wider">{service.category}</span>
        <span>/</span>
        <span className="text-navy dark:text-foreground">{service.title}</span>
      </div>

      {/* Hero Header */}
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3.5 py-1 text-xs font-semibold text-brand mb-4">
          <Wrench className="size-3.5" />
          <span>{service.category} Practice Blueprint</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-navy dark:text-foreground">
          {service.title}
        </h1>
        <p className="mt-4 text-xl sm:text-2xl font-medium text-brand">
          {service.heroHeadline}
        </p>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
          {service.summary}
        </p>
      </div>

      {/* Challenge vs Approach Section */}
      <div className="mt-14 grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-black/5 bg-card p-8 dark:border-white/10 dark:bg-card">
          <div className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">
            The Enterprise Challenge
          </div>
          <h3 className="text-xl font-semibold text-navy dark:text-foreground">
            What organisations struggle with
          </h3>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            {service.businessChallenge}
          </p>
        </div>

        <div className="rounded-3xl border border-black/5 bg-card p-8 dark:border-white/10 dark:bg-card">
          <div className="text-xs font-bold uppercase tracking-widest text-brand mb-2">
            Dynamics Zentrum Approach
          </div>
          <h3 className="text-xl font-semibold text-navy dark:text-foreground">
            Engineered for outcome and certainty
          </h3>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            {service.approach}
          </p>
        </div>
      </div>

      {/* Strategic Pillars */}
      <div className="mt-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
            Core Architecture
          </span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-navy dark:text-foreground">
            Key Execution Pillars
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="card-3d flex flex-col justify-between rounded-2xl border border-black/5 bg-card p-6 shadow-sm dark:border-white/10 dark:bg-card"
            >
              <div>
                <span className="rounded-full bg-brand/10 px-2.5 py-1 text-[11px] font-bold text-brand tabular-nums">
                  {pillar.metrics}
                </span>
                <h4 className="mt-4 font-semibold text-lg text-navy dark:text-foreground">
                  {pillar.title}
                </h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Delivery Phases Timeline */}
      <div className="mt-20 rounded-3xl border border-black/5 bg-card p-8 md:p-12 dark:border-white/10 dark:bg-card shadow-sm">
        <div className="max-w-2xl mb-10">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
            Structured Execution
          </span>
          <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-navy dark:text-foreground">
            Delivery Lifecycle & Milestone Governance
          </h3>
        </div>

        <div className="space-y-6">
          {service.deliveryPhases.map((phase) => (
            <div
              key={phase.step}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-muted/40 dark:bg-muted/15 border border-black/5 dark:border-white/5"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-lg font-bold text-brand bg-brand/10 rounded-xl size-10 grid place-items-center shrink-0">
                  {phase.step}
                </span>
                <div>
                  <h4 className="font-semibold text-base text-navy dark:text-foreground">
                    {phase.phase}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {phase.description}
                  </p>
                </div>
              </div>
              <span className="shrink-0 text-xs font-semibold text-brand bg-card px-3 py-1.5 rounded-full border border-black/5 dark:border-white/10 dark:bg-card">
                {phase.duration}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Formal Deliverables Checklist */}
      <div className="mt-16 rounded-3xl bg-navy-card p-8 md:p-12 text-white">
        <div className="max-w-2xl mb-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky">
            Tangible Assets
          </span>
          <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
            Formal Client Deliverables & Sign-offs
          </h3>
          <p className="mt-2 text-sm text-white/70">
            Every engagement concludes with audit-ready documentation and verified technical artefacts.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {service.deliverables.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 rounded-xl bg-white/[0.05] p-4 border border-white/10">
              <CheckCircle2 className="size-5 text-brand shrink-0 mt-0.5" />
              <span className="text-sm text-white/90 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Frequently Asked Questions */}
      {service.faqs && service.faqs.length > 0 && (
        <div className="mt-16">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
              Advisory FAQ
            </span>
            <h3 className="mt-2 text-2xl font-semibold text-navy dark:text-foreground">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="rounded-2xl border border-black/5 bg-card p-6 dark:border-white/10 dark:bg-card">
                <div className="flex items-start gap-3">
                  <HelpCircle className="size-5 text-brand shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-sm text-navy dark:text-foreground">{faq.q}</h5>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pre-footer Call to Action */}
      <div className="mt-16 rounded-3xl border border-black/5 bg-card p-8 md:p-12 text-center shadow-sm dark:border-white/10 dark:bg-card">
        <h3 className="text-2xl md:text-3xl font-semibold text-navy dark:text-foreground">
          Ready to initiate your {service.title} engagement?
        </h3>
        <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
          Book a 30-minute discovery call with our Practice Director to discuss scope, timeline, and resource allocation.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            to="/book-consultation"
            className="btn-shine inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white shadow-xl shadow-brand/25 hover:scale-[1.02] transition-all"
          >
            <span>Book Discovery Call</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>

      {/* Related Services */}
      <div className="mt-20 border-t border-black/5 pt-12 dark:border-white/10">
        <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
          Complementary Practices
        </h4>
        <div className="grid gap-4 sm:grid-cols-3">
          {relatedServices.map((rel) => (
            <Link
              key={rel.slug}
              to={`/services/${rel.slug}`}
              className="group flex flex-col justify-between p-5 rounded-2xl border border-black/5 bg-card hover:border-brand/30 dark:border-white/10 dark:bg-card transition-all"
            >
              <div>
                <h5 className="font-semibold text-sm text-navy dark:text-foreground group-hover:text-brand transition-colors">
                  {rel.title}
                </h5>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                  {rel.summary}
                </p>
              </div>
              <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand">
                <span>View practice</span>
                <ArrowRight className="size-3" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
