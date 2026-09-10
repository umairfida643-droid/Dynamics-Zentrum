import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin, Calendar, Clock, ShieldCheck } from 'lucide-react';

interface UKOffice {
  city: string;
  badge: string;
  address: string;
  postalCode: string;
  phone: string;
  email: string;
  hours: string;
}

const UK_OFFICES: UKOffice[] = [
  {
    city: 'London Office (Headquarters)',
    badge: 'Central London',
    address: '120 Moorgate, City of London',
    postalCode: 'EC2M 6UR',
    phone: '+44 (0) 20 7946 0920',
    email: 'london@dynamicszentrum.co.uk',
    hours: 'Mon – Fri: 08:30 – 18:00'
  },
  {
    city: 'Manchester Regional Office',
    badge: 'North West Hub',
    address: 'International House, 61 Mosley Street',
    postalCode: 'M2 3HZ',
    phone: '+44 (0) 161 832 9901',
    email: 'manchester@dynamicszentrum.co.uk',
    hours: 'Mon – Fri: 08:30 – 17:30'
  },
  {
    city: 'Birmingham Regional Office',
    badge: 'Midlands Hub',
    address: 'Izabella House, 24-26 Regents Place, City Centre',
    postalCode: 'B1 3NJ',
    phone: '+44 (0) 121 643 8812',
    email: 'birmingham@dynamicszentrum.co.uk',
    hours: 'Mon – Fri: 08:30 – 17:30'
  }
];

export const CtaBanner: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* SECTION 9: Consultation Banner matching Dynamics Square UK Section 9 */}
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
              href="tel:+442079460920"
              className="btn-shine inline-flex items-center gap-2 rounded-full bg-background px-7 py-4 text-base font-semibold text-navy dark:text-foreground ring-1 ring-black/10 dark:ring-white/10 hover:bg-muted transition-all"
            >
              <Phone className="size-4 text-brand" />
              <span>Call Us: +44 (0) 20 7946 0920</span>
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

      {/* SECTION 10: Where We Operate matching Dynamics Square UK Section 10 */}
      <section className="relative px-6 py-20 bg-muted/20 dark:bg-navy-card/20 border-b border-black/5 dark:border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-black/5 dark:border-white/5">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
                Our Physical Presence
              </span>
              <h3 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-navy dark:text-foreground">
                Where we operate
              </h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-xl">
                Strategically located across the United Kingdom with certified consultants available on-site.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-black/10 bg-card px-6 py-2.5 text-xs font-semibold text-navy hover:bg-muted dark:border-white/10 dark:text-foreground transition-all"
            >
              <span>Contact Regional Hub</span>
              <ArrowRight className="size-3.5 text-brand" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {UK_OFFICES.map((office) => (
              <div
                key={office.city}
                className="card-3d rounded-3xl border border-black/5 bg-card p-6 shadow-sm hover:border-brand/40 hover:shadow-xl dark:border-white/10 dark:bg-card transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="grid size-11 place-items-center rounded-2xl bg-brand/10 text-brand">
                    <MapPin className="size-5" />
                  </div>
                  <span className="rounded-full bg-brand/5 px-2.5 py-1 text-[10px] font-semibold text-brand ring-1 ring-brand/15">
                    {office.badge}
                  </span>
                </div>

                <h4 className="mt-4 text-base font-bold text-navy dark:text-foreground">
                  {office.city}
                </h4>

                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {office.address}<br />
                  {office.postalCode}, United Kingdom
                </p>

                <div className="mt-5 space-y-2 pt-4 border-t border-black/5 dark:border-white/10 text-xs">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="size-3.5 text-brand shrink-0" />
                    <a href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-brand font-medium">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="size-3.5 text-purple shrink-0" />
                    <a href={`mailto:${office.email}`} className="hover:text-brand font-medium">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="size-3.5 text-sky shrink-0" />
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
