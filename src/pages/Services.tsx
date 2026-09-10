import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, CheckCircle2 } from 'lucide-react';
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
        <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-navy dark:text-foreground leading-tight">
          Our Services: Simple, Clear, and Focused
        </h1>
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          At Dynamics Zentrum, we bring far more than software setup. We help businesses reach full strength by guiding them with clear advice, smooth execution, and steady support. As a trusted Microsoft Business Solutions Partner, we make work simple by turning problems into chances for growth with consulting, careful delivery, and care that continues long after.
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

              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {srv.summary}
              </p>

              <div className="mt-6 space-y-2 border-t border-black/5 pt-4 dark:border-white/10">
                {srv.deliverables.slice(0, 2).map((deliv, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="size-3.5 text-brand shrink-0" />
                    <span className="line-clamp-1">{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-black/5 pt-4 dark:border-white/10">
              <Link
                to={`/services/${srv.slug}`}
                className="btn-shine inline-flex w-full items-center justify-center gap-2 rounded-xl bg-card border border-black/10 py-2.5 text-xs font-semibold text-navy hover:border-brand hover:text-brand dark:border-white/10 dark:text-foreground dark:hover:border-brand transition-all"
              >
                <span>View Full Service Scope</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
