import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Clock, Award, CheckCircle2 } from 'lucide-react';

interface ImpactCard {
  metric: string;
  label: string;
  context: string;
  icon: React.ReactNode;
}

const IMPACT_CARDS: ImpactCard[] = [
  {
    metric: '4x',
    label: 'Revenue Growth Velocity',
    context: 'Enabling rapid commercial expansion through unified ERP & CRM automation.',
    icon: <TrendingUp className="size-6 text-brand" />
  },
  {
    metric: '87%',
    label: 'Customer Retention',
    context: 'Long-term client adoption driven by proactive post-live SLA care.',
    icon: <Users className="size-6 text-purple" />
  },
  {
    metric: '99.8%',
    label: 'On-Time Deployment',
    context: 'Strict milestone sprint governance eliminates costly delivery delays.',
    icon: <Clock className="size-6 text-emerald-500" />
  },
  {
    metric: '100%',
    label: 'Global Delivery Network',
    context: 'Senior architects and engineers in United Kingdom, United States & Pakistan.',
    icon: <Award className="size-6 text-sky" />
  }
];

export const SpotlightCard: React.FC = () => {
  return (
    <section className="px-6 py-20 bg-muted/20 dark:bg-navy-card/20 border-b border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-7xl">
        {/* Centered Heading matching Dynamics Square UK Section 7 */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-navy dark:text-foreground leading-tight">
            Delivering Impact Where It Matters Because You Deserve More
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            At Dynamics Zentrum, we’ve guided businesses to optimise operations and boost performance. As a results-driven Microsoft Dynamics 365 partner in the UK, we’ve helped clients achieve 4x revenue growth, 87% customer retention, and real transformation through strategic implementations.
          </p>
        </div>

        {/* 4 Impact Cards in a Row */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {IMPACT_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="card-3d group flex flex-col justify-between rounded-3xl border border-black/5 bg-card p-7 shadow-sm transition-all hover:border-brand/40 hover:shadow-xl dark:border-white/10 dark:bg-card"
            >
              <div>
                <div className="grid size-14 place-items-center rounded-2xl bg-muted/60 dark:bg-muted/20 group-hover:bg-brand/10 transition-colors">
                  {card.icon}
                </div>

                <div className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-brand via-brand to-purple bg-clip-text text-transparent">
                  {card.metric}
                </div>

                <h3 className="mt-2 text-base font-bold text-navy dark:text-foreground">
                  {card.label}
                </h3>

                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {card.context}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/10 flex items-center gap-2 text-xs font-semibold text-brand">
                <CheckCircle2 className="size-4" />
                <span>Verified Impact Metric</span>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation Callout */}
        <div className="mt-12 text-center">
          <Link
            to="/book-consultation"
            className="btn-shine inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-brand-foreground shadow-xl shadow-brand/25 ring-1 ring-brand hover:scale-[1.02] transition-all"
          >
            <span>Book Free Architecture Consultation</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
