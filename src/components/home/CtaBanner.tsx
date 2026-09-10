import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin, Calendar, Clock, ShieldCheck, Globe } from 'lucide-react';

interface GlobalOffice {
  country: string;
  badge: string;
  addressLine1: string;
  addressLine2: string;
  phone: string;
  email: string;
  hours: string;
}

const GLOBAL_OFFICES: GlobalOffice[] = [
  {
    country: 'United Kingdom Office',
    badge: 'European HQ',
    addressLine1: 'Suite 1835, 124 City Road',
    addressLine2: 'London, EC1V 2NX',
    phone: '+44 7988 586885',
    email: 'info@dynamicszentrum.com',
    hours: 'Mon – Fri: 09:00 – 18:00 GMT'
  },
  {
    country: 'United States Office',
    badge: 'North America HQ',
    addressLine1: '1910 Thomes Ave.',
    addressLine2: 'Cheyenne, WY 82001-3527',
    phone: '+1 307 427 2797',
    email: 'info@dynamicszentrum.com',
    hours: 'Mon – Fri: 09:00 – 17:00 MST'
  },
  {
    country: 'Pakistan Office',
    badge: 'Delivery & Engineering Hub',
    addressLine1: '2nd Floor, Emirate Tower, M-13',
    addressLine2: 'F-7 Markaz, Islamabad, Pakistan',
    phone: '+92 307 510 4500',
    email: 'info@dynamicszentrum.com',
    hours: 'Mon – Fri: 09:00 – 18:00 PKT'
  }
];

export const CtaBanner: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* SECTION 9: Consultation Banner */}
      <section className="relative px-6 py-20 bg-surface dark:bg-navy-dark border-b border-black/5 dark:border-white/5 overflow-hidden">
        {/* Background ambient lighting */}
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-64 bg-gradient-to-r from-brand/10 via-purple/10 to-sky/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-brand/5 px-3.5 py-1.5 ring-1 ring-brand/20 dark:bg-brand/10 mx-auto">
            <Calendar className="size-3.5 text-brand" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
              Get Started
            </span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-navy dark:text-foreground leading-tight">
            Let’s build the future of your business—together!
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            The right technology can change everything, and Dynamics Zentrum ensures your business gets the tools it needs to succeed. Take the first step towards smarter solutions now!
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/book-consultation"
              className="btn-shine group inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-semibold text-brand-foreground shadow-xl shadow-brand/25 ring-1 ring-brand hover:scale-[1.02] transition-all"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="tel:+447988586885"
              className="btn-shine inline-flex items-center gap-2 rounded-full bg-background px-7 py-4 text-base font-semibold text-navy dark:text-foreground ring-1 ring-black/10 dark:ring-white/10 hover:bg-muted transition-all"
            >
              <Phone className="size-4 text-brand" />
              <span>Call Us: +44 7988 586885</span>
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-emerald-500" />
              No Obligation Discovery
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-4 text-brand" />
              Guaranteed 2-Hour Response
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-purple" />
              Strict Confidentiality &amp; NDA
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 10: Where We Operate - Exact 3 Offices (Pakistan, UK, USA) */}
      <section className="relative px-6 py-20 bg-muted/20 dark:bg-navy-card/20 border-b border-black/5 dark:border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-black/5 dark:border-white/5">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand flex items-center gap-1.5">
                <Globe className="size-3.5" />
                Our Offices
              </span>
              <h3 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-navy dark:text-foreground">
                Where we operate
              </h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-xl">
                Strategically positioned across the United Kingdom, United States, and Pakistan to provide around-the-clock enterprise engineering and support.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-black/10 bg-card px-6 py-2.5 text-xs font-semibold text-navy hover:bg-muted dark:border-white/10 dark:text-foreground transition-all"
            >
              <span>Contact Global Desk</span>
              <ArrowRight className="size-3.5 text-brand" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {GLOBAL_OFFICES.map((office) => (
              <div
                key={office.country}
                className="card-3d rounded-3xl border border-black/5 bg-card p-7 shadow-sm hover:border-brand/40 hover:shadow-xl dark:border-white/10 dark:bg-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="grid size-12 place-items-center rounded-2xl bg-brand/10 text-brand">
                      <MapPin className="size-5" />
                    </div>
                    <span className="rounded-full bg-brand/5 px-3 py-1 text-[10px] font-bold text-brand ring-1 ring-brand/15">
                      {office.badge}
                    </span>
                  </div>

                  <h4 className="mt-5 text-lg font-bold text-navy dark:text-foreground">
                    {office.country}
                  </h4>

                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {office.addressLine1}<br />
                    {office.addressLine2}
                  </p>
                </div>

                <div className="mt-6 space-y-2.5 pt-4 border-t border-black/5 dark:border-white/10 text-xs">
                  <div className="flex items-center gap-2.5 text-muted-foreground">
                    <Phone className="size-4 text-brand shrink-0" />
                    <a 
                      href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`} 
                      className="hover:text-brand font-semibold text-navy dark:text-foreground"
                    >
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5 text-muted-foreground">
                    <Mail className="size-4 text-purple shrink-0" />
                    <a 
                      href={`mailto:${office.email}`} 
                      className="hover:text-brand font-medium"
                    >
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5 text-muted-foreground">
                    <Clock className="size-4 text-sky shrink-0" />
                    <span>{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
