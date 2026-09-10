import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { INDUSTRIES_DATA } from '../../data/siteData';

export const IndustriesGrid: React.FC = () => {
  return (
    <section className="px-6 py-20 bg-muted/30 dark:bg-navy-card/30">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
            Industries
          </span>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-navy dark:text-foreground">
                Sector precision, delivered at pace
              </h2>
              <p className="mt-3 max-w-2xl text-base text-muted-foreground">
                Deep domain expertise across 16 regulated industries where compliance, scale and time-to-value are non-negotiable.
              </p>
            </div>
            <Link
              to="/industries"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-black/10 bg-card px-5 py-2.5 text-sm font-semibold text-navy hover:bg-muted dark:border-white/10 dark:text-foreground transition-all"
            >
              <span>View all 16 industries</span>
              <ArrowRight className="size-4 text-brand" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES_DATA.map((ind) => (
            <Link
              key={ind.slug}
              to={`/industries/${ind.slug}`}
              className="card-3d group flex flex-col justify-between rounded-2xl border border-black/5 bg-card p-5 shadow-sm transition-all hover:border-brand/40 hover:shadow-lg dark:border-white/10 dark:bg-card"
            >
              <div>
                <span className="font-mono text-xs font-bold text-brand">
                  {ind.code}
                </span>
                <h3 className="mt-2 font-semibold text-navy dark:text-foreground group-hover:text-brand transition-colors">
                  {ind.title}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                  {ind.summary}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs font-semibold text-brand">
                <span>Explore sector</span>
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
