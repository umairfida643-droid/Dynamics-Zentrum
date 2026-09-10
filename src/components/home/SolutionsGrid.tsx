import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Database, 
  DollarSign, 
  TrendingUp, 
  BarChart3, 
  Truck, 
  Headphones, 
  Briefcase, 
  Wrench
} from 'lucide-react';

interface BusinessAppCard {
  slug: string;
  category: 'ERP' | 'CRM' | 'Analytics' | 'Operations';
  title: string;
  headline: string;
  leadCopy: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
  keyFeature: string;
}

const BUSINESS_APPS: BusinessAppCard[] = [
  {
    slug: 'business-central',
    category: 'ERP',
    title: 'Dynamics 365 Business Central',
    headline: 'Smart, AI-enabled ERP for SMBs',
    leadCopy: 'Outperform smartly with the ERP trusted by 96% of Fortune 500 companies.',
    description: 'Connect finance, sales, service, and operations on a single unified cloud platform with automated Copilot workflows.',
    icon: <Database className="size-6 text-brand" />,
    tag: 'Cloud ERP',
    keyFeature: 'AI-driven cash flow & automated reconciliation'
  },
  {
    slug: 'finance',
    category: 'ERP',
    title: 'Dynamics 365 Finance',
    headline: 'Accurate financials, every time, on time',
    leadCopy: 'Boost ROI, Cut Risks: Automate Financial Activities.',
    description: 'Transform financial operations, automate corporate close cycles, and enforce continuous HMRC and FCA regulatory compliance.',
    icon: <DollarSign className="size-6 text-purple" />,
    tag: 'Enterprise Financials',
    keyFeature: 'Multi-entity consolidation across global ledgers'
  },
  {
    slug: 'sales',
    category: 'CRM',
    title: 'Dynamics 365 Sales',
    headline: 'Close deals faster and win more customers',
    leadCopy: 'Leverage AI to simplify sales, convert leads fast and expand customer base.',
    description: 'Empower sales teams with contextual conversation intelligence, pipeline automation, and predictive customer engagement.',
    icon: <TrendingUp className="size-6 text-brand" />,
    tag: 'Modern CRM',
    keyFeature: 'Embedded Copilot email & call intelligence'
  },
  {
    slug: 'power-bi',
    category: 'Analytics',
    title: 'Power BI & Microsoft Fabric',
    headline: 'Visualise Data, See Beyond the Numbers',
    leadCopy: 'Transform data into actionable insight and make data driven decisions.',
    description: 'Unify multi-source data lakes into live executive dashboards with zero latency, Direct Lake streaming, and natural language analytics.',
    icon: <BarChart3 className="size-6 text-sky" />,
    tag: 'Business Intelligence',
    keyFeature: 'Instant board-ready reports via natural language'
  },
  {
    slug: 'supply-chain',
    category: 'Operations',
    title: 'Dynamics 365 Supply Chain',
    headline: 'Secure, smart and optimised Supply Chain',
    leadCopy: 'Be disruption-ready, mitigate supply chain issues with Dynamics 365 SCM.',
    description: 'Maximize equipment uptime, streamline advanced warehouse logistics, and build agile inventory replenishment networks.',
    icon: <Truck className="size-6 text-emerald-500" />,
    tag: 'Intelligent SCM',
    keyFeature: 'Predictive maintenance & automated replenishment'
  },
  {
    slug: 'customer-service',
    category: 'CRM',
    title: 'Dynamics 365 Customer Service',
    headline: 'Empower agents to offer great customer experience',
    leadCopy: 'Get advanced tools and real-time insights to build lasting customer relationships.',
    description: 'Deliver omnichannel customer care with automated sentiment routing, unified agent dashboards, and generative resolution drafting.',
    icon: <Headphones className="size-6 text-brand" />,
    tag: 'Omnichannel Care',
    keyFeature: 'Sub-minute first response with AI co-pilot'
  },
  {
    slug: 'field-service',
    category: 'Operations',
    title: 'Dynamics 365 Field Service',
    headline: 'Deliver proactive, on-site service excellence',
    leadCopy: 'Optimise mobile workforce schedules and first-time fix rates.',
    description: 'Intelligent dispatching, IoT remote equipment diagnostics, and mobile technician workflows for precision on-site operations.',
    icon: <Wrench className="size-6 text-purple" />,
    tag: 'Field Operations',
    keyFeature: 'Automated AI dispatch scheduling engine'
  },
  {
    slug: 'project-operations',
    category: 'Operations',
    title: 'Dynamics 365 Project Operations',
    headline: 'Connect project sales, resourcing and accounting',
    leadCopy: 'Maximize billable utilization and accelerate project delivery.',
    description: 'From initial proposal scoping to delivery milestone accounting, unite your project teams under single-pane governance.',
    icon: <Briefcase className="size-6 text-sky" />,
    tag: 'Professional Services',
    keyFeature: 'Real-time project margin & utilization tracking'
  }
];

export const SolutionsGrid: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'ERP' | 'CRM' | 'Analytics' | 'Operations'>('All');

  const filteredApps = filter === 'All' 
    ? BUSINESS_APPS 
    : BUSINESS_APPS.filter(app => app.category === filter);

  return (
    <section className="px-6 py-20 bg-surface dark:bg-navy-dark border-b border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-7xl">
        {/* Header matching Dynamics Square UK */}
        <div className="flex flex-col gap-4">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-brand/5 px-3.5 py-1.5 ring-1 ring-brand/20 dark:bg-brand/10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
              Microsoft Business Applications
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-navy dark:text-foreground leading-tight">
                Microsoft Business Apps: New Age Solutions to Drive Exponential Growth
              </h2>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                The world is changing, and so is technology! If you're struggling to thrive in a fast-paced market, don't worry. Dynamics Zentrum will address your business challenges with Microsoft Business Apps.
              </p>
            </div>

            <Link
              to="/solutions"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-black/10 bg-card px-6 py-3 text-sm font-semibold text-navy hover:bg-muted dark:border-white/10 dark:text-foreground transition-all shadow-sm"
            >
              <span>Explore All Solutions</span>
              <ArrowRight className="size-4 text-brand" />
            </Link>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap gap-2">
          {(['All', 'ERP', 'CRM', 'Analytics', 'Operations'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                filter === tab
                  ? 'bg-brand text-brand-foreground shadow-md shadow-brand/25'
                  : 'bg-card text-muted-foreground hover:text-navy border border-black/5 dark:border-white/10 dark:hover:text-foreground'
              }`}
            >
              {tab === 'All' ? 'All Business Apps' : tab}
            </button>
          ))}
        </div>

        {/* 8 Card Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredApps.map((app) => (
            <Link
              key={app.slug}
              to={`/solutions/${app.slug}`}
              className="card-3d group flex flex-col justify-between rounded-3xl border border-black/5 bg-card p-6 shadow-sm transition-all hover:border-brand/40 hover:shadow-xl dark:border-white/10 dark:bg-card"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="grid size-11 place-items-center rounded-2xl bg-muted/60 dark:bg-muted/20 group-hover:bg-brand/10 transition-colors">
                    {app.icon}
                  </div>
                  <span className="rounded-full bg-brand/5 px-2.5 py-1 text-[10px] font-semibold text-brand ring-1 ring-brand/15">
                    {app.tag}
                  </span>
                </div>

                <div className="mt-5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {app.title}
                </div>

                <h3 className="mt-1.5 text-lg font-bold text-navy dark:text-foreground group-hover:text-brand transition-colors leading-snug">
                  {app.headline}
                </h3>

                <div className="mt-2 text-xs font-semibold text-navy/80 dark:text-foreground/80 italic">
                  "{app.leadCopy}"
                </div>

                <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed">
                  {app.description}
                </p>

                <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/10 flex items-start gap-1.5 text-[11px] text-brand font-medium">
                  <CheckCircle2 className="size-3.5 shrink-0 mt-0.5" />
                  <span>{app.keyFeature}</span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-black/5 pt-4 text-xs font-semibold text-brand dark:border-white/10">
                <span>View Full Capability</span>
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
