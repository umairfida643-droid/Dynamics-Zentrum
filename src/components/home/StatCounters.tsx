import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface MetricItem {
  target: number;
  suffix: string;
  description: string;
}

const PARTNER_METRICS: MetricItem[] = [
  {
    target: 500,
    suffix: '+',
    description: 'Innovative implementations delivered with strategy, precision, and success.'
  },
  {
    target: 150,
    suffix: '+',
    description: 'Skilled professionals with deep, industry-specific expertise driving innovation.'
  },
  {
    target: 14,
    suffix: '+',
    description: 'Years of industry mastery, delivering excellence in every solution.'
  },
  {
    target: 25,
    suffix: '+',
    description: 'Industries transformed with cutting-edge technology and innovation.'
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
        {/* TOP ROW: Two Columns (8 cols left, 4 cols right) matching Dynamics Square UK */}
        <div className="grid items-end gap-8 lg:grid-cols-12 pb-14 border-b border-black/5 dark:border-white/5">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-navy dark:text-foreground leading-tight">
              Dynamics Zentrum: Your Microsoft Solutions Partner
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              As a Microsoft Dynamics 365 implementation partner, we have been consistently delivering impactful solutions, earning trust through innovation &amp; commitment and empowering businesses to achieve excellence, irrespective of the industry. Recognised as a trusted Microsoft Solutions Partner and expert Microsoft Dynamics ERP partner, our team drives successful digital transformations through industry-aligned expertise and strategic execution.
            </p>
            <div className="mt-6">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-brand hover:opacity-80 transition-all"
              >
                <span>Learn more about us</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Partner Accreditation Box */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="rounded-3xl border border-brand/20 bg-brand/5 p-6 dark:bg-brand/10 w-full max-w-sm">
              <div className="flex items-center justify-between">
                <div>
                  <img 
                    src="/assets/microsoft-partner.png" 
                    alt="Microsoft Solutions Partner" 
                    className="h-10 w-auto object-contain block dark:hidden"
                  />
                  <img 
                    src="/assets/microsoft-partner-dark.png" 
                    alt="Microsoft Solutions Partner" 
                    className="h-10 w-auto object-contain hidden dark:block"
                  />
                </div>
                <span className="rounded-full bg-brand/10 px-2.5 py-1 text-[10px] font-bold text-brand ring-1 ring-brand/20">
                  Accredited
                </span>
              </div>
              <div className="mt-4 pt-3 border-t border-brand/15 flex items-center justify-between text-[11px] font-semibold text-navy dark:text-foreground">
                <span>Verified UK Solutions Partner</span>
                <span className="text-emerald-500 flex items-center gap-1">
                  <CheckCircle2 className="size-3.5" />
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: 4 Stats matching Dynamics Square UK accive-new-list */}
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {PARTNER_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="flex flex-col border-l-2 border-brand/30 pl-5 py-2 group hover:border-brand transition-colors"
            >
              <div className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-brand via-brand to-purple bg-clip-text text-transparent">
                <AnimatedCounter target={metric.target} suffix={metric.suffix} delay={idx * 150} />
              </div>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
