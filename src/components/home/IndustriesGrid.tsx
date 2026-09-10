import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShoppingBag, 
  GraduationCap, 
  Factory, 
  PackageCheck, 
  Store, 
  Truck, 
  CheckCircle2,
  Building2,
  Sparkles
} from 'lucide-react';
import { INDUSTRIES_DATA } from '../../data/siteData';

interface IndustryTab {
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

const INDUSTRY_TABS: IndustryTab[] = [
  {
    id: 'dist',
    name: 'Distribution',
    slug: 'distribution',
    icon: <PackageCheck className="size-5 text-emerald-500" />,
    headline: 'Streamline Your Distribution Operations at Scale',
    subtitle: 'Empowering distributors with connected systems to manage supply, demand, and profitability in one place.',
    bullets: [
      'Real-Time Inventory Visibility across all warehouses',
      'Smarter Demand & Supply Planning with AI forecasting',
      'Automated Order & Procurement Workflows'
    ],
    kpiLabel: 'Fulfillment Accuracy',
    kpiValue: '99.6%'
  },
  {
    id: 'ecom',
    name: 'E-commerce',
    slug: 'ecommerce',
    icon: <ShoppingBag className="size-5 text-brand" />,
    headline: 'Scale Your Online Stores Confidently',
    subtitle: 'Delivering exceptional experiences to your buyers and sellers, all in one place.',
    bullets: [
      'Seamless Order Processing and multi-channel sync',
      'Smart Inventory Management preventing stockouts',
      'Efficient Shipping & 3PL Integration'
    ],
    kpiLabel: 'Cart-to-Ship Time',
    kpiValue: '< 4 Hours'
  },
  {
    id: 'edu',
    name: 'Education',
    slug: 'education',
    icon: <GraduationCap className="size-5 text-purple" />,
    headline: 'Automate Your Education System with Dynamics 365',
    subtitle: 'Manage staff, student & curriculum data with an AI-powered ERP & CRM solution.',
    bullets: [
      'Improved personalized learning paths and student tracking',
      'Automated administrative and grant accounting tasks',
      'Unified Student, Faculty and Campus Management'
    ],
    kpiLabel: 'Admin Burden Saved',
    kpiValue: '35%'
  },
  {
    id: 'mfg',
    name: 'Manufacturing',
    slug: 'manufacturing',
    icon: <Factory className="size-5 text-sky" />,
    headline: 'Connect, Collaborate & Overcome Disruptions',
    subtitle: 'Modernise your supply chain for better visibility, planning, and efficiency.',
    bullets: [
      'Minimise Unplanned Downtime with IoT telemetry',
      'Predictive Maintenance for heavy equipment',
      'Finite Demand Forecasting & Production Planning'
    ],
    kpiLabel: 'OEE Improvement',
    kpiValue: '+28%'
  },
  {
    id: 'ret',
    name: 'Retail',
    slug: 'retail',
    icon: <Store className="size-5 text-brand" />,
    headline: 'Deliver Unified Retail Experiences Across Channels',
    subtitle: 'Helping retailers connect stores, customers, and operations to drive growth and loyalty seamlessly.',
    bullets: [
      'Omnichannel Sales & Personalized Customer Engagement',
      'Intelligent Store Inventory & Automated Replenishment',
      'Faster POS Billing & Unified Loyalty Programs'
    ],
    kpiLabel: 'Customer Repeat Rate',
    kpiValue: '+42%'
  },
  {
    id: 'log',
    name: 'Logistics',
    slug: 'logistics',
    icon: <Truck className="size-5 text-purple" />,
    headline: 'Optimize Logistics Operations with Intelligent Automation',
    subtitle: 'Enabling logistics businesses to improve visibility, efficiency, and delivery performance across the supply chain.',
    bullets: [
      'End-to-End Real-Time Shipment Tracking',
      'Warehouse & Fleet Route Optimization',
      'Automated Freight Auditing & Scheduling'
    ],
    kpiLabel: 'On-Time In-Full',
    kpiValue: '98.8%'
  }
];

export const IndustriesGrid: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('dist');
  const [showAllGrid, setShowAllGrid] = useState<boolean>(false);
  const activeTab = INDUSTRY_TABS.find(t => t.id === activeTabId) || INDUSTRY_TABS[0];

  return (
    <section className="px-6 py-20 bg-muted/20 dark:bg-navy-card/20 border-b border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-7xl">
        {/* Centered Heading Block matching Dynamics Square UK Section 3 */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-navy dark:text-foreground leading-tight">
            Your Industry? Our Expertise!
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            Dynamics Zentrum brings decades of profound industry expertise that merges ongoing industry insights with Microsoft technology to help you capitalise on your biggest opportunities. As a trusted Microsoft Dynamics 365 implementation partner, we deliver solutions customised for your business growth. Whether you’re in retail, manufacturing, education, or healthcare, we’re the Microsoft Dynamics 365 implementation partner UK businesses trust to deliver measurable results.
          </p>
        </div>

        {/* Horizontal Navigation Tabs with circular icons matching tabs-service-slide-solution */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {INDUSTRY_TABS.map((tab) => {
            const isSelected = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`group flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-card text-brand shadow-lg ring-1 ring-brand/30 dark:bg-card'
                    : 'bg-card/70 text-muted-foreground hover:text-navy border border-black/5 dark:border-white/10 dark:hover:text-foreground hover:bg-card'
                }`}
              >
                <div className="grid size-7 place-items-center rounded-full bg-muted/80 dark:bg-muted/30 group-hover:bg-brand/10 transition-colors">
                  {tab.icon}
                </div>
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Pane matching Dynamics Square UK */}
        <div className="mt-10 rounded-3xl border border-black/5 bg-card p-8 md:p-12 shadow-sm dark:border-white/10 dark:bg-card">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* Left Column: Heading, Subtitle, Bullets, and CTA */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand uppercase tracking-wider">
                <Sparkles className="size-3.5" />
                <span>{activeTab.name} Sector</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy dark:text-foreground leading-tight">
                {activeTab.headline}
              </h3>

              <p className="text-base text-muted-foreground font-medium leading-relaxed">
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
                  to={`/industries/${activeTab.slug}`}
                  className="btn-shine inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/20 hover:scale-[1.02] transition-all"
                >
                  <span>Know more about solutions</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-background px-6 py-3.5 text-sm font-semibold text-navy hover:bg-muted dark:border-white/10 dark:text-foreground transition-all"
                >
                  <span>Request Industry Blueprint</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Telemetry Card */}
            <div className="lg:col-span-5 rounded-3xl border border-brand/15 bg-gradient-to-br from-brand/5 via-card to-purple/5 p-8 dark:from-brand/10 dark:to-purple/10">
              <div className="flex items-center justify-between border-b border-black/5 pb-4 dark:border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="grid size-9 place-items-center rounded-xl bg-brand/10 text-brand">
                    <Building2 className="size-4.5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-navy dark:text-foreground">
                      {activeTab.name} Practice Accelerator
                    </div>
                    <div className="text-[10px] text-muted-foreground">Certified UK Industry Solution</div>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-500">
                  Pre-Configured
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
                  Standardized industry benchmark achieved across our client deployments.
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-xs">
                <span className="font-semibold text-navy dark:text-foreground">Regulatory Alignment:</span>
                <span className="text-muted-foreground">UK &amp; EU Standard Compliance</span>
              </div>
            </div>
          </div>
        </div>

        {/* View All 16 Industries Button & Grid */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAllGrid(!showAllGrid)}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-card px-7 py-3 text-sm font-semibold text-navy hover:bg-muted dark:border-white/10 dark:text-foreground transition-all shadow-sm"
          >
            <span>{showAllGrid ? 'Hide Full Industry List' : 'View All 16 Industry Blueprints'}</span>
            <ArrowRight className={`size-4 text-brand transition-transform ${showAllGrid ? '-rotate-90' : 'rotate-90'}`} />
          </button>
        </div>

        {showAllGrid && (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 animate-in fade-in duration-300">
            {INDUSTRIES_DATA.map((ind) => (
              <Link
                key={ind.slug}
                to={`/industries/${ind.slug}`}
                className="rounded-2xl border border-black/5 bg-card/80 p-5 shadow-sm hover:border-brand/40 hover:shadow-md dark:border-white/10 dark:bg-card transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-brand">{ind.code}</span>
                  <ArrowRight className="size-3.5 text-muted-foreground" />
                </div>
                <div className="mt-2 text-sm font-bold text-navy dark:text-foreground">{ind.title}</div>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{ind.summary}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
