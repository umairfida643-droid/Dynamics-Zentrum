import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Rocket, RefreshCw, LifeBuoy } from 'lucide-react';

interface ServiceCard {
  title: string;
  slug: string;
  description: string;
  icon: React.ReactNode;
}

const SERVICES_CARDS: ServiceCard[] = [
  {
    title: 'Consulting',
    slug: 'consulting',
    description: 'We study how your business runs today and show where Microsoft Dynamics 365 can add real value. Every feature is matched carefully with your goals so that the system supports you in the best way.',
    icon: <Compass className="size-6 text-brand" />
  },
  {
    title: 'Implementation',
    slug: 'implementation',
    description: 'From Dynamics 365 Business Central to Dynamics 365 Finance and other systems, we manage every part of setup. Our aim is to deliver a clean start that keeps daily work running without stress or stops.',
    icon: <Rocket className="size-6 text-purple" />
  },
  {
    title: 'Upgrade',
    slug: 'upgrade',
    description: 'Our team works quietly in the background, so your systems stay smooth and strong. This helps your people focus fully on growing the business without worrying about slowdowns.',
    icon: <RefreshCw className="size-6 text-sky" />
  },
  {
    title: 'Ongoing Support',
    slug: 'ongoing-support',
    description: 'Dynamics Zentrum stays beside you after the system goes live. Our experts keep things working at their best so you can stay focused on building success while feeling secure about your technology.',
    icon: <LifeBuoy className="size-6 text-emerald-500" />
  }
];

export const ServicesGrid: React.FC = () => {
  return (
    <section className="px-6 py-20 bg-muted/20 dark:bg-navy-card/20 border-b border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-7xl">
        {/* Centered Heading Block matching Dynamics Square UK */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-navy dark:text-foreground leading-tight">
            Our Services: Simple, Clear, and Focused
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            At Dynamics Zentrum, we bring far more than software setup. We help businesses reach full strength by guiding them with clear advice, smooth execution, and steady support. As a trusted Microsoft Business Solutions Partner, we make work simple by turning problems into chances for growth with consulting, careful delivery, and care that continues long after.
          </p>
        </div>

        {/* 4 Cards in a Row matching Dynamics Square UK card-667 */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES_CARDS.map((card) => (
            <div
              key={card.slug}
              className="card-3d group flex flex-col justify-between rounded-3xl border border-black/5 bg-card p-7 shadow-sm transition-all hover:border-brand/40 hover:shadow-xl dark:border-white/10 dark:bg-card"
            >
              <div>
                {/* Card Icon */}
                <div className="grid size-14 place-items-center rounded-2xl bg-muted/60 dark:bg-muted/20 group-hover:bg-brand/10 transition-colors">
                  {card.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-navy dark:text-foreground group-hover:text-brand transition-colors">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/10">
                <Link
                  to={`/services/${card.slug}`}
                  className="group/link inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:opacity-80 transition-opacity"
                >
                  <span>Learn more</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Services Link */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-card px-7 py-3 text-sm font-semibold text-navy hover:bg-muted dark:border-white/10 dark:text-foreground transition-all shadow-sm"
          >
            <span>Explore All 16 Lifecycle Services</span>
            <ArrowRight className="size-4 text-brand" />
          </Link>
        </div>
      </div>
    </section>
  );
};
