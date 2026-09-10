import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Layers, 
  HelpCircle,
  ShieldCheck
} from 'lucide-react';
import { SOLUTIONS_DATA } from '../data/siteData';

export const SolutionDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const solution = SOLUTIONS_DATA.find((s) => s.slug === slug);

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  const relatedSolutions = SOLUTIONS_DATA.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground mb-8">
        <Link to="/solutions" className="hover:text-brand transition-colors">Solutions</Link>
        <span>/</span>
        <span className="text-brand uppercase tracking-wider">{solution.category}</span>
        <span>/</span>
        <span className="text-navy dark:text-foreground">{solution.title}</span>
      </div>

      {/* Hero Banner */}
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3.5 py-1 text-xs font-semibold text-brand mb-4">
          <Layers className="size-3.5" />
          <span>{solution.targetMarket}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-navy dark:text-foreground">
          {solution.title}
        </h1>
        <p className="mt-4 text-xl sm:text-2xl font-medium text-brand">
          {solution.tagline}
        </p>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
          {solution.summary}
        </p>
      </div>

      {/* Business Impact Metrics */}
      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {solution.businessImpact.map((metric, idx) => (
          <div
            key={idx}
            className="rounded-3xl border border-black/5 bg-card p-6 shadow-sm dark:border-white/10 dark:bg-card"
          >
            <div className="text-3xl md:text-4xl font-semibold text-brand tracking-tight tabular-nums">
              {metric.metric}
            </div>
            <div className="mt-2 text-sm font-semibold text-navy dark:text-foreground">
              {metric.label}
            </div>
            <div className="mt-1 text-xs text-muted-foreground">
              {metric.context}
            </div>
          </div>
        ))}
      </div>

      {/* Core Capabilities / Modules Grid */}
      <div className="mt-16">
        <div className="max-w-2xl mb-10">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
            Functional Architecture
          </span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-navy dark:text-foreground">
            Enterprise Module Capabilities
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Comprehensive business process coverage out-of-the-box, eliminating unnecessary bespoke development.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solution.coreCapabilities.map((cap, idx) => (
            <div
              key={idx}
              className="card-3d flex flex-col justify-between rounded-2xl border border-black/5 bg-card p-6 shadow-sm dark:border-white/10 dark:bg-card"
            >
              <div>
                <span className="rounded-full bg-brand/10 px-2.5 py-1 text-[11px] font-bold text-brand">
                  {cap.highlight}
                </span>
                <h4 className="mt-4 font-semibold text-base text-navy dark:text-foreground">
                  {cap.name}
                </h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded Copilot AI Features */}
      <div className="mt-16 rounded-3xl bg-gradient-to-br from-navy-card to-[#20042b] p-8 md:p-12 text-white border border-white/10">
        <div className="flex items-center gap-3 mb-6">
          <div className="grid size-10 place-items-center rounded-xl bg-brand text-white">
            <Sparkles className="size-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky">Generative AI Intelligence</span>
            <h3 className="text-2xl font-semibold">Native Copilot Skills for {solution.title}</h3>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 mt-8">
          {solution.copilotFeatures.map((feat, idx) => (
            <div key={idx} className="rounded-2xl bg-white/[0.06] p-5 border border-white/10">
              <div className="size-2 rounded-full bg-brand mb-3" />
              <p className="text-sm text-white/90 leading-relaxed">{feat}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Architecture & Compliance */}
      <div className="mt-16 rounded-3xl border border-black/5 bg-card p-8 md:p-12 dark:border-white/10 dark:bg-card">
        <div className="max-w-2xl mb-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
            Enterprise Rigor
          </span>
          <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-navy dark:text-foreground">
            Security, Cloud Foundation & Integration
          </h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {solution.architecturePoints.map((point, idx) => (
            <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-muted/40 dark:bg-muted/15 border border-black/5 dark:border-white/5">
              <ShieldCheck className="size-5 text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-xs text-navy dark:text-foreground font-medium leading-relaxed">{point}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      {solution.faqs && solution.faqs.length > 0 && (
        <div className="mt-16">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
              Solution FAQ
            </span>
            <h3 className="mt-2 text-2xl font-semibold text-navy dark:text-foreground">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
            {solution.faqs.map((faq, idx) => (
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
          Explore a tailored demo of {solution.title}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
          Our certified solution architects will demonstrate live workflows matching your exact industry scenarios.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            to="/book-consultation"
            className="btn-shine inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white shadow-xl shadow-brand/25 hover:scale-[1.02] transition-all"
          >
            <span>Request Solution Architecture Demo</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>

      {/* Related Solutions */}
      <div className="mt-20 border-t border-black/5 pt-12 dark:border-white/10">
        <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
          Related Microsoft Business Applications
        </h4>
        <div className="grid gap-4 sm:grid-cols-3">
          {relatedSolutions.map((rel) => (
            <Link
              key={rel.slug}
              to={`/solutions/${rel.slug}`}
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
                <span>View solution</span>
                <ArrowRight className="size-3" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
