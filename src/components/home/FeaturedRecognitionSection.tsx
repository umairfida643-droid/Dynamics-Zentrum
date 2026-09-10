import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';

const RECOGNITION_ITEMS = [
  {
    name: 'Clutch UK',
    category: 'Top B2B Microsoft Partner',
    rating: '4.9 / 5.0 Rating',
    description: 'Recognized for client satisfaction and technical excellence in enterprise ERP deployments.'
  },
  {
    name: 'Manufacturing Today',
    category: 'Industry Feature',
    rating: 'Smart Factory Spotlight',
    description: 'Featured for implementing modern manufacturing architectures on Dynamics 365.'
  },
  {
    name: 'Forbes Technology Council',
    category: 'Executive Thought Leadership',
    rating: 'Contributing Member',
    description: 'Regular insights on autonomous enterprise workflows, Copilot AI, and cloud governance.'
  },
  {
    name: 'Tech Partner Impact Awards',
    category: 'National Winner',
    rating: 'Excellence in Cloud ERP',
    description: 'Honored for zero-disruption legacy migration and multi-entity consolidation.'
  },
  {
    name: 'ERPSoftwareBlog',
    category: 'Authoritative Publisher',
    rating: 'UK Industry Expert',
    description: 'Deep-dive architectural guides on Business Central vs Finance & Operations.'
  }
];

export const FeaturedRecognitionSection: React.FC = () => {
  return (
    <section className="px-6 py-20 bg-surface dark:bg-navy-dark border-b border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-7xl">
        {/* Centered Heading matching Dynamics Square UK Section 8 */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-navy dark:text-foreground leading-tight">
            Featured On
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            We are proud to share that our work and insights have appeared across respected platforms like Clutch, Manufacturing Today, Forbes Technology Council, Tech Partner Impact Awards, and ERPSoftwareBlog, reflecting the trust and recognition we carry.
          </p>
        </div>

        {/* 5 Recognition Cards in a Row */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {RECOGNITION_ITEMS.map((item) => (
            <div
              key={item.name}
              className="card-3d group flex flex-col justify-between rounded-3xl border border-black/5 bg-card p-6 shadow-sm transition-all hover:border-brand/40 hover:shadow-lg dark:border-white/10 dark:bg-card"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-brand/5 px-2.5 py-1 text-[10px] font-semibold text-brand ring-1 ring-brand/15">
                    {item.rating}
                  </span>
                  <Award className="size-4 text-brand" />
                </div>

                <h3 className="mt-4 text-base font-bold text-navy dark:text-foreground group-hover:text-brand transition-colors">
                  {item.name}
                </h3>

                <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mt-0.5">
                  {item.category}
                </div>

                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/10 flex items-center gap-1.5 text-[11px] font-semibold text-brand">
                <CheckCircle2 className="size-3.5" />
                <span>Verified Publication</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
