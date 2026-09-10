import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SOLUTIONS_DATA } from '../../data/siteData';

export const SolutionsGrid: React.FC = () => {
  return (
    <section className="px-6 py-20 border-t border-black/5 bg-surface dark:bg-navy-dark dark:border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
            Solutions Portfolio
          </span>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-navy dark:text-foreground">
                The entire Microsoft business applications cloud
              </h2>
              <p className="mt-3 max-w-2xl text-base text-muted-foreground">
                From Business Central to Finance & Operations, our practice leads have deep hands-on expertise across the entire portfolio.
              </p>
            </div>
            <Link
              to="/solutions"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-black/10 bg-card px-5 py-2.5 text-sm font-semibold text-navy hover:bg-muted dark:border-white/10 dark:text-foreground transition-all"
            >
              <span>View all solutions</span>
              <ArrowRight className="size-4 text-brand" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTIONS_DATA.slice(0, 8).map((sol) => (
            <Link
              key={sol.slug}
              to={`/solutions/${sol.slug}`}
              className="card-3d group flex flex-col justify-between rounded-2xl border border-black/5 bg-card p-6 shadow-sm transition-all hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5 dark:border-white/10 dark:bg-card"
            >
              <div>
                <h3 className="font-semibold text-lg text-navy dark:text-foreground group-hover:text-brand transition-colors">
                  {sol.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                  {sol.summary}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-black/5 pt-4 dark:border-white/10">
                <span className="text-xs font-semibold text-brand">Explore solution</span>
                <ArrowRight className="size-4 text-brand transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
