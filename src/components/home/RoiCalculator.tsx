import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, TrendingUp, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export const RoiCalculator: React.FC = () => {
  const [users, setUsers] = useState(250);
  const [revenue, setRevenue] = useState(25); // In millions GBP
  const [hoursSaved, setHoursSaved] = useState(6);
  const [hourlyCost, setHourlyCost] = useState(35);

  // Exact formulas from source inspection
  const annualHoursSavedValue = users * hoursSaved * hourlyCost * 48;
  const revenueUplift = revenue * 1_000_000 * 0.04;
  const efficiencySaving = revenue * 1_000_000 * 0.03;
  const totalAnnualBenefit = annualHoursSavedValue + revenueUplift + efficiencySaving;
  const investment = 180_000 + users * 350;
  const roiPct = Math.round(((totalAnnualBenefit - investment) / investment) * 100);
  const paybackMonths = Math.max(1, Math.round((investment / totalAnnualBenefit) * 12));

  const formatGbp = (val: number) => {
    if (val >= 1_000_000) return `£${(val / 1_000_000).toFixed(2)}M`;
    if (val >= 1_000) return `£${Math.round(val / 1_000)}k`;
    return `£${Math.round(val)}`;
  };

  const productivityPct = Math.min(100, (annualHoursSavedValue / totalAnnualBenefit) * 100);
  const revenuePct = Math.min(100, (revenueUplift / totalAnnualBenefit) * 100);
  const efficiencyPct = Math.min(100, (efficiencySaving / totalAnnualBenefit) * 100);

  return (
    <section className="px-6 py-20 bg-muted/30 dark:bg-navy-card/20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
            Interactive Business Case
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-navy dark:text-foreground">
            See your Dynamics 365 return in seconds
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">
            An indicative model based on benchmarks from 500+ enterprise deployments. Adjust the inputs to match your organisation.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          {/* Sliders Input Panel (6 cols) */}
          <div className="lg:col-span-6 rounded-3xl border border-black/5 bg-card p-6 md:p-8 shadow-sm dark:border-white/10 dark:bg-card">
            <h3 className="font-semibold text-lg text-navy dark:text-foreground mb-6">
              Organisation Parameters
            </h3>

            <div className="space-y-6">
              {/* Users Slider */}
              <div>
                <div className="flex justify-between text-xs font-semibold mb-2">
                  <span className="uppercase tracking-wider text-muted-foreground">Users / Employees</span>
                  <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-brand tabular-nums">
                    {users} users
                  </span>
                </div>
                <input
                  type="range"
                  min="25"
                  max="2000"
                  step="25"
                  value={users}
                  onChange={(e) => setUsers(Number(e.target.value))}
                  className="h-2 w-full appearance-none rounded-full bg-muted outline-none cursor-pointer"
                />
              </div>

              {/* Revenue Slider */}
              <div>
                <div className="flex justify-between text-xs font-semibold mb-2">
                  <span className="uppercase tracking-wider text-muted-foreground">Annual Turnover</span>
                  <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-brand tabular-nums">
                    £{revenue}M
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="250"
                  step="5"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="h-2 w-full appearance-none rounded-full bg-muted outline-none cursor-pointer"
                />
              </div>

              {/* Hours Saved Slider */}
              <div>
                <div className="flex justify-between text-xs font-semibold mb-2">
                  <span className="uppercase tracking-wider text-muted-foreground">Hours Saved / User / Week</span>
                  <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-brand tabular-nums">
                    {hoursSaved} hrs
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="1"
                  value={hoursSaved}
                  onChange={(e) => setHoursSaved(Number(e.target.value))}
                  className="h-2 w-full appearance-none rounded-full bg-muted outline-none cursor-pointer"
                />
              </div>

              {/* Hourly Cost Slider */}
              <div>
                <div className="flex justify-between text-xs font-semibold mb-2">
                  <span className="uppercase tracking-wider text-muted-foreground">Loaded Hourly Rate</span>
                  <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-brand tabular-nums">
                    £{hourlyCost}/hr
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  step="5"
                  value={hourlyCost}
                  onChange={(e) => setHourlyCost(Number(e.target.value))}
                  className="h-2 w-full appearance-none rounded-full bg-muted outline-none cursor-pointer"
                />
              </div>
            </div>

            <p className="mt-8 text-xs text-muted-foreground leading-relaxed">
              Illustrative model derived from Forrester TEI benchmarks and our delivery history. Actual results depend on scope, adoption and change management.
            </p>
          </div>

          {/* Outputs Panel (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-3xl border border-white/10 bg-navy-card p-6 md:p-8 text-white shadow-xl">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-sky">
                  Projected Financial Impact
                </span>
                <span className="text-xs text-white/50">12-Month Model</span>
              </div>

              {/* Live Metric Cards */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white/70 uppercase">Net Annual Benefit</span>
                    <TrendingUp className="size-4 text-emerald-400" />
                  </div>
                  <div className="mt-3 text-3xl font-semibold text-emerald-400 tabular-nums">
                    {formatGbp(totalAnnualBenefit)}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white/70 uppercase">Projected ROI</span>
                    <Calculator className="size-4 text-brand" />
                  </div>
                  <div className="mt-3 text-3xl font-semibold text-brand tabular-nums">
                    +{roiPct}%
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white/70 uppercase">Payback Period</span>
                    <Clock className="size-4 text-sky" />
                  </div>
                  <div className="mt-3 text-2xl font-semibold text-white tabular-nums">
                    {paybackMonths} Months
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white/70 uppercase">3-Yr Value Creation</span>
                    <ShieldCheck className="size-4 text-purple" />
                  </div>
                  <div className="mt-3 text-2xl font-semibold text-white tabular-nums">
                    {formatGbp(totalAnnualBenefit * 3 - investment)}
                  </div>
                </div>
              </div>

              {/* Breakdown Progress Bars */}
              <div className="mt-6 space-y-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div>
                  <div className="flex justify-between text-xs text-white/80">
                    <span>Productivity Gain</span>
                    <span className="font-semibold tabular-nums">{formatGbp(annualHoursSavedValue)}</span>
                  </div>
                  <div className="mt-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-brand transition-all duration-500" style={{ width: `${productivityPct}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-white/80">
                    <span>Revenue Uplift (4%)</span>
                    <span className="font-semibold tabular-nums">{formatGbp(revenueUplift)}</span>
                  </div>
                  <div className="mt-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-sky transition-all duration-500" style={{ width: `${revenuePct}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-white/80">
                    <span>Efficiency / Working Capital (3%)</span>
                    <span className="font-semibold tabular-nums">{formatGbp(efficiencySaving)}</span>
                  </div>
                  <div className="mt-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-purple transition-all duration-500" style={{ width: `${efficiencyPct}%` }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-white/60">
                Ready to validate these assumptions with our architects?
              </span>
              <Link
                to="/book-consultation"
                className="btn-shine inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:scale-[1.02] shrink-0"
              >
                <span>Get a tailored business case</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
