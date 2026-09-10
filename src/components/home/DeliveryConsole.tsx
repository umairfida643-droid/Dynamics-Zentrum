import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Cpu, Boxes, Workflow, ArrowRight } from 'lucide-react';

export const DeliveryConsole: React.FC = () => {
  const phases = [
    { name: 'Discovery & Fit-Gap', pct: 100, status: 'Complete' },
    { name: 'Design & Architecture', pct: 100, status: 'Complete' },
    { name: 'Build & Configure', pct: 82, status: 'In Progress' },
    { name: 'UAT & Data Migration', pct: 46, status: 'Upcoming' },
    { name: 'Go-Live & Hypercare', pct: 12, status: 'Upcoming' },
  ];

  const capabilityCards = [
    {
      title: 'Copilot & Azure AI',
      summary: 'Generative AI in your Dynamics workflows — from prompt design to production rollout.',
      icon: Sparkles,
      to: '/solutions/copilot'
    },
    {
      title: 'Power Platform',
      summary: 'Low-code apps, automations and enterprise BI at hyperscale.',
      icon: Cpu,
      to: '/services/power-platform'
    },
    {
      title: 'Microsoft Fabric',
      summary: 'Unified data platform for analytics, real-time reporting and Copilot grounding.',
      icon: Boxes,
      to: '/solutions/fabric'
    },
    {
      title: 'Azure Integration',
      summary: 'Event-driven enterprise integration with Azure Integration Services and Logic Apps.',
      icon: Workflow,
      to: '/solutions/azure-integration'
    }
  ];

  return (
    <section className="px-6 py-20 bg-surface dark:bg-navy-dark">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
            Capabilities & Execution
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-navy dark:text-foreground">
            Enterprise Dynamics 365, engineered for outcome
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground">
            Predictable delivery methodology backed by 150+ certified enterprise architects and change management specialists.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {/* Main Delivery Console Card (7 cols) */}
          <div className="card-3d lg:col-span-7 rounded-3xl border border-black/5 bg-card p-6 md:p-8 shadow-xl shadow-navy/5 dark:border-white/10 dark:bg-card">
            <div className="flex items-center justify-between border-b border-black/5 pb-4 dark:border-white/10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Live Project Simulation
                </span>
                <h3 className="mt-1 text-lg font-semibold text-navy dark:text-foreground">
                  Dynamics 365 Enterprise Rollout
                </h3>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 ring-1 ring-emerald-500/20">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-emerald-500">Delivery Console: On track</span>
              </div>
            </div>

            {/* Progress Bars */}
            <div className="mt-6 space-y-4">
              {phases.map((phase) => (
                <div key={phase.name}>
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-navy dark:text-foreground">{phase.name}</span>
                    <span className="font-semibold text-brand tabular-nums">{phase.pct}%</span>
                  </div>
                  <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-muted dark:bg-muted/40">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-brand to-purple transition-all duration-1000"
                      style={{ width: `${phase.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Project Summary Stats Bar */}
            <div className="mt-8 grid grid-cols-3 gap-4 rounded-2xl bg-muted/60 p-4 dark:bg-muted/20 text-center">
              <div>
                <div className="text-xs text-muted-foreground uppercase font-medium">Sprint Cadence</div>
                <div className="mt-1 text-lg font-semibold text-navy dark:text-foreground tabular-nums">14 / 18</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase font-medium">FCA Sign-offs</div>
                <div className="mt-1 text-lg font-semibold text-navy dark:text-foreground tabular-nums">9 Verified</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase font-medium">Target Go-Live</div>
                <div className="mt-1 text-lg font-semibold text-brand tabular-nums">Q3 2026</div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <Link
                to="/services/implementation"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-brand hover:opacity-80 transition-opacity"
              >
                Full Implementation Methodology <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>

          {/* 4 Feature Cards (5 cols) */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5">
            {capabilityCards.map((card) => (
              <Link
                key={card.title}
                to={card.to}
                className="card-3d group flex flex-col justify-between rounded-2xl border border-black/5 bg-card p-5 shadow-sm transition-all hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5 dark:border-white/10 dark:bg-card"
              >
                <div>
                  <div className="grid size-10 place-items-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/15 group-hover:bg-brand group-hover:text-white transition-colors">
                    <card.icon className="size-5" />
                  </div>
                  <h4 className="mt-4 font-semibold text-navy dark:text-foreground group-hover:text-brand transition-colors">
                    {card.title}
                  </h4>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {card.summary}
                  </p>
                </div>
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand opacity-0 transition-opacity group-hover:opacity-100">
                  <span>Explore</span>
                  <ArrowRight className="size-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
