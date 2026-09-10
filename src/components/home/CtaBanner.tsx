import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  return (
    <section className="relative px-6 py-20 bg-surface dark:bg-navy-dark overflow-hidden border-t border-black/5 dark:border-white/5">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-64 bg-gradient-to-r from-brand/10 via-purple/10 to-sky/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl rounded-3xl border border-black/5 bg-gradient-to-br from-card to-card/80 p-8 md:p-14 text-center shadow-xl shadow-navy/5 dark:border-white/10 dark:from-navy-card dark:to-navy-card/80">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
          Transform Your Enterprise
        </span>
        <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-navy dark:text-foreground">
          Ready to modernize on Microsoft Dynamics 365?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-muted-foreground">
          Book a 30-minute discovery call with a senior Microsoft Dynamics 365 consultant. No obligation, actionable architecture insights.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/book-consultation"
            className="btn-shine inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm md:text-base font-semibold text-brand-foreground shadow-xl shadow-brand/25 ring-1 ring-brand hover:scale-[1.02] transition-all"
          >
            <span>Book Free Consultation</span>
            <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/contact"
            className="btn-shine inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm md:text-base font-semibold text-navy dark:text-foreground ring-1 ring-black/10 dark:ring-white/10 hover:bg-muted transition-all"
          >
            <MessageSquare className="size-4 text-brand" />
            <span>Contact Sales</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
