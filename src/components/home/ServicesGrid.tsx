import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench } from 'lucide-react';
import { SERVICES_DATA } from '../../data/siteData';

export const ServicesGrid: React.FC = () => {
  return (
    <section className="px-6 py-20 bg-surface dark:bg-navy-dark">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
            Full Lifecycle Support
          </span>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-navy dark:text-foreground">
                Consulting, delivery and support across the lifecycle
              </h2>
              <p className="mt-3 max-w-2xl text-base text-muted-foreground">
                End-to-end partner capability to design, implement, optimize, and support your mission-critical Microsoft ecosystem.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-black/10 bg-card px-5 py-2.5 text-sm font-semibold text-navy hover:bg-muted dark:border-white/10 dark:text-foreground transition-all"
            >
              <span>Explore all services</span>
              <ArrowRight className="size-4 text-brand" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES_DATA.slice(0, 8).map((srv) => (
            <Link
              key={srv.slug}
              to={`/services/${srv.slug}`}
              className="card-3d group flex flex-col justify-between rounded-2xl border border-black/5 bg-card p-6 shadow-sm transition-all hover:border-brand/40 hover:shadow-xl dark:border-white/10 dark:bg-card"
            >
              <div>
                <div className="grid size-10 place-items-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/15 group-hover:bg-brand group-hover:text-white transition-colors">
                  <Wrench className="size-5" />
                </div>
                <h3 className="mt-4 font-semibold text-lg text-navy dark:text-foreground group-hover:text-brand transition-colors">
                  {srv.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                  {srv.summary}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-black/5 pt-4 dark:border-white/10">
                <span className="text-xs font-semibold text-brand">View details</span>
                <ArrowRight className="size-4 text-brand transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
