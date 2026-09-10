import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Rocket, RefreshCw, LifeBuoy, CheckCircle2, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../../data/siteData';

interface CoreServicePillar {
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  highlights: string[];
}

const CORE_PILLARS: CoreServicePillar[] = [
  {
    title: 'Consulting',
    slug: 'consulting',
    subtitle: 'Strategic Roadmaps & TOM',
    description: 'We study how your business runs today and show where Microsoft Dynamics 365 can add real value. Every feature is matched carefully with your goals so that the system supports you in the best way.',
    icon: <Compass className="size-6 text-brand" />,
    highlights: [
      'Target Operating Model (TOM) design',
      'TCO & licensing architecture review',
      'Fit-gap & standard capability alignment'
    ]
  },
  {
    title: 'Implementation',
    slug: 'implementation',
    subtitle: 'Predictable Agile Execution',
    description: 'From Dynamics 365 Business Central to Dynamics 365 Finance and other systems, we manage every part of setup. Our aim is to deliver a clean start that keeps daily work running without stress or stops.',
    icon: <Rocket className="size-6 text-purple" />,
    highlights: [
      'Milestone-gated agile sprint delivery',
      'Data migration factory with 100% audit',
      'Zero-downtime cutover guarantee'
    ]
  },
  {
    title: 'Upgrade & Migration',
    slug: 'upgrade',
    subtitle: 'Legacy Modernization',
    description: 'Our team works quietly in the background, so your systems stay smooth and strong. This helps your people focus fully on growing the business without worrying about slowdowns.',
    icon: <RefreshCw className="size-6 text-sky" />,
    highlights: [
      'Seamless NAV & AX to Dynamics 365 cloud',
      'Code refactoring & extension isolation',
      'Automated regression testing suites'
    ]
  },
  {
    title: 'Ongoing Support',
    slug: 'ongoing-support',
    subtitle: 'Proactive SLA Care',
    description: 'Dynamics Zentrum stays beside you after the system goes live. Our experts keep things working at their best so you can stay focused on building success while feeling secure about your technology.',
    icon: <LifeBuoy className="size-6 text-emerald-500" />,
    highlights: [
      '24/7 UK-based technical helpdesk',
      'Continuous feature release management',
      'Guaranteed sub-15min critical response'
    ]
  }
];

export const ServicesGrid: React.FC = () => {
  return (
    <section className="px-6 py-20 bg-muted/25 dark:bg-navy-card/25 border-b border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-7xl">
        {/* Section Header matching Dynamics Square UK */}
        <div className="flex flex-col gap-4">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-brand/5 px-3.5 py-1.5 ring-1 ring-brand/20 dark:bg-brand/10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
              Comprehensive Lifecycle Services
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-navy dark:text-foreground leading-tight">
                Our Services: Simple, Clear, and Focused
              </h2>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                At Dynamics Zentrum, we bring far more than software setup. We help businesses reach full strength by guiding them with clear advice, smooth execution, and steady support. As a trusted Microsoft Business Solutions Partner, we make work simple by turning problems into chances for growth with consulting, careful delivery, and care that continues long after.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/20 hover:scale-[1.02] transition-all"
            >
              <span>Explore All 16 Services</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* 4 Core Pillar Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CORE_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="card-3d group flex flex-col justify-between rounded-3xl border border-black/5 bg-card p-7 shadow-sm transition-all hover:border-brand/40 hover:shadow-xl dark:border-white/10 dark:bg-card"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="grid size-12 place-items-center rounded-2xl bg-muted/60 dark:bg-muted/20 group-hover:bg-brand/10 transition-colors">
                    {pillar.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Pillar
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-navy dark:text-foreground group-hover:text-brand transition-colors">
                  {pillar.title}
                </h3>
                <div className="text-xs font-semibold text-brand">
                  {pillar.subtitle}
                </div>

                <p className="mt-3 text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>

                {/* Bullet Points */}
                <div className="mt-5 space-y-2 pt-4 border-t border-black/5 dark:border-white/10">
                  {pillar.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="size-3.5 text-brand shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                <Link
                  to={`/services/${pillar.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:opacity-80 transition-opacity"
                >
                  <span>Learn More</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/book-consultation"
                  className="text-xs font-medium text-muted-foreground hover:text-navy dark:hover:text-foreground"
                >
                  Book Session
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Extended Specialized Services Horizontal Strip */}
        <div className="mt-12 rounded-3xl border border-black/5 bg-card/60 p-6 dark:border-white/10 dark:bg-card/40 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-xl bg-brand/10 text-brand">
                <Sparkles className="size-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-navy dark:text-foreground">
                  Specialized Technical Practice Areas
                </h4>
                <p className="text-xs text-muted-foreground">
                  ERP Audit, Azure Integration Services, Power Platform Governance, Copilot AI Enablement, and Disaster Recovery.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {SERVICES_DATA.slice(4, 10).map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="inline-flex items-center gap-1 rounded-full border border-black/5 bg-card px-3 py-1.5 text-xs font-medium text-navy hover:border-brand/40 hover:text-brand dark:border-white/10 dark:text-foreground transition-colors"
                >
                  <span>{s.title}</span>
                  <ArrowRight className="size-3 text-muted-foreground" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
