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
  Sparkles,
  Server
} from 'lucide-react';

interface AppTab {
  id: string;
  name: string;
  slug: string;
  icon: React.ReactNode;
  headline: string;
  subtitle: string;
  bullets: string[];
  kpiLabel: string;
  kpiValue: string;
}

const APPS_TABS: AppTab[] = [
  {
    id: 'bc',
    name: 'Business Central',
    slug: 'business-central',
    icon: <Database className="size-6 text-brand" />,
    headline: 'Smart, AI-enabled ERP for SMBs',
    subtitle: 'Outperform smartly with the ERP trusted by 96% of Fortune 500 companies.',
    bullets: [
      'Enjoy more savings with low cost of ownership',
      'Boost efficiency with AI and automated workflows',
      'No more manual data entry or app-switching'
    ],
    kpiLabel: 'Operational Efficiency Lift',
    kpiValue: '+45%'
  },
  {
    id: 'fin',
    name: 'Finance',
    slug: 'finance',
    icon: <DollarSign className="size-6 text-purple" />,
    headline: 'Accurate financials, every time, on time',
    subtitle: 'Boost ROI, Cut Risks: Automate Financial Activities',
    bullets: [
      'Real-time financial analytics for informed decisions',
      'AI-driven insights for proactive risk management',
      'Streamline operations and improve cash flow with automation'
    ],
    kpiLabel: 'Month-End Close Window',
    kpiValue: '72h Fast-Track'
  },
  {
    id: 'scm',
    name: 'Supply Chain',
    slug: 'supply-chain',
    icon: <Truck className="size-6 text-emerald-500" />,
    headline: 'Secure, smart and optimised Supply Chain',
    subtitle: 'Be disruption-ready, mitigate supply chain issues with Dynamics 365 SCM.',
    bullets: [
      'Boosted Performance with Intelligent Guidance',
      'Proactive Issue Detection for Quality Assurance',
      'Complete Visibility for Supply Chain Efficiency'
    ],
    kpiLabel: 'Stockouts Mitigated',
    kpiValue: '-38%'
  },
  {
    id: 'sales',
    name: 'Sales',
    slug: 'sales',
    icon: <TrendingUp className="size-6 text-brand" />,
    headline: 'Close deals faster and win more customers',
    subtitle: 'Leverage AI to simplify sales, convert leads fast and expand customer base.',
    bullets: [
      'Use Copilot to reduce mundane tasks',
      'Ease selling with intelligent customer insights',
      'Meet customer’s preferences with personalized interactions'
    ],
    kpiLabel: 'Pipeline Conversion',
    kpiValue: '+34%'
  },
  {
    id: 'pbi',
    name: 'Power BI',
    slug: 'power-bi',
    icon: <BarChart3 className="size-6 text-sky" />,
    headline: 'Visualise Data, See Beyond the Numbers',
    subtitle: 'Transform data into actionable insight and make data driven decisions.',
    bullets: [
      'Enhanced decision making with real-time insights',
      'Improved operational efficiency with increased productivity',
      'Analyse customer behaviour for tailored experience'
    ],
    kpiLabel: 'Direct Lake Latency',
    kpiValue: '< 1.2s'
  },
  {
    id: 'cs',
    name: 'Customer Service',
    slug: 'customer-service',
    icon: <Headphones className="size-6 text-purple" />,
    headline: 'Empower agents to offer great customer experience',
    subtitle: 'Get advanced tools and real-time insights to build lasting customer relationships.',
    bullets: [
      'Advanced service delivery tracking and placements',
      'Deliver consistent support across multiple channels',
      'Personalize customer interactions through AI-Insights'
    ],
    kpiLabel: 'First Contact Resolution',
    kpiValue: '91.4%'
  }
];

export const SolutionsGrid: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('bc');
  const activeTab = APPS_TABS.find(t => t.id === activeTabId) || APPS_TABS[0];

  return (
    <section className="px-6 py-20 bg-surface dark:bg-navy-dark border-b border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-7xl">
        {/* Centered Heading Block matching Dynamics Square UK Section 5 */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-navy dark:text-foreground leading-tight">
            Microsoft Business Apps: New Age Solutions to Drive Exponential Growth
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            The world is changing, and so is technology! If you're struggling to thrive in a fast-paced market, don't worry. Dynamics Zentrum will address your business challenges with Microsoft Business Apps.
          </p>
        </div>

        {/* Horizontal Navigation Tabs matching tabs-service-slide */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {APPS_TABS.map((tab) => {
            const isSelected = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`group flex items-center gap-2.5 rounded-2xl px-5 py-3 text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-card text-brand shadow-lg ring-1 ring-brand/30 dark:bg-card'
                    : 'bg-card/70 text-muted-foreground hover:text-navy border border-black/5 dark:border-white/10 dark:hover:text-foreground hover:bg-card'
                }`}
              >
                <span className="shrink-0">{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Pane matching tab-inner-contant-one */}
        <div className="mt-10 rounded-3xl border border-black/5 bg-card p-8 md:p-12 shadow-sm dark:border-white/10 dark:bg-card">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* Left Column: Heading, Subtitle, Bullets, and CTA */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand uppercase tracking-wider">
                <Sparkles className="size-3.5" />
                <span>{activeTab.name}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy dark:text-foreground leading-tight">
                {activeTab.headline}
              </h3>

              <p className="text-base text-muted-foreground font-medium">
                {activeTab.subtitle}
              </p>

              <ul className="space-y-3 pt-2">
                {activeTab.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-navy/90 dark:text-foreground/90">
                    <CheckCircle2 className="size-5 text-brand shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to={`/solutions/${activeTab.slug}`}
                  className="btn-shine inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/20 hover:scale-[1.02] transition-all"
                >
                  <span>Get Started</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-background px-6 py-3.5 text-sm font-semibold text-navy hover:bg-muted dark:border-white/10 dark:text-foreground transition-all"
                >
                  <span>Book Free Consultation</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Telemetry Card */}
            <div className="lg:col-span-5 rounded-3xl border border-brand/15 bg-gradient-to-br from-brand/5 via-card to-purple/5 p-8 dark:from-brand/10 dark:to-purple/10">
              <div className="flex items-center justify-between border-b border-black/5 pb-4 dark:border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="grid size-9 place-items-center rounded-xl bg-brand/10 text-brand">
                    <Server className="size-4.5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-navy dark:text-foreground">
                      {activeTab.name} Architecture
                    </div>
                    <div className="text-[10px] text-muted-foreground">Certified Microsoft Implementation</div>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-500">
                  Active
                </span>
              </div>

              <div className="mt-6 text-center py-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {activeTab.kpiLabel}
                </div>
                <div className="mt-2 text-4xl sm:text-5xl font-extrabold text-brand tracking-tight">
                  {activeTab.kpiValue}
                </div>
                <div className="mt-2 text-xs text-muted-foreground max-w-xs mx-auto">
                  Measured across 500+ client implementations in the UK and EMEA.
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-xs">
                <span className="font-semibold text-navy dark:text-foreground">Sovereign Cloud:</span>
                <span className="text-muted-foreground">UK South &amp; West Data Centers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Explore All Solutions Link */}
        <div className="mt-12 text-center">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-card px-7 py-3 text-sm font-semibold text-navy hover:bg-muted dark:border-white/10 dark:text-foreground transition-all shadow-sm"
          >
            <span>Explore Complete Solutions Matrix</span>
            <ArrowRight className="size-4 text-brand" />
          </Link>
        </div>
      </div>
    </section>
  );
};
