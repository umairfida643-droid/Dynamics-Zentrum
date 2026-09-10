import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2 } from 'lucide-react';
import { INDUSTRIES_DATA } from '../data/siteData';

export const Industries: React.FC = () => {
  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
          Sector Precision
        </span>
        <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-navy dark:text-foreground">
          Industry-Specific Dynamics Solutions
        </h1>
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          Pre-built industry IP, compliance frameworks, and regulatory accelerators across 16 core commercial and public sectors.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {INDUSTRIES_DATA.map((ind) => (
          <Link
            key={ind.slug}
            to={`/industries/${ind.slug}`}
            className="card-3d group flex flex-col justify-between rounded-2xl border border-black/5 bg-card p-6 shadow-sm transition-all hover:border-brand/40 hover:shadow-xl dark:border-white/10 dark:bg-card"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-brand">
                  {ind.code}
                </span>
                <Building2 className="size-5 text-muted-foreground group-hover:text-brand transition-colors" />
              </div>
              <h3 className="mt-4 font-semibold text-lg text-navy dark:text-foreground group-hover:text-brand transition-colors">
                {ind.title}
              </h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                {ind.summary}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-black/5 pt-4 dark:border-white/10 text-xs font-semibold text-brand">
              <span>View Sector Blueprint</span>
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
