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
          Connect with our Microsoft Dynamics 365 practice leads across our UK, US, and Pakistan offices to discuss project scoping, migrations, enterprise licensing, or technical audits.
        </p>
      </div>

      {/* 3 Physical Global Locations: Pakistan, UK, USA */}
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {/* United Kingdom Office */}
        <div className="rounded-3xl border border-black/5 bg-card p-6 shadow-sm dark:border-white/10 dark:bg-card flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <div className="grid size-11 place-items-center rounded-2xl bg-brand/10 text-brand">
                <MapPin className="size-5" />
              </div>
              <span className="rounded-full bg-brand/5 px-2.5 py-1 text-[10px] font-semibold text-brand ring-1 ring-brand/15">
                European HQ
              </span>
            </div>
            <h3 className="mt-4 font-bold text-lg text-navy dark:text-foreground">United Kingdom Office</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Suite 1835, 124 City Road<br />
              London, EC1V 2NX, United Kingdom
            </p>
          </div>
          <div className="mt-6 space-y-1.5 pt-3 border-t border-black/5 dark:border-white/10 text-xs">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="size-3.5 text-brand shrink-0" />
              <a href="tel:+447988586885" className="hover:text-brand font-semibold text-navy dark:text-foreground">+44 7988 586885</a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="size-3.5 text-purple shrink-0" />
              <a href="mailto:info@dynamicszentrum.com" className="hover:text-brand font-medium">info@dynamicszentrum.com</a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="size-3.5 text-sky shrink-0" />
              <span>Mon – Fri: 09:00 – 18:00 GMT</span>
            </div>
          </div>
        </div>

        {/* United States Office */}
        <div className="rounded-3xl border border-black/5 bg-card p-6 shadow-sm dark:border-white/10 dark:bg-card flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <div className="grid size-11 place-items-center rounded-2xl bg-purple/10 text-purple">
                <MapPin className="size-5" />
              </div>
              <span className="rounded-full bg-brand/5 px-2.5 py-1 text-[10px] font-semibold text-brand ring-1 ring-brand/15">
                North America HQ
              </span>
            </div>
            <h3 className="mt-4 font-bold text-lg text-navy dark:text-foreground">United States Office</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              1910 Thomes Ave.<br />
              Cheyenne, WY 82001-3527, United States
            </p>
          </div>
          <div className="mt-6 space-y-1.5 pt-3 border-t border-black/5 dark:border-white/10 text-xs">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="size-3.5 text-brand shrink-0" />
              <a href="tel:+13074272797" className="hover:text-brand font-semibold text-navy dark:text-foreground">+1 307 427 2797</a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="size-3.5 text-purple shrink-0" />
              <a href="mailto:info@dynamicszentrum.com" className="hover:text-brand font-medium">info@dynamicszentrum.com</a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="size-3.5 text-sky shrink-0" />
              <span>Mon – Fri: 09:00 – 17:00 MST</span>
            </div>
          </div>
        </div>

        {/* Pakistan Office */}
        <div className="rounded-3xl border border-black/5 bg-card p-6 shadow-sm dark:border-white/10 dark:bg-card flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <div className="grid size-11 place-items-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <MapPin className="size-5" />
              </div>
              <span className="rounded-full bg-brand/5 px-2.5 py-1 text-[10px] font-semibold text-brand ring-1 ring-brand/15">
                Delivery &amp; Engineering Hub
              </span>
            </div>
            <h3 className="mt-4 font-bold text-lg text-navy dark:text-foreground">Pakistan Office</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              2nd Floor, Emirate Tower, M-13<br />
              F-7 Markaz, Islamabad, Pakistan
            </p>
          </div>
          <div className="mt-6 space-y-1.5 pt-3 border-t border-black/5 dark:border-white/10 text-xs">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="size-3.5 text-brand shrink-0" />
              <a href="tel:+923075104500" className="hover:text-brand font-semibold text-navy dark:text-foreground">+92 307 510 4500</a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="size-3.5 text-purple shrink-0" />
              <a href="mailto:info@dynamicszentrum.com" className="hover:text-brand font-medium">info@dynamicszentrum.com</a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="size-3.5 text-sky shrink-0" />
              <span>Mon – Fri: 09:00 – 18:00 PKT</span>
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
                <span><strong>Senior Solution Architects:</strong> Speak directly with certified D365 Solution Architects, not junior reps.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="size-4 text-brand shrink-0 mt-0.5" />
                <span><strong>Guaranteed 2-Hour Response:</strong> Dedicated commercial desk ensures prompt handling of your inquiry.</span>
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
              Emergency Hotline: +44 7988 586885 (24/7 SLA Hotline)
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
                Thank you for reaching out. A Senior Dynamics 365 Practice Director will contact you within 2 business hours.
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
                    placeholder="sarah@company.com"
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
                    placeholder="+44 7988 586885"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Preferred Office / Region
                  </label>
                  <select
                    className="w-full rounded-xl border border-black/10 bg-background px-4 py-3 text-sm text-navy dark:text-foreground dark:border-white/15 outline-none focus:border-brand"
                  >
                    <option>United Kingdom Office (London)</option>
                    <option>United States Office (Cheyenne, WY)</option>
                    <option>Pakistan Office (Islamabad)</option>
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
                <span>Send Inquiry to Specialists</span>
                <ArrowRight className="size-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground">
                <ShieldCheck className="size-3.5 text-emerald-500" />
                <span>Your information is strictly protected under enterprise confidentiality &amp; GDPR.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
