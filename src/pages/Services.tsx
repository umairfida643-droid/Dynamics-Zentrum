import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../data/siteData';

export const Services: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Advisory' | 'Implementation' | 'Optimization' | 'Platform'>('All');

  const filtered = filter === 'All' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter((s) => s.category === filter);

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
          Practice Capabilities
        </span>
        <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-navy dark:text-foreground">
          Dynamics 365 Consulting & Delivery Services
        </h1>
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          From strategic discovery to 24/7 mission-critical hypercare, our accredited Microsoft architects ensure seamless enterprise rollout.
        </p>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {(['All', 'Advisory', 'Implementation', 'Optimization', 'Platform'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                filter === cat
                  ? 'bg-brand text-white shadow-md shadow-brand/20'
                  : 'bg-muted text-muted-foreground hover:text-navy dark:hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((srv) => (
          <div
            key={srv.slug}
            className="card-3d flex flex-col justify-between rounded-3xl border border-black/5 bg-card p-7 shadow-sm transition-all hover:border-brand/40 hover:shadow-xl dark:border-white/10 dark:bg-card"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="grid size-12 place-items-center rounded-2xl bg-brand/10 text-brand ring-1 ring-brand/15">
                  <Wrench className="size-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                  {srv.category}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold text-navy dark:text-foreground">
                {srv.title}
              </h3>
              <p className="mt-2 text-xs font-semibold text-brand">
                {srv.heroHeadline}
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {srv.summary}
              </p>

              <div className="mt-6 space-y-2 border-t border-black/5 pt-4 dark:border-white/10">
                <div className="flex items-center gap-2 text-xs font-medium text-navy dark:text-foreground">
                  <CheckCircle2 className="size-4 text-emerald-500" />
                  <span>Certified UK Lead Architects</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-navy dark:text-foreground">
                  <ShieldCheck className="size-4 text-brand" />
                  <span>ISO 27001 / SLA-Backed Governance</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/10">
              <Link
                to={`/services/${srv.slug}`}
                className="btn-shine inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand/10 py-2.5 text-xs font-semibold text-brand hover:bg-brand hover:text-white transition-colors"
              >
                <span>Explore Full Practice Blueprint</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
