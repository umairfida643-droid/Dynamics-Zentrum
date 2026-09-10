import React, { useEffect, useRef, useState } from 'react';
import { COMPANY_METRICS } from '../../data/siteData';

interface CounterProps {
  target: number;
  suffix: string;
  label: string;
  delay?: number;
}

const SingleCounter: React.FC<CounterProps> = ({ target, suffix, label, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    const startTime = performance.now() + delay;
    let animId: number;

    const animate = (now: number) => {
      const progress = Math.max(0, Math.min(1, (now - startTime) / 1600));
      // Cubic easing
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
    <div ref={ref} className="flex flex-col gap-1 animate-fade-up">
      <span className="text-3xl md:text-5xl font-semibold tracking-tight bg-gradient-to-r from-brand to-purple bg-clip-text text-transparent tabular-nums">
        {count}{suffix}
      </span>
      <span className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </span>
      {/* Animated underline */}
      <div className="mt-2 h-0.5 w-12 overflow-hidden rounded-full bg-muted">
        <div 
          className="h-full rounded-full bg-gradient-to-r from-brand to-purple transition-all duration-1000"
          style={{ width: hasStarted ? '100%' : '0%' }}
        />
      </div>
    </div>
  );
};

export const StatCounters: React.FC = () => {
  return (
    <div className="border-y border-black/5 bg-card/40 py-10 dark:border-white/5 dark:bg-card/20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {COMPANY_METRICS.map((metric, idx) => (
            <SingleCounter
              key={metric.label}
              target={metric.target}
              suffix={metric.suffix}
              label={metric.label}
              delay={idx * 150}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
