import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowRightCircle,
  Sparkles, 
  ShieldCheck, 
  Database, 
  CheckCircle2,
  Building2,
  MapPin,
  Award,
  Cpu,
  Server
} from 'lucide-react';

interface HeroAppTab {
  id: string;
  name: string;
  badge: string;
  headline: string;
  kpi: string;
  kpiLabel: string;
  link: string;
}

const HERO_APPS: HeroAppTab[] = [
  {
    id: 'bc',
    name: 'Business Central',
    badge: 'AI-Enabled ERP',
    headline: 'Unified Financials, Supply Chain & Operations for Mid-Market',
    kpi: '+45%',
    kpiLabel: 'Operational Velocity',
    link: '/solutions/business-central'
  },
  {
    id: 'fin',
    name: 'D365 Finance',
    badge: 'Enterprise Core',
    headline: 'Multi-Entity Ledger Consolidation & HMRC MTD Automation',
    kpi: '72h',
    kpiLabel: 'Fast-Track Close',
    link: '/solutions/finance'
  },
  {
    id: 'crm',
    name: 'D365 Sales & CRM',
    badge: 'Copilot AI Sales',
    headline: 'Predictive Pipeline Scoring & Contextual Customer Engagement',
    kpi: '+34%',
    kpiLabel: 'Win-Rate Lift',
    link: '/solutions/sales'
  },
  {
    id: 'scm',
    name: 'Supply Chain',
    badge: 'Intelligent Logistics',
    headline: 'Disruption-Ready Inventory Replenishment & Advanced WMS',
    kpi: '-38%',
    kpiLabel: 'Stockout Reduction',
    link: '/solutions/supply-chain'
  },
  {
    id: 'fabric',
    name: 'Power BI & Fabric',
    badge: 'Direct Lake AI',
    headline: 'Zero-Copy Analytics Lakehouse with Natural Language Queries',
    kpi: '< 1.2s',
    kpiLabel: 'Query Latency',
    link: '/solutions/power-bi'
  }
];

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('bc');
  const selectedApp = HERO_APPS.find(a => a.id === activeTab) || HERO_APPS[0];

  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-black/5 dark:border-white/5">
      {/* Background ambient lighting and orbital glows */}
      <div className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 size-[44rem] rounded-full bg-brand/10 blur-[150px] animate-float" />
      <div 
        className="pointer-events-none absolute top-40 right-1/4 size-[30rem] rounded-full bg-purple/15 blur-[140px] animate-float" 
        style={{ animationDelay: '2.5s' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.06),transparent_70%)]" />

      {/* Decorative Orbit Rings behind center */}
      <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 -z-10 size-[620px] rounded-full border border-black/[0.03] dark:border-white/[0.04]" />
      <div className="pointer-events-none absolute top-4 left-1/2 -translate-x-1/2 -z-10 size-[800px] rounded-full border border-dashed border-black/[0.04] dark:border-white/[0.05]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* CENTERED HERO HEADER - Exact Dynamics Square UK layout */}
        <div className="mx-auto max-w-4xl text-center animate-fade-up">
          {/* Top Accreditation Pill */}
          <div className="inline-flex items-center gap-2 rounded-full bg-brand/5 px-4 py-1.5 ring-1 ring-brand/20 dark:bg-brand/10 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
              Microsoft Solutions Partner · Business Applications
            </span>
          </div>

          {/* Main H1 Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-navy dark:text-foreground leading-[1.06] text-balance">
            UK's Trusted{' '}
            <span className="bg-gradient-to-r from-brand via-brand to-purple bg-clip-text text-transparent">
              Microsoft Dynamics 365
            </span>{' '}
            Partner
          </h1>

          {/* Hero Tagline Span */}
          <div className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-navy/90 dark:text-foreground/90">
            When results count,{' '}
            <span className="text-brand underline decoration-brand/30 decoration-2 underline-offset-6">
              Dynamics Zentrum delivers!
            </span>
          </div>

          {/* Centered Descriptive Narrative */}
          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
            As a certified Microsoft Dynamics 365 partner in the UK, we empower businesses with future-ready technologies that deliver impact. Dominate and thrive with AI-powered Microsoft solutions. With Dynamics Zentrum, your success is powered by years of proven expertise—no matter the industry!
          </p>

          {/* Centered CTA Button matching Dynamics Square UK */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/book-consultation"
              className="btn-shine group inline-flex items-center gap-3 rounded-full bg-brand px-8 py-4 text-base font-semibold text-brand-foreground shadow-xl shadow-brand/25 ring-1 ring-brand hover:scale-[1.02] hover:shadow-2xl hover:shadow-brand/30 transition-all"
            >
              <span>Book a Free Consultation</span>
              <ArrowRightCircle className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/solutions"
              className="btn-shine inline-flex items-center gap-2 rounded-full bg-card px-7 py-4 text-base font-semibold text-navy dark:text-foreground ring-1 ring-black/10 hover:bg-muted dark:ring-white/10 transition-all"
            >
              <Sparkles className="size-4 text-brand" />
              <span>Explore Solutions</span>
            </Link>
          </div>

          {/* Special Trust Note */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground">
            <CheckCircle2 className="size-4 text-brand" />
            <span>Trusted by 500+ businesses · No obligation · Fast response</span>
          </div>
        </div>

        {/* FLOATING SHOWCASE BANNER - Matching Dynamics Square UK home-floting-image */}
        <div className="mt-14 mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-card/95 p-6 md:p-8 shadow-2xl shadow-navy/15 backdrop-blur-xl dark:border-white/15 dark:bg-card/95">
            {/* Top Bar of Floating Console */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/5 pb-4 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="grid size-9 place-items-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/20">
                  <Server className="size-4.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-navy dark:text-foreground flex items-center gap-2">
                    <span>Microsoft Cloud Architecture Fabric</span>
                    <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <div className="text-[10px] text-muted-foreground">Global Delivery: United Kingdom · United States · Pakistan</div>
                </div>
              </div>

              {/* Status and SLA */}
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-500 ring-1 ring-emerald-500/20">
                  99.99% Availability SLA
                </span>
                <span className="rounded-full bg-brand/10 px-3 py-1 text-[11px] font-semibold text-brand ring-1 ring-brand/20">
                  14+ Years Mastery
                </span>
              </div>
            </div>

            {/* Application Switcher Tabs */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 rounded-2xl bg-muted/60 p-1.5 dark:bg-muted/20">
              {HERO_APPS.map((app) => (
                <button
                  key={app.id}
                  onClick={() => setActiveTab(app.id)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                    activeTab === app.id
                      ? 'bg-card text-brand shadow-sm ring-1 ring-brand/20 dark:bg-card'
                      : 'text-muted-foreground hover:text-navy dark:hover:text-foreground'
                  }`}
                >
                  <span>{app.name}</span>
                </button>
              ))}
            </div>

            {/* Active App Showcase Details */}
            <div className="mt-6 grid items-center gap-6 md:grid-cols-12 rounded-2xl border border-black/5 bg-surface/50 p-6 dark:border-white/5 dark:bg-navy-dark/40">
              <div className="md:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-2.5 py-0.5 text-[10px] font-bold text-brand uppercase tracking-wider">
                  <Cpu className="size-3" />
                  <span>{selectedApp.badge}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-navy dark:text-foreground leading-snug">
                  {selectedApp.headline}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Enterprise-grade Microsoft Dynamics 365 implementation with pre-configured accelerators, HMRC Making Tax Digital compliance, and continuous Copilot AI automation.
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <Link
                    to={selectedApp.link}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:opacity-80 transition-opacity"
                  >
                    <span>View Solution Architecture</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                  <span className="text-muted-foreground">·</span>
                  <Link
                    to="/book-consultation"
                    className="text-xs font-medium text-muted-foreground hover:text-navy dark:hover:text-foreground"
                  >
                    Request Scoping Call
                  </Link>
                </div>
              </div>

              <div className="md:col-span-4 rounded-2xl border border-brand/20 bg-brand/5 p-5 dark:bg-brand/10 text-center">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {selectedApp.kpiLabel}
                </div>
                <div className="mt-1 text-3xl md:text-4xl font-extrabold text-brand tracking-tight">
                  {selectedApp.kpi}
                </div>
                <div className="mt-2 text-[11px] text-muted-foreground">
                  Measured post-deployment efficiency improvement
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CLIENT / ECOSYSTEM BADGES ROW - Matching Dynamics Square UK client-home-new-list */}
        <div className="mt-14 pt-8 border-t border-black/5 dark:border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-6 text-xs text-muted-foreground">
            <span className="font-semibold uppercase tracking-widest text-navy/70 dark:text-foreground/70">
              Accredited UK Ecosystem:
            </span>
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 font-semibold">
              <span className="flex items-center gap-1.5 text-navy dark:text-foreground">
                <ShieldCheck className="size-4 text-brand" />
                Microsoft Solutions Partner
              </span>
              <span className="flex items-center gap-1.5 text-navy dark:text-foreground">
                <Database className="size-4 text-purple" />
                Cloud Solution Provider (CSP)
              </span>
              <span className="flex items-center gap-1.5 text-navy dark:text-foreground">
                <Sparkles className="size-4 text-brand" />
                AI Cloud Partner
              </span>
              <span className="flex items-center gap-1.5 text-navy dark:text-foreground">
                <Award className="size-4 text-emerald-500" />
                ISO 27001 Certified
              </span>
              <span className="flex items-center gap-1.5 text-navy dark:text-foreground">
                <Building2 className="size-4 text-sky" />
                Crown Commercial Service
              </span>
              <span className="flex items-center gap-1.5 text-navy dark:text-foreground">
                <MapPin className="size-4 text-brand" />
                United Kingdom · United States · Pakistan
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
