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

        {/* 5 Recognition Cards in a Row with 3D Elevation */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 perspective-1000">
          {RECOGNITION_ITEMS.map((item) => (
            <div
              key={item.name}
              className="card-3d group flex flex-col justify-between rounded-3xl border border-black/8 bg-card p-6 shadow-sm transition-all duration-500 hover:border-brand/50 hover:shadow-[0_20px_40px_-12px_rgba(204,0,230,0.22)] dark:border-white/10 dark:bg-card/90 dark:hover:border-brand/60 dark:hover:shadow-[0_20px_40px_-12px_rgba(204,0,230,0.3)] relative overflow-hidden preserve-3d"
            >
              {/* Subtle 3D Specular Sheen */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-brand/10 px-2.5 py-1 text-[10px] font-semibold text-brand ring-1 ring-brand/20 shadow-xs group-hover:scale-105 transition-transform">
                    {item.rating}
                  </span>
                  <Award className="size-4 text-brand group-hover:rotate-12 transition-transform duration-300" />
                </div>

                <h3 className="mt-4 text-base font-bold text-navy dark:text-foreground group-hover:text-brand transition-colors duration-300">
                  {item.name}
                </h3>

                <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mt-0.5">
                  {item.category}
                </div>

                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/10 flex items-center gap-1.5 text-[11px] font-semibold text-brand relative z-10">
                <CheckCircle2 className="size-3.5 group-hover:scale-110 transition-transform" />
                <span>Verified Publication</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
