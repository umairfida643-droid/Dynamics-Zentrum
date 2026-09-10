import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, CheckCircle2 } from 'lucide-react';
import { SOLUTIONS_DATA } from '../data/siteData';

export const Solutions: React.FC = () => {
  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
          Technology Stack
        </span>
        <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-navy dark:text-foreground">
          Microsoft Dynamics 365 Solutions
        </h1>
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          Comprehensive enterprise business applications tailored to unify financials, supply chains, sales, and citizen services.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SOLUTIONS_DATA.map((sol) => (
          <div
            key={sol.slug}
            className="card-3d flex flex-col justify-between rounded-3xl border border-black/5 bg-card p-7 shadow-sm transition-all hover:border-brand/40 hover:shadow-xl dark:border-white/10 dark:bg-card"
          >
            <div>
              <div className="grid size-12 place-items-center rounded-2xl bg-brand/10 text-brand ring-1 ring-brand/15">
                <Layers className="size-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-navy dark:text-foreground">
                {sol.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {sol.summary}
              </p>

              <div className="mt-6 space-y-2 border-t border-black/5 pt-4 dark:border-white/10 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-brand" />
                  <span>Native Copilot & AI Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-purple" />
                  <span>Azure Dataverse Connectivity</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/10">
              <Link
                to={`/solutions/${sol.slug}`}
                className="btn-shine inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand/10 py-2.5 text-xs font-semibold text-brand hover:bg-brand hover:text-white transition-colors"
              >
                <span>Explore Architecture</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
