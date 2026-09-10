import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
          Get in Touch
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-navy dark:text-foreground">
          Contact Dynamics Zentrum
        </h1>
        <p className="mt-3 text-base text-muted-foreground">
          Connect with our team to discuss project requirements, support requests, or partnership opportunities.
        </p>
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-12">
        {/* Info Cards (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="rounded-3xl border border-black/5 bg-card p-6 dark:border-white/10 dark:bg-card">
            <div className="flex items-start gap-4">
              <div className="grid size-11 place-items-center rounded-2xl bg-brand/10 text-brand shrink-0">
                <MapPin className="size-5" />
              </div>
              <div>
                <h4 className="font-semibold text-navy dark:text-foreground">London Headquarters</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Dynamics Zentrum Ltd.<br />
                  100 Bishopsgate, London EC2N 4AG<br />
                  United Kingdom
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-black/5 bg-card p-6 dark:border-white/10 dark:bg-card">
            <div className="flex items-start gap-4">
              <div className="grid size-11 place-items-center rounded-2xl bg-purple/10 text-purple shrink-0">
                <Mail className="size-5" />
              </div>
              <div>
                <h4 className="font-semibold text-navy dark:text-foreground">Email Enquiries</h4>
                <p className="mt-1 text-xs text-muted-foreground">
                  General: info@dynamicszentrum.co.uk<br />
                  Sales: sales@dynamicszentrum.co.uk
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-black/5 bg-card p-6 dark:border-white/10 dark:bg-card">
            <div className="flex items-start gap-4">
              <div className="grid size-11 place-items-center rounded-2xl bg-emerald-500/10 text-emerald-500 shrink-0">
                <Phone className="size-5" />
              </div>
              <div>
                <h4 className="font-semibold text-navy dark:text-foreground">Direct Telephone</h4>
                <p className="mt-1 text-xs text-muted-foreground">
                  Main: +44 (0) 20 7946 0912<br />
                  24/7 SLA Hotline (Clients Only)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form (7 cols) */}
        <div className="lg:col-span-7 rounded-3xl border border-black/5 bg-card p-8 md:p-10 shadow-sm dark:border-white/10 dark:bg-card">
          {sent ? (
            <div className="py-12 text-center">
              <div className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-500/10 text-emerald-500 mb-6">
                <CheckCircle2 className="size-10" />
              </div>
              <h3 className="text-2xl font-semibold text-navy dark:text-foreground">
                Message Transmitted Successfully
              </h3>
              <p className="mt-3 text-sm text-muted-foreground max-w-sm mx-auto">
                Thank you. A specialist from our commercial team will be in touch within 2 business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Your Name *
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full rounded-xl border border-black/10 bg-background px-4 py-3 text-sm text-navy dark:text-foreground dark:border-white/15 outline-none focus:border-brand"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Work Email *
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full rounded-xl border border-black/10 bg-background px-4 py-3 text-sm text-navy dark:text-foreground dark:border-white/15 outline-none focus:border-brand"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="e.g. Enterprise Migration Architecture Enquiry"
                  className="w-full rounded-xl border border-black/10 bg-background px-4 py-3 text-sm text-navy dark:text-foreground dark:border-white/15 outline-none focus:border-brand"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Message Details *
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="How can our Dynamics 365 practice assist you today?"
                  className="w-full rounded-xl border border-black/10 bg-background px-4 py-3 text-sm text-navy dark:text-foreground dark:border-white/15 outline-none focus:border-brand"
                />
              </div>

              <button
                type="submit"
                className="btn-shine w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand py-4 text-base font-semibold text-white shadow-xl shadow-brand/25 transition-all hover:scale-[1.01]"
              >
                <span>Send Message to Team</span>
                <ArrowRight className="size-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
