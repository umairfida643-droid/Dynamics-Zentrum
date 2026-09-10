import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShoppingBag, 
  GraduationCap, 
  Factory, 
  PackageCheck, 
  Store, 
  Truck, 
  HeartPulse, 
  Landmark
} from 'lucide-react';
import { INDUSTRIES_DATA } from '../../data/siteData';

interface HighlightedIndustry {
  slug: string;
  name: string;
  headline: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
}

const HIGHLIGHTED_SECTORS: HighlightedIndustry[] = [
  {
    slug: 'ecommerce',
    name: 'E-Commerce & Digital Commerce',
    headline: 'Scale Your Online Stores Confidently',
    description: 'Delivering exceptional experiences to your buyers and sellers, all in one place. Real-time omnichannel catalog sync and automated order fulfillment.',
    icon: <ShoppingBag className="size-6 text-brand" />,
    tag: 'E-Commerce'
  },
  {
    slug: 'education',
    name: 'Education & Higher Academia',
    headline: 'Automate Your Education System with Dynamics 365',
    description: 'Manage staff, student & curriculum data with an AI-powered ERP & CRM solution designed for universities, colleges, and multi-academy trusts.',
    icon: <GraduationCap className="size-6 text-purple" />,
    tag: 'Education'
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing & Industry 4.0',
    headline: 'Connect, Collaborate & Overcome Disruptions',
    description: 'Modernise your shop floor and supply chain for better visibility, finite capacity planning, and shop-floor efficiency with IoT telemetry.',
    icon: <Factory className="size-6 text-sky" />,
    tag: 'Manufacturing'
  },
  {
    slug: 'distribution',
    name: 'Wholesale & Distribution Operations',
    headline: 'Streamline Your Distribution Operations at Scale',
    description: 'Empowering distributors with connected systems to manage supply, demand, batch tracing, and profitability in one single pane of glass.',
    icon: <PackageCheck className="size-6 text-emerald-500" />,
    tag: 'Distribution'
  },
  {
    slug: 'retail',
    name: 'Retail & Multi-Store Brands',
    headline: 'Deliver Unified Retail Experiences Across Channels',
    description: 'Helping retailers connect stores, POS checkouts, inventory hubs, and loyal customers to drive sustainable growth and retention seamlessly.',
    icon: <Store className="size-6 text-brand" />,
    tag: 'Retail'
  },
  {
    slug: 'logistics',
    name: 'Logistics & 3PL Operations',
    headline: 'Optimize Logistics Operations with Intelligent Automation',
    description: 'Enabling logistics businesses to improve route visibility, freight auditing, warehouse picking efficiency, and on-time delivery performance.',
    icon: <Truck className="size-6 text-purple" />,
    tag: 'Logistics'
  },
  {
    slug: 'healthcare',
    name: 'Healthcare & Life Sciences',
    headline: 'Secure Patient Workflows & Clinical Records',
    description: 'Comply with stringent NHS data standards, track regulated clinical batch inventory, and streamline patient scheduling.',
    icon: <HeartPulse className="size-6 text-sky" />,
    tag: 'Healthcare'
  },
  {
    slug: 'financial-services',
    name: 'Financial Services & Banking',
    headline: 'FCA-Compliant Enterprise Ledgers & Client Portals',
    description: 'Modernise wealth management, fund accounting, and lending operations under bank-grade encryption and audit logging.',
    icon: <Landmark className="size-6 text-emerald-500" />,
    tag: 'Finance'
  }
];

export const IndustriesGrid: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="px-6 py-20 bg-surface dark:bg-navy-dark border-b border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-7xl">
        {/* Header matching Dynamics Square UK */}
        <div className="flex flex-col gap-4">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-brand/5 px-3.5 py-1.5 ring-1 ring-brand/20 dark:bg-brand/10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
              Industry Focus
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-navy dark:text-foreground leading-tight">
                Your Industry? Our Expertise!
              </h2>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                Dynamics Zentrum brings decades of profound industry expertise that merges ongoing industry insights with Microsoft technology to help you capitalise on your biggest opportunities. As a trusted Microsoft Dynamics 365 implementation partner, we deliver solutions customised for your business growth. Whether you’re in retail, manufacturing, education, or healthcare, we’re the Microsoft Dynamics 365 implementation partner UK businesses trust to deliver measurable results.
              </p>
            </div>

            <Link
              to="/industries"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-black/10 bg-card px-6 py-3 text-sm font-semibold text-navy hover:bg-muted dark:border-white/10 dark:text-foreground transition-all shadow-sm"
            >
              <span>View All 16 Industries</span>
              <ArrowRight className="size-4 text-brand" />
            </Link>
          </div>
        </div>

        {/* Highlighted Sectors Grid matching Dynamics Square UK cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTED_SECTORS.map((sector) => (
            <Link
              key={sector.slug}
              to={`/industries/${sector.slug}`}
              className="card-3d group flex flex-col justify-between rounded-3xl border border-black/5 bg-card p-6 shadow-sm transition-all hover:border-brand/40 hover:shadow-xl dark:border-white/10 dark:bg-card"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="grid size-12 place-items-center rounded-2xl bg-muted/60 dark:bg-muted/20 group-hover:bg-brand/10 transition-colors">
                    {sector.icon}
                  </div>
                  <span className="rounded-full bg-brand/5 px-2.5 py-1 text-[10px] font-semibold text-brand ring-1 ring-brand/15">
                    {sector.tag}
                  </span>
                </div>

                <div className="mt-5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {sector.name}
                </div>

                <h3 className="mt-1 text-lg font-bold text-navy dark:text-foreground group-hover:text-brand transition-colors leading-snug">
                  {sector.headline}
                </h3>

                <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed">
                  {sector.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-black/5 pt-4 text-xs font-semibold text-brand dark:border-white/10">
                <span>Explore Sector</span>
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        {/* Toggle to expand all 16 industries right inline */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-card px-6 py-2.5 text-xs font-semibold text-navy hover:bg-muted dark:border-white/10 dark:text-foreground transition-all"
          >
            <span>{showAll ? 'Show Fewer Sectors' : 'Show All 16 UK Industry Accelerators'}</span>
          </button>
        </div>

        {showAll && (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 animate-in fade-in duration-300">
            {INDUSTRIES_DATA.map((ind) => (
              <Link
                key={ind.slug}
                to={`/industries/${ind.slug}`}
                className="rounded-2xl border border-black/5 bg-card/70 p-4 shadow-sm hover:border-brand/40 dark:border-white/10 dark:bg-card/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-brand">{ind.code}</span>
                  <ArrowRight className="size-3 text-muted-foreground" />
                </div>
                <div className="mt-1 text-sm font-semibold text-navy dark:text-foreground">{ind.title}</div>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{ind.summary}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
