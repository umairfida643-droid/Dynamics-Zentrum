import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { SOLUTIONS_DATA } from '../data/siteData';

export const Solutions: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'ERP' | 'CRM' | 'AI & Analytics' | 'Platform'>('All');

  const filtered = filter === 'All' 
    ? SOLUTIONS_DATA 
    : SOLUTIONS_DATA.filter((s) => s.category === filter);

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
          Technology Ecosystem
        </span>
        <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-navy dark:text-foreground">
          Microsoft Dynamics 365 Solutions
        </h1>
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          Comprehensive enterprise business applications tailored to unify financials, supply chains, sales, and citizen services.
        </p>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {(['All', 'ERP', 'CRM', 'AI & Analytics', 'Platform'] as const).map((cat) => (
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
        {filtered.map((sol) => (
          <div
            key={sol.slug}
            className="card-3d flex flex-col justify-between rounded-3xl border border-black/5 bg-card p-7 shadow-sm transition-all hover:border-brand/40 hover:shadow-xl dark:border-white/10 dark:bg-card"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="grid size-12 place-items-center rounded-2xl bg-brand/10 text-brand ring-1 ring-brand/15">
                  <Layers className="size-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand bg-brand/10 px-2.5 py-1 rounded-full">
                  {sol.category}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold text-navy dark:text-foreground">
                {sol.title}
              </h3>
              <p className="mt-2 text-xs font-semibold text-purple">
                {sol.tagline}
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {sol.summary}
              </p>

              <div className="mt-6 space-y-2 border-t border-black/5 pt-4 dark:border-white/10 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4 text-brand" />
                  <span>Native Microsoft Copilot Intelligence</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-500" />
                  <span>Target: {sol.targetMarket}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/10">
              <Link
                to={`/solutions/${sol.slug}`}
                className="btn-shine inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand/10 py-2.5 text-xs font-semibold text-brand hover:bg-brand hover:text-white transition-colors"
              >
                <span>View Architecture & Modules</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
