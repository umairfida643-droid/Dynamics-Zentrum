import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Database, 
  Cpu, 
  Workflow, 
  Lock, 
  Activity, 
  CheckCircle2,
  Server
} from 'lucide-react';
import { TRUST_BADGES } from '../../data/siteData';

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'erp' | 'ai' | 'integration'>('erp');

  return (
    <section className="relative overflow-hidden px-6 pt-12 pb-16 md:pt-20 md:pb-24">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-40 -left-40 size-[34rem] rounded-full bg-brand/12 blur-[130px] animate-float" />
      <div 
        className="pointer-events-none absolute top-1/4 -right-32 size-[30rem] rounded-full bg-purple/15 blur-[130px] animate-float"
        style={{ animationDelay: '2.5s' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.07),transparent_65%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.05fr)]">
          {/* Left Column: Copy, CTAs, and Trust Credentials */}
          <div className="flex flex-col gap-6 animate-fade-up">
            {/* Pulsing Accreditation Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-brand/5 px-3.5 py-1.5 ring-1 ring-brand/20 dark:bg-brand/10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
                Microsoft Solutions Partner · Business Applications
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="max-w-[18ch] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight text-navy dark:text-foreground text-balance">
              Engineering Enterprise Agility on{' '}
              <span className="bg-gradient-to-r from-brand via-brand to-purple bg-clip-text text-transparent">
                Microsoft Dynamics 365
              </span>
            </h1>

            {/* Lead Narrative */}
            <p className="max-w-xl text-base md:text-lg text-muted-foreground text-pretty leading-relaxed">
              We design, deploy, and govern mission-critical Dynamics 365 ERP, CRM, and Copilot environments for the UK's most demanding enterprises — delivered by 150+ certified technical specialists.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                to="/book-consultation"
                className="btn-shine group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm md:text-base font-semibold text-brand-foreground shadow-xl shadow-brand/25 ring-1 ring-brand transition-all hover:shadow-2xl hover:scale-[1.02]"
              >
                <span>Book Architecture Review</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/solutions"
                className="btn-shine inline-flex items-center gap-2 rounded-full bg-card/80 px-7 py-3.5 text-sm md:text-base font-semibold text-navy dark:text-foreground ring-1 ring-black/10 backdrop-blur hover:bg-card dark:ring-white/10 transition-all"
              >
                <Sparkles className="size-4 text-brand" />
                <span>Explore Solutions Matrix</span>
              </Link>
            </div>

            {/* Trust Chips */}
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {TRUST_BADGES.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-full border border-black/5 bg-card/80 px-3 py-1.5 text-[11px] font-semibold text-navy backdrop-blur dark:border-white/10 dark:text-foreground shadow-xs"
                >
                  <ShieldCheck className="size-3.5 text-brand" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Enterprise Operations & Telemetry Cockpit (NO LOGO, REVOLUTIONIZED DESIGN) */}
          <div className="relative mx-auto w-full max-w-xl">
            {/* Ambient Background Glow behind Cockpit */}
            <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-r from-brand/20 via-purple/20 to-sky/20 blur-2xl" />

            {/* The Main Cockpit Glass Container */}
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/95 p-6 shadow-2xl shadow-navy/20 backdrop-blur-2xl dark:border-white/15 dark:bg-[#12031a]/95">
              {/* Telemetry Header */}
              <div className="flex items-center justify-between border-b border-black/5 pb-4 dark:border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="grid size-8 place-items-center rounded-lg bg-brand/10 text-brand">
                    <Server className="size-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-navy dark:text-foreground flex items-center gap-2">
                      <span>UK Sovereign Cloud Fabric</span>
                      <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <div className="text-[10px] text-muted-foreground">London (UK South) · Active-Active Cluster</div>
                  </div>
                </div>

                <div className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-500 ring-1 ring-emerald-500/20 tabular-nums">
                  99.99% SLA
                </div>
              </div>

              {/* Layer Selection Tabs */}
              <div className="mt-4 grid grid-cols-3 gap-1.5 rounded-xl bg-muted/60 p-1 dark:bg-muted/20">
                <button
                  onClick={() => setActiveTab('erp')}
                  className={`flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-semibold transition-all ${
                    activeTab === 'erp' 
                      ? 'bg-card text-brand shadow-xs dark:bg-card/80' 
                      : 'text-muted-foreground hover:text-navy dark:hover:text-foreground'
                  }`}
                >
                  <Database className="size-3.5" />
                  <span>Core ERP</span>
                </button>

                <button
                  onClick={() => setActiveTab('ai')}
                  className={`flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-semibold transition-all ${
                    activeTab === 'ai' 
                      ? 'bg-card text-brand shadow-xs dark:bg-card/80' 
                      : 'text-muted-foreground hover:text-navy dark:hover:text-foreground'
                  }`}
                >
                  <Sparkles className="size-3.5" />
                  <span>Copilot AI</span>
                </button>

                <button
                  onClick={() => setActiveTab('integration')}
                  className={`flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-semibold transition-all ${
                    activeTab === 'integration' 
                      ? 'bg-card text-brand shadow-xs dark:bg-card/80' 
                      : 'text-muted-foreground hover:text-navy dark:hover:text-foreground'
                  }`}
                >
                  <Workflow className="size-3.5" />
                  <span>Integration</span>
                </button>
              </div>

              {/* Dynamic Telemetry Display based on Tab */}
              <div className="mt-5 space-y-3.5">
                {activeTab === 'erp' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="rounded-2xl border border-black/5 bg-muted/30 p-3.5 dark:border-white/5 dark:bg-muted/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="grid size-9 place-items-center rounded-xl bg-purple/10 text-purple">
                          <Database className="size-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-navy dark:text-foreground">Dynamics 365 Finance & Operations</div>
                          <div className="text-[10px] text-muted-foreground">Multi-entity consolidation across 14 ledgers</div>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-emerald-500">Live Sync</span>
                    </div>

                    <div className="rounded-2xl border border-black/5 bg-muted/30 p-3.5 dark:border-white/5 dark:bg-muted/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="grid size-9 place-items-center rounded-xl bg-brand/10 text-brand">
                          <Activity className="size-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-navy dark:text-foreground">Transaction Throughput</div>
                          <div className="text-[10px] text-muted-foreground">Sub-second posting latency</div>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-semibold text-brand tabular-nums">48.2k tx/sec</span>
                    </div>

                    <div className="rounded-2xl border border-black/5 bg-muted/30 p-3.5 dark:border-white/5 dark:bg-muted/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="grid size-9 place-items-center rounded-xl bg-sky/20 text-sky">
                          <Lock className="size-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-navy dark:text-foreground">FCA & SOX Regulatory Guardrails</div>
                          <div className="text-[10px] text-muted-foreground">Automated field audit & segregation of duties</div>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-sky">Enforced</span>
                    </div>
                  </div>
                )}

                {activeTab === 'ai' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="rounded-2xl border border-brand/20 bg-brand/5 p-3.5 dark:bg-brand/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="grid size-9 place-items-center rounded-xl bg-brand text-white">
                          <Sparkles className="size-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-navy dark:text-foreground">Copilot Grounding Engine</div>
                          <div className="text-[10px] text-muted-foreground">Operating inside tenant Dataverse boundary</div>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-brand">Zero Leakage</span>
                    </div>

                    <div className="rounded-2xl border border-black/5 bg-muted/30 p-3.5 dark:border-white/5 dark:bg-muted/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="grid size-9 place-items-center rounded-xl bg-emerald-500/10 text-emerald-500">
                          <CheckCircle2 className="size-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-navy dark:text-foreground">Autonomous Month-End Close</div>
                          <div className="text-[10px] text-muted-foreground">Discrepancy reconciliation AI agent</div>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-semibold text-emerald-500 tabular-nums">72h Close</span>
                    </div>

                    <div className="rounded-2xl border border-black/5 bg-muted/30 p-3.5 dark:border-white/5 dark:bg-muted/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="grid size-9 place-items-center rounded-xl bg-purple/10 text-purple">
                          <Cpu className="size-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-navy dark:text-foreground">Azure OpenAI Dedicated Gateway</div>
                          <div className="text-[10px] text-muted-foreground">GPT-4o fine-tuned for UK commercial tax</div>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-semibold text-purple tabular-nums">14ms Latency</span>
                    </div>
                  </div>
                )}

                {activeTab === 'integration' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="rounded-2xl border border-black/5 bg-muted/30 p-3.5 dark:border-white/5 dark:bg-muted/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="grid size-9 place-items-center rounded-xl bg-sky/20 text-sky">
                          <Workflow className="size-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-navy dark:text-foreground">Azure Integration Services Hub</div>
                          <div className="text-[10px] text-muted-foreground">Event-driven Service Bus queues & Logic Apps</div>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-emerald-500">0 Dropped</span>
                    </div>

                    <div className="rounded-2xl border border-black/5 bg-muted/30 p-3.5 dark:border-white/5 dark:bg-muted/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="grid size-9 place-items-center rounded-xl bg-brand/10 text-brand">
                          <Database className="size-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-navy dark:text-foreground">Direct Lake Fabric Replication</div>
                          <div className="text-[10px] text-muted-foreground">OneLake Delta Parquet live streaming</div>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-semibold text-brand tabular-nums">&lt; 3m Sync</span>
                    </div>

                    <div className="rounded-2xl border border-black/5 bg-muted/30 p-3.5 dark:border-white/5 dark:bg-muted/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="grid size-9 place-items-center rounded-xl bg-purple/10 text-purple">
                          <Lock className="size-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-navy dark:text-foreground">Bank & 3PL EDI Gateways</div>
                          <div className="text-[10px] text-muted-foreground">ISO 20022 and BACS encrypted pipelines</div>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-purple">Certified</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Quick-Action in Cockpit */}
              <div className="mt-5 pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-brand" />
                  <span className="text-xs font-medium text-muted-foreground">Live Telemetry Diagnostics Active</span>
                </div>
                <Link
                  to="/services/erp-audit"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:opacity-80 transition-opacity"
                >
                  <span>Request Infrastructure Audit</span>
                  <ArrowRight className="size-3" />
                </Link>
              </div>
            </div>

            {/* 2 Floating Glass Badges */}
            <div className="hidden sm:flex absolute -bottom-5 -left-4 z-20 items-center gap-2.5 rounded-2xl bg-white/95 px-4 py-2.5 text-navy shadow-xl border border-black/5 dark:bg-[#150520]/95 dark:text-foreground dark:border-white/10 backdrop-blur-md animate-float">
              <ShieldCheck className="size-4 text-emerald-500" />
              <div className="text-xs font-semibold">Zero-Downtime Cutover Guarantee</div>
            </div>

            <div 
              className="hidden sm:flex absolute -top-4 -right-4 z-20 items-center gap-2.5 rounded-2xl bg-white/95 px-4 py-2.5 text-navy shadow-xl border border-black/5 dark:bg-[#150520]/95 dark:text-foreground dark:border-white/10 backdrop-blur-md animate-float"
              style={{ animationDelay: '1.8s' }}
            >
              <Sparkles className="size-4 text-brand" />
              <div className="text-xs font-semibold">150+ Certified Lead Architects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
