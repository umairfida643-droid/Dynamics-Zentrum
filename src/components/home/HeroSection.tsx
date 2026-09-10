import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Database, 
  CheckCircle2,
  Building2,
  TrendingUp,
  Calendar,
  Layers,
  MapPin,
  Award
} from 'lucide-react';

interface AppPreview {
  id: string;
  name: string;
  badge: string;
  headline: string;
  description: string;
  impactLabel: string;
  impactValue: string;
  bullets: string[];
  link: string;
}

const APPS_DATA: AppPreview[] = [
  {
    id: 'business-central',
    name: 'Business Central',
    badge: 'AI-Enabled ERP',
    headline: 'Smart, AI-enabled ERP for SMBs',
    description: 'Outperform smartly with the all-in-one cloud ERP trusted by over 30,000 organisations worldwide to connect finance, sales, service, and supply chain.',
    impactLabel: 'Operations Velocity',
    impactValue: '+45%',
    bullets: [
      'Copilot-powered bank reconciliation & automated cash-flow forecasts',
      'Unified financials, inventory management, and multi-currency ledgers',
      'Real-time inventory optimization with demand forecasting'
    ],
    link: '/solutions/business-central'
  },
  {
    id: 'finance',
    name: 'D365 Finance',
    badge: 'Enterprise Financials',
    headline: 'Accurate financials, every time, on time',
    description: 'Boost ROI, cut risks, and automate global financial activities with intelligent automation, predictive insights, and complete UK regulatory compliance.',
    impactLabel: 'Month-End Close',
    impactValue: '72h Fast-Track',
    bullets: [
      'Multi-entity global consolidations across unlimited legal entities',
      'HMRC Making Tax Digital (MTD) and automated VAT reconciliation',
      'AI anomaly detection in vendor payments and expense audits'
    ],
    link: '/solutions/finance'
  },
  {
    id: 'sales',
    name: 'D365 Sales',
    badge: 'Modern CRM',
    headline: 'Close deals faster and win more customers',
    description: 'Leverage embedded Copilot AI to simplify complex B2B sales cycles, prioritise high-intent leads, and automate client engagement across channels.',
    impactLabel: 'Pipeline Conversion',
    impactValue: '+34%',
    bullets: [
      'Automated email summaries and real-time conversation intelligence',
      'Predictive opportunity scoring and deal risk forecasting',
      'Seamless native integration with Microsoft 365, Teams, and Outlook'
    ],
    link: '/solutions/sales'
  },
  {
    id: 'power-bi',
    name: 'Power BI & Fabric',
    badge: 'Data & Analytics',
    headline: 'Visualise Data, See Beyond the Numbers',
    description: 'Transform raw data into real-time actionable intelligence. Connect disparate databases into a unified Microsoft Fabric lakehouse with governed BI.',
    impactLabel: 'Query Latency',
    impactValue: '< 1.2s Direct',
    bullets: [
      'Executive dashboards with real-time operational telemetry',
      'Direct Lake connection to OneLake with zero data duplication',
      'Natural language Copilot Q&A for instant board-ready reports'
    ],
    link: '/solutions/power-bi'
  },
  {
    id: 'supply-chain',
    name: 'Supply Chain',
    badge: 'Resilient Logistics',
    headline: 'Secure, smart and optimised Supply Chain',
    description: 'Be disruption-ready and mitigate supply chain bottlenecks with AI-driven inventory planning, intelligent warehouse management, and real-time vendor tracking.',
    impactLabel: 'Stockouts Mitigated',
    impactValue: '-38%',
    bullets: [
      'Automated replenishment triggers based on lead-time variances',
      'Advanced robotics-compatible warehouse management (WMS)',
      'Multi-tier supplier risk visibility and procurement governance'
    ],
    link: '/solutions/supply-chain'
  },
  {
    id: 'customer-service',
    name: 'Customer Service',
    badge: 'Omnichannel Care',
    headline: 'Empower agents to offer great customer experience',
    description: 'Equip support teams with unified agent desktops, automated sentiment tracking, and Copilot AI to resolve customer queries faster and build lasting loyalty.',
    impactLabel: 'First-Contact Resolution',
    impactValue: '91.4%',
    bullets: [
      'Omnichannel routing across voice, email, chat, and social portals',
      'Copilot case summaries and generative troubleshooting drafts',
      'Comprehensive SLA tracking with automated escalation rules'
    ],
    link: '/solutions/customer-service'
  }
];

export const HeroSection: React.FC = () => {
  const [activeAppId, setActiveAppId] = useState<string>('business-central');
  const activeApp = APPS_DATA.find((a) => a.id === activeAppId) || APPS_DATA[0];

  return (
    <section className="relative overflow-hidden px-6 pt-10 pb-16 md:pt-16 md:pb-24 border-b border-black/5 dark:border-white/5">
      {/* Ambient background glows matching theme colors */}
      <div className="pointer-events-none absolute -top-40 -left-40 size-[36rem] rounded-full bg-brand/12 blur-[140px] animate-float" />
      <div 
        className="pointer-events-none absolute top-1/4 -right-36 size-[32rem] rounded-full bg-purple/15 blur-[140px] animate-float"
        style={{ animationDelay: '2.5s' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.08),transparent_65%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,1.08fr)]">
          {/* Left Column: Authoritative Copy & Direct CTAs */}
          <div className="flex flex-col gap-6 animate-fade-up">
            {/* Microsoft Solutions Partner Badge */}
            <div className="inline-flex w-fit items-center gap-2.5 rounded-full bg-brand/5 px-4 py-1.5 ring-1 ring-brand/20 dark:bg-brand/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                Microsoft Solutions Partner · Business Applications
              </span>
            </div>

            {/* H1 Heading - Dynamics Square UK style */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.04] tracking-tight text-navy dark:text-foreground text-balance">
              UK's Trusted{' '}
              <span className="bg-gradient-to-r from-brand via-brand to-purple bg-clip-text text-transparent">
                Microsoft Dynamics 365
              </span>{' '}
              Partner
            </h1>

            {/* Punchy Hero Catchphrase */}
            <div className="text-xl md:text-2xl font-bold tracking-tight text-navy/90 dark:text-foreground/90">
              When results count,{' '}
              <span className="text-brand underline decoration-brand/30 decoration-2 underline-offset-4">
                Dynamics Zentrum delivers!
              </span>
            </div>

            {/* Lead Narrative */}
            <p className="max-w-xl text-base md:text-lg text-muted-foreground text-pretty leading-relaxed">
              As a certified Microsoft Dynamics 365 partner in the UK, we empower businesses with future-ready technologies that deliver impact. Dominate and thrive with AI-powered Microsoft solutions. With Dynamics Zentrum, your success is powered by years of proven expertise—no matter the industry!
            </p>

            {/* Main Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link
                to="/book-consultation"
                className="btn-shine group inline-flex items-center gap-2.5 rounded-full bg-brand px-7 py-3.5 text-sm md:text-base font-semibold text-brand-foreground shadow-xl shadow-brand/25 ring-1 ring-brand transition-all hover:shadow-2xl hover:scale-[1.02]"
              >
                <Calendar className="size-4" />
                <span>Book a Free Consultation</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/solutions"
                className="btn-shine inline-flex items-center gap-2 rounded-full bg-card/90 px-7 py-3.5 text-sm md:text-base font-semibold text-navy dark:text-foreground ring-1 ring-black/10 backdrop-blur hover:bg-card dark:ring-white/10 transition-all"
              >
                <Sparkles className="size-4 text-brand" />
                <span>Explore Solutions</span>
              </Link>
            </div>

            {/* Trust Note under CTA */}
            <div className="text-xs font-semibold text-muted-foreground flex items-center gap-2">
              <CheckCircle2 className="size-4 text-brand shrink-0" />
              <span>Trusted by 500+ businesses · No obligation · Fast response</span>
            </div>

            {/* Multi-City UK Presence Bar */}
            <div className="mt-2 pt-4 border-t border-black/5 dark:border-white/10 flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground">
              <div className="flex items-center gap-1.5 text-navy dark:text-foreground font-semibold">
                <MapPin className="size-3.5 text-brand" />
                <span>UK Delivery Hubs:</span>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-muted/60 px-2.5 py-1 text-[11px] font-medium">
                London (City)
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-muted/60 px-2.5 py-1 text-[11px] font-medium">
                Manchester
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-muted/60 px-2.5 py-1 text-[11px] font-medium">
                Birmingham
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Microsoft Business Applications Navigator Card */}
          <div className="relative mx-auto w-full max-w-xl">
            {/* Ambient halo behind card */}
            <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-r from-brand/20 via-purple/20 to-sky/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-card/95 p-6 shadow-2xl shadow-navy/15 backdrop-blur-xl dark:border-white/15 dark:bg-card/95">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-black/5 pb-4 dark:border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="grid size-9 place-items-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/20">
                    <Layers className="size-4.5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-navy dark:text-foreground flex items-center gap-2">
                      <span>Microsoft Business Apps Navigator</span>
                      <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <div className="text-[10px] text-muted-foreground">Intelligent ERP, CRM & AI Acceleration</div>
                  </div>
                </div>

                <span className="rounded-full bg-brand/10 px-2.5 py-1 text-[10px] font-semibold text-brand ring-1 ring-brand/20 uppercase tracking-wider">
                  {activeApp.badge}
                </span>
              </div>

              {/* Quick App Selector Pills */}
              <div className="mt-4 grid grid-cols-3 gap-1.5 rounded-2xl bg-muted/60 p-1.5 dark:bg-muted/20">
                {APPS_DATA.map((app) => {
                  const isSelected = app.id === activeAppId;
                  return (
                    <button
                      key={app.id}
                      onClick={() => setActiveAppId(app.id)}
                      className={`flex items-center justify-center gap-1.5 rounded-xl py-2 px-2 text-xs font-semibold transition-all ${
                        isSelected
                          ? 'bg-card text-brand shadow-sm ring-1 ring-brand/20 dark:bg-card'
                          : 'text-muted-foreground hover:text-navy dark:hover:text-foreground'
                      }`}
                    >
                      <span className="truncate">{app.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active App Details Showcase */}
              <div className="mt-5 space-y-4 animate-in fade-in duration-200">
                <div>
                  <h3 className="text-lg font-bold text-navy dark:text-foreground leading-snug">
                    {activeApp.headline}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {activeApp.description}
                  </p>
                </div>

                {/* Key Impact Metric Banner */}
                <div className="flex items-center justify-between rounded-2xl border border-brand/15 bg-brand/5 p-3.5 dark:bg-brand/10">
                  <div className="flex items-center gap-2.5">
                    <TrendingUp className="size-4 text-brand" />
                    <span className="text-xs font-semibold text-navy dark:text-foreground">
                      {activeApp.impactLabel}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-brand tabular-nums">
                    {activeApp.impactValue}
                  </span>
                </div>

                {/* Feature Bullets */}
                <div className="space-y-2">
                  {activeApp.bullets.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="size-3.5 text-brand shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action */}
                <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                  <Link
                    to={activeApp.link}
                    className="group inline-flex items-center gap-2 text-xs font-semibold text-brand hover:opacity-80 transition-opacity"
                  >
                    <span>Explore {activeApp.name}</span>
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    to="/book-consultation"
                    className="rounded-full bg-navy px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand transition-colors dark:bg-white dark:text-navy dark:hover:bg-brand dark:hover:text-white"
                  >
                    Get Free Scope
                  </Link>
                </div>
              </div>
            </div>

            {/* Floating Accreditations / Proof points */}
            <div className="hidden sm:flex absolute -bottom-5 -left-4 z-20 items-center gap-2.5 rounded-2xl bg-card px-4 py-2.5 text-navy shadow-xl border border-black/5 dark:bg-card dark:text-foreground dark:border-white/10 backdrop-blur-md animate-float">
              <Award className="size-4 text-brand" />
              <div className="text-xs font-semibold">14+ Years Enterprise Excellence</div>
            </div>

            <div 
              className="hidden sm:flex absolute -top-4 -right-4 z-20 items-center gap-2.5 rounded-2xl bg-card px-4 py-2.5 text-navy shadow-xl border border-black/5 dark:bg-card dark:text-foreground dark:border-white/10 backdrop-blur-md animate-float"
              style={{ animationDelay: '1.8s' }}
            >
              <ShieldCheck className="size-4 text-emerald-500" />
              <div className="text-xs font-semibold">150+ Certified Lead Consultants</div>
            </div>
          </div>
        </div>

        {/* Bottom Trust & Ecosystem Strip */}
        <div className="mt-16 pt-8 border-t border-black/5 dark:border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-6 text-xs text-muted-foreground">
            <span className="font-semibold uppercase tracking-widest text-navy/70 dark:text-foreground/70">
              Ecosystem Accreditations:
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
                <ShieldCheck className="size-4 text-emerald-500" />
                ISO 27001 Certified
              </span>
              <span className="flex items-center gap-1.5 text-navy dark:text-foreground">
                <Building2 className="size-4 text-sky" />
                Crown Commercial Service Supplier
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
