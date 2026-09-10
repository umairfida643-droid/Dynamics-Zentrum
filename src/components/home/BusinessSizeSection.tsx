import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Building, Factory, Landmark, CheckCircle2, Sparkles } from 'lucide-react';

interface BusinessSegment {
  title: string;
  headline: string;
  description: string;
  badge: string;
  icon: React.ReactNode;
  features: string[];
  recommendedApps: string;
}

const BUSINESS_SEGMENTS: BusinessSegment[] = [
  {
    title: 'Startups',
    headline: 'Agile, cost-effective solutions to set a strong foundation for growth.',
    description: 'Rapid, lightweight Microsoft cloud setups engineered for early-stage momentum with minimal IT overhead and transparent fixed-scope rollout.',
    badge: 'Fast-Track Onboarding',
    icon: <Rocket className="size-6 text-brand" />,
    features: [
      'Rapid Dynamics 365 Business Central Cloud provisioning',
      'Out-of-the-box standard UK chart of accounts & VAT',
      'Flexible month-to-month scalability as you hire'
    ],
    recommendedApps: 'Business Central Cloud · Microsoft 365 · Copilot'
  },
  {
    title: 'Small Businesses',
    headline: 'Scalable tools to drive efficiency, productivity, and customer engagement.',
    description: 'Replace fragmented spreadsheets and legacy desktop accounting with an integrated, intelligent business management platform.',
    badge: 'Operational Efficiency',
    icon: <Building className="size-6 text-purple" />,
    features: [
      'Connected invoicing, inventory tracking, and purchasing',
      'Automated customer sales follow-ups and lead tracking',
      'Real-time cash flow telemetry and automated bank feeds'
    ],
    recommendedApps: 'Business Central · Dynamics 365 Sales · Power BI'
  },
  {
    title: 'Medium Businesses',
    headline: 'Advanced solutions to streamline operations and boost profitability.',
    description: 'Unify multi-location warehouses, international customer accounts, and complex supplier chains under unified operational controls.',
    badge: 'Multi-Entity Scale',
    icon: <Factory className="size-6 text-sky" />,
    features: [
      'Advanced multi-site warehouse and logistics management',
      'Consolidated multi-currency ledgers and departmental budgets',
      'Automated supplier procurement workflows and approval hierarchies'
    ],
    recommendedApps: 'Business Central / Finance · Supply Chain · Power Automate'
  },
  {
    title: 'Large Enterprises',
    headline: 'Enterprise-grade solutions designed to optimise processes and accelerate success.',
    description: 'Global-scale ERP, mission-critical telemetry, multi-tier data sovereignty, and dedicated enterprise SLA governance.',
    badge: 'Tier-1 Architecture',
    icon: <Landmark className="size-6 text-emerald-500" />,
    features: [
      'Dynamics 365 Finance & Operations with high-throughput posting',
      'Direct Lake replication to Microsoft Fabric and Azure Data Lake',
      'Strict FCA, SOX, and ISO 27001 regulatory compliance matrices'
    ],
    recommendedApps: 'D365 Finance & Operations · Customer Insights · Fabric Lakehouse'
  }
];

export const BusinessSizeSection: React.FC = () => {
  return (
    <section className="px-6 py-20 bg-muted/20 dark:bg-navy-card/20 border-b border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-brand/5 px-3.5 py-1.5 ring-1 ring-brand/20 dark:bg-brand/10 mx-auto">
            <Sparkles className="size-3.5 text-brand" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
              Tailored by Company Scale
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-navy dark:text-foreground leading-tight">
            Smart AI Solutions for Every Business
          </h2>

          <p className="mt-2 text-base md:text-lg text-muted-foreground leading-relaxed">
            Stay agile and adaptable with modern AI solutions meant to give you the required competitive edge. Dynamics Zentrum empowers businesses of all sizes to harness Microsoft Dynamics 365 solutions tailored for their growth. We are a dedicated Microsoft Dynamics CRM partner and ERP expert delivering value to:
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BUSINESS_SEGMENTS.map((seg) => (
            <div
              key={seg.title}
              className="card-3d group flex flex-col justify-between rounded-3xl border border-black/5 bg-card p-6 shadow-sm transition-all hover:border-brand/40 hover:shadow-xl dark:border-white/10 dark:bg-card"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="grid size-12 place-items-center rounded-2xl bg-muted/60 dark:bg-muted/20 group-hover:bg-brand/10 transition-colors">
                    {seg.icon}
                  </div>
                  <span className="rounded-full bg-brand/5 px-2.5 py-1 text-[10px] font-semibold text-brand ring-1 ring-brand/15">
                    {seg.badge}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-navy dark:text-foreground group-hover:text-brand transition-colors">
                  {seg.title}
                </h3>

                <div className="mt-2 text-xs font-semibold text-navy/80 dark:text-foreground/80 leading-snug">
                  "{seg.headline}"
                </div>

                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                  {seg.description}
                </p>

                <div className="mt-5 space-y-2 pt-4 border-t border-black/5 dark:border-white/10">
                  {seg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="size-3.5 text-brand shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl bg-muted/40 p-2.5 text-[11px] text-muted-foreground dark:bg-muted/15">
                  <span className="font-semibold text-navy dark:text-foreground">App Stack: </span>
                  {seg.recommendedApps}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/10">
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:opacity-80 transition-opacity"
                >
                  <span>Explore Plan for {seg.title}</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
