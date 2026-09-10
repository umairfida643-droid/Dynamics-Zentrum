import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Award, Users, Calendar, Layers } from 'lucide-react';

interface MetricItem {
  target: number;
  suffix: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const PARTNER_METRICS: MetricItem[] = [
  {
    target: 500,
    suffix: '+',
    title: 'Successful Implementations',
    description: 'Innovative implementations delivered with strategy, precision, and success across the UK and EMEA.',
    icon: <Award className="size-6 text-brand" />
  },
  {
    target: 150,
    suffix: '+',
    title: 'Certified Consultants',
    description: 'Skilled professionals with deep, industry-specific expertise driving continuous digital innovation.',
    icon: <Users className="size-6 text-purple" />
  },
  {
    target: 14,
    suffix: '+',
    title: 'Years of Mastery',
    description: 'Years of industry mastery, delivering excellence and stability in every Microsoft Dynamics solution.',
    icon: <Calendar className="size-6 text-brand" />
  },
  {
    target: 25,
    suffix: '+',
    title: 'Industries Transformed',
    description: 'Sectors transformed with cutting-edge ERP, CRM, and cloud business technologies.',
    icon: <Layers className="size-6 text-sky" />
  }
];

interface CounterProps {
  target: number;
  suffix: string;
  delay?: number;
}

const AnimatedCounter: React.FC<CounterProps> = ({ target, suffix, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasStarted(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    const startTime = performance.now() + delay;
    let animId: number;

    const animate = (now: number) => {
      const progress = Math.max(0, Math.min(1, (now - startTime) / 1600));
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) {
        animId = requestAnimationFrame(animate);
      }
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [hasStarted, target, delay]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

export const StatCounters: React.FC = () => {
  return (
    <section className="relative px-6 py-20 bg-surface dark:bg-navy-dark border-b border-black/5 dark:border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Section Header mirroring Dynamics Square UK */}
        <div className="flex flex-col gap-4">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-brand/5 px-3.5 py-1.5 ring-1 ring-brand/20 dark:bg-brand/10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
              About Dynamics Zentrum
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-navy dark:text-foreground leading-tight">
                Dynamics Zentrum: Your Microsoft Solutions Partner
              </h2>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                As a Microsoft Dynamics 365 implementation partner, we have been consistently delivering impactful solutions, earning trust through innovation &amp; commitment and empowering businesses to achieve excellence, irrespective of the industry. Recognised as a trusted Microsoft Solutions Partner and expert Microsoft Dynamics ERP partner, our team drives successful digital transformations through industry-aligned expertise and strategic execution.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-black/10 bg-card px-6 py-3 text-sm font-semibold text-navy hover:bg-muted dark:border-white/10 dark:text-foreground transition-all shadow-sm"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="size-4 text-brand" />
            </Link>
          </div>
        </div>

        {/* 4 Metric Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PARTNER_METRICS.map((metric, idx) => (
            <div
              key={metric.title}
              className="card-3d group relative flex flex-col justify-between rounded-3xl border border-black/5 bg-card p-6 shadow-sm transition-all hover:border-brand/40 hover:shadow-xl dark:border-white/10 dark:bg-card"
            >
              <div>
                <div className="grid size-12 place-items-center rounded-2xl bg-muted/60 dark:bg-muted/20 group-hover:bg-brand/10 transition-colors">
                  {metric.icon}
                </div>

                <div className="mt-6 text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-brand via-brand to-purple bg-clip-text text-transparent">
                  <AnimatedCounter target={metric.target} suffix={metric.suffix} delay={idx * 150} />
                </div>

                <h3 className="mt-2 text-base font-semibold text-navy dark:text-foreground">
                  {metric.title}
                </h3>

                <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {metric.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 pt-4 border-t border-black/5 dark:border-white/10 text-xs font-semibold text-brand">
                <CheckCircle2 className="size-4" />
                <span>Verified UK Milestone</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
