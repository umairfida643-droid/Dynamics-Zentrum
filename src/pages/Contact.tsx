import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight, Clock, ShieldCheck } from 'lucide-react';

export const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
          Get in Touch
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-navy dark:text-foreground">
          Contact Dynamics Zentrum
        </h1>
        <p className="mt-3 text-base md:text-lg text-muted-foreground leading-relaxed">
          Connect with our UK Microsoft Dynamics 365 practice leads to discuss project scoping, migrations, enterprise licensing, or technical audits.
        </p>
      </div>

      {/* 3 Physical UK Locations */}
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-black/5 bg-card p-6 shadow-sm dark:border-white/10 dark:bg-card">
          <div className="flex items-center justify-between">
            <div className="grid size-11 place-items-center rounded-2xl bg-brand/10 text-brand">
              <MapPin className="size-5" />
            </div>
            <span className="rounded-full bg-brand/5 px-2.5 py-1 text-[10px] font-semibold text-brand ring-1 ring-brand/15">
              Headquarters
            </span>
          </div>
          <h3 className="mt-4 font-bold text-lg text-navy dark:text-foreground">London Office</h3>
          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
            120 Moorgate, City of London<br />
            EC2M 6UR, United Kingdom
          </p>
          <div className="mt-4 space-y-1.5 pt-3 border-t border-black/5 dark:border-white/10 text-xs">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="size-3.5 text-brand shrink-0" />
              <a href="tel:+442079460920" className="hover:text-brand font-medium">+44 (0) 20 7946 0920</a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="size-3.5 text-purple shrink-0" />
              <a href="mailto:london@dynamicszentrum.co.uk" className="hover:text-brand font-medium">london@dynamicszentrum.co.uk</a>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-black/5 bg-card p-6 shadow-sm dark:border-white/10 dark:bg-card">
          <div className="flex items-center justify-between">
            <div className="grid size-11 place-items-center rounded-2xl bg-purple/10 text-purple">
              <MapPin className="size-5" />
            </div>
            <span className="rounded-full bg-brand/5 px-2.5 py-1 text-[10px] font-semibold text-brand ring-1 ring-brand/15">
              North West
            </span>
          </div>
          <h3 className="mt-4 font-bold text-lg text-navy dark:text-foreground">Manchester Office</h3>
          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
            International House, 61 Mosley Street<br />
            M2 3HZ, United Kingdom
          </p>
          <div className="mt-4 space-y-1.5 pt-3 border-t border-black/5 dark:border-white/10 text-xs">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="size-3.5 text-brand shrink-0" />
              <a href="tel:+441618329901" className="hover:text-brand font-medium">+44 (0) 161 832 9901</a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="size-3.5 text-purple shrink-0" />
              <a href="mailto:manchester@dynamicszentrum.co.uk" className="hover:text-brand font-medium">manchester@dynamicszentrum.co.uk</a>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-black/5 bg-card p-6 shadow-sm dark:border-white/10 dark:bg-card">
          <div className="flex items-center justify-between">
            <div className="grid size-11 place-items-center rounded-2xl bg-sky/20 text-sky">
              <MapPin className="size-5" />
            </div>
            <span className="rounded-full bg-brand/5 px-2.5 py-1 text-[10px] font-semibold text-brand ring-1 ring-brand/15">
              Midlands
            </span>
          </div>
          <h3 className="mt-4 font-bold text-lg text-navy dark:text-foreground">Birmingham Office</h3>
          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
            Izabella House, 24-26 Regents Place, City Centre<br />
            B1 3NJ, United Kingdom
          </p>
          <div className="mt-4 space-y-1.5 pt-3 border-t border-black/5 dark:border-white/10 text-xs">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="size-3.5 text-brand shrink-0" />
              <a href="tel:+441216438812" className="hover:text-brand font-medium">+44 (0) 121 643 8812</a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="size-3.5 text-purple shrink-0" />
              <a href="mailto:birmingham@dynamicszentrum.co.uk" className="hover:text-brand font-medium">birmingham@dynamicszentrum.co.uk</a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form & Trust Highlights */}
      <div className="mt-14 grid gap-12 lg:grid-cols-12">
        {/* Left column: Trust proof */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="rounded-3xl border border-black/5 bg-card p-6 shadow-sm dark:border-white/10 dark:bg-card">
            <h3 className="font-bold text-lg text-navy dark:text-foreground">
              Why Consult With Dynamics Zentrum?
            </h3>
            <ul className="mt-4 space-y-3 text-xs text-muted-foreground leading-relaxed">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="size-4 text-brand shrink-0 mt-0.5" />
                <span><strong>Zero Obligation:</strong> Actionable architecture review and high-level scoping at no cost.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="size-4 text-brand shrink-0 mt-0.5" />
                <span><strong>UK-Based Architects:</strong> Speak directly with senior D365 Solution Architects, not junior account reps.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="size-4 text-brand shrink-0 mt-0.5" />
                <span><strong>Fast 2-Hour Response:</strong> Dedicated commercial desk ensures prompt handling of your inquiry.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="size-4 text-brand shrink-0 mt-0.5" />
                <span><strong>Strict NDA &amp; Security:</strong> ISO 27001 certified protocols protect your data from day one.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl bg-navy-card p-6 text-white">
            <div className="flex items-center gap-3">
              <Clock className="size-5 text-brand" />
              <span className="text-xs font-semibold uppercase tracking-wider text-white/80">Support SLA</span>
            </div>
            <h4 className="mt-3 text-lg font-bold">Existing Client Support Desk</h4>
            <p className="mt-1 text-xs text-white/70">
              For contracted 24/7 SLA clients requiring emergency incident management:
            </p>
            <div className="mt-3 text-sm font-semibold text-brand">
              Emergency Hotline: +44 (0) 20 7946 0999 (PIN Required)
            </div>
          </div>
        </div>

        {/* Right column: Form */}
        <div className="lg:col-span-7 rounded-3xl border border-black/5 bg-card p-8 md:p-10 shadow-sm dark:border-white/10 dark:bg-card">
          {sent ? (
            <div className="py-12 text-center">
              <div className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-500/10 text-emerald-500 mb-6">
                <CheckCircle2 className="size-10" />
              </div>
              <h3 className="text-2xl font-semibold text-navy dark:text-foreground">
                Message Received
              </h3>
              <p className="mt-3 text-sm text-muted-foreground max-w-sm mx-auto">
                Thank you for reaching out. A Senior Dynamics 365 Practice Director from our UK office will contact you within 2 business hours.
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
                    placeholder="e.g. Sarah Jenkins"
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
                    placeholder="sarah@company.co.uk"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-xl border border-black/10 bg-background px-4 py-3 text-sm text-navy dark:text-foreground dark:border-white/15 outline-none focus:border-brand"
                    placeholder="+44 7700 900077"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Nearest UK Hub
                  </label>
                  <select
                    className="w-full rounded-xl border border-black/10 bg-background px-4 py-3 text-sm text-navy dark:text-foreground dark:border-white/15 outline-none focus:border-brand"
                  >
                    <option>London (City / South)</option>
                    <option>Manchester (North West)</option>
                    <option>Birmingham (Midlands)</option>
                    <option>Remote / Virtual Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Area of Interest
                </label>
                <select
                  className="w-full rounded-xl border border-black/10 bg-background px-4 py-3 text-sm text-navy dark:text-foreground dark:border-white/15 outline-none focus:border-brand"
                >
                  <option>Dynamics 365 Business Central (ERP)</option>
                  <option>Dynamics 365 Finance &amp; Operations</option>
                  <option>Dynamics 365 Sales / Customer Service (CRM)</option>
                  <option>Legacy NAV / AX Upgrade to Cloud</option>
                  <option>Power BI &amp; Microsoft Fabric Analytics</option>
                  <option>Ongoing SLA Managed Support</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Project Scope or Questions
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-xl border border-black/10 bg-background px-4 py-3 text-sm text-navy dark:text-foreground dark:border-white/15 outline-none focus:border-brand resize-none"
                  placeholder="Tell us about your timeline, user count, current systems, or specific challenges..."
                />
              </div>

              <button
                type="submit"
                className="btn-shine w-full rounded-xl bg-brand py-3.5 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/25 ring-1 ring-brand hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
              >
                <span>Send Inquiry to UK Specialists</span>
                <ArrowRight className="size-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground">
                <ShieldCheck className="size-3.5 text-emerald-500" />
                <span>Your information is strictly protected under UK Data Protection &amp; GDPR.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
