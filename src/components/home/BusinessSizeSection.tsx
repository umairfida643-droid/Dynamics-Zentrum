import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Building, Factory, Landmark } from 'lucide-react';

interface SegmentItem {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
}

const SEGMENTS: SegmentItem[] = [
  {
    title: 'Startups',
    subtitle: 'Agile, cost-effective solutions to set a strong foundation for growth.',
    description: 'Fast-track cloud provisioning, automated UK chart of accounts, and flexible scalability with zero IT overhead.',
    icon: <Rocket className="size-6 text-brand" />,
    slug: 'business-central'
  },
  {
    title: 'Small Businesses',
    subtitle: 'Scalable tools to drive efficiency, productivity, and customer engagement.',
    description: 'Replace fragmented spreadsheets with connected invoicing, automated bank feeds, and real-time inventory control.',
    icon: <Building className="size-6 text-purple" />,
    slug: 'business-central'
  },
  {
    title: 'Medium Businesses',
    subtitle: 'Advanced solutions to streamline operations and boost profitability.',
    description: 'Unified multi-warehouse management, consolidated ledgers, and automated supplier procurement approval chains.',
    icon: <Factory className="size-6 text-sky" />,
    slug: 'finance'
  },
  {
    title: 'Large Enterprises',
    subtitle: 'Enterprise-grade solutions designed to optimise processes and accelerate success.',
    description: 'High-throughput posting, Direct Lake Fabric replication, multi-tier data sovereignty, and dedicated 24/7 UK SLA.',
    icon: <Landmark className="size-6 text-emerald-500" />,
    slug: 'finance'
  }
];

export const BusinessSizeSection: React.FC = () => {
  return (
    <section className="px-6 py-20 bg-surface dark:bg-navy-dark border-b border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-7xl">
        {/* Centered Heading matching Dynamics Square UK Section 6 */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-navy dark:text-foreground leading-tight">
            Smart AI Solutions for Every Business
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            Stay agile and adaptable with modern AI solutions meant to give you the required competitive edge. Dynamics Zentrum empowers businesses of all sizes to harness Microsoft Dynamics 365 solutions tailored for their growth. We are a dedicated Microsoft Dynamics CRM partner and ERP expert delivering value to:
          </p>
        </div>

        {/* 4 Cards in a Row with 3D Elevation */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 perspective-1000">
          {SEGMENTS.map((seg) => (
            <div
              key={seg.title}
              className="card-3d group flex flex-col justify-between rounded-3xl border border-black/8 bg-card p-7 shadow-sm transition-all duration-500 hover:border-brand/50 hover:shadow-[0_20px_45px_-12px_rgba(204,0,230,0.22)] dark:border-white/10 dark:bg-card/90 dark:hover:border-brand/60 dark:hover:shadow-[0_20px_45px_-12px_rgba(204,0,230,0.35)] relative overflow-hidden preserve-3d"
            >
              {/* Subtle 3D Glass Specular Sheen */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="grid size-14 place-items-center rounded-2xl bg-muted/70 dark:bg-muted/30 group-hover:bg-brand/15 transition-all duration-300 shadow-xs group-hover:scale-110 group-hover:shadow-md group-hover:shadow-brand/20">
                  {seg.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-navy dark:text-foreground group-hover:text-brand transition-colors duration-300">
                  {seg.title}
                </h3>

                <p className="mt-2 text-sm font-semibold text-navy/90 dark:text-foreground/90">
                  {seg.subtitle}
                </p>

                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                  {seg.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/10 relative z-10">
                <Link
                  to="/book-consultation"
                  className="btn-shine inline-flex w-full items-center justify-center gap-2 rounded-xl bg-card border border-black/10 py-2.5 text-xs font-semibold text-navy hover:border-brand hover:text-brand hover:shadow-md dark:border-white/10 dark:text-foreground dark:hover:border-brand transition-all duration-300 group-hover:border-brand/40"
                >
                  <span>Get Started</span>
                  <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
