import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const BookConsultation: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    module: 'Business Central',
    timeline: 'Within 3 months',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 px-6 max-w-4xl mx-auto">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
          Discovery Session
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-navy dark:text-foreground">
          Book a 30-Minute Architecture Discovery Call
        </h1>
        <p className="mt-3 text-base text-muted-foreground">
          Direct consultation with a Principal Microsoft Dynamics 365 Architect. No sales pressure, practical transformation advice.
        </p>
      </div>

      <div className="mt-12 rounded-3xl border border-black/5 bg-card p-8 md:p-12 shadow-xl shadow-navy/5 dark:border-white/10 dark:bg-card">
        {submitted ? (
          <div className="py-12 text-center">
            <div className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-500/10 text-emerald-500 mb-6">
              <CheckCircle2 className="size-10" />
            </div>
            <h3 className="text-2xl font-semibold text-navy dark:text-foreground">
              Discovery Call Confirmed!
            </h3>
            <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto">
              Thank you, {formData.name}. Our enterprise architecture lead has received your details and will send a calendar invitation to {formData.email}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-black/10 bg-background px-4 py-3 text-sm text-navy dark:text-foreground dark:border-white/15 outline-none focus:border-brand"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Work Email *
                </label>
                <input
                  required
                  type="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-black/10 bg-background px-4 py-3 text-sm text-navy dark:text-foreground dark:border-white/15 outline-none focus:border-brand"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Company / Organisation *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Apex Global Logistics"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full rounded-xl border border-black/10 bg-background px-4 py-3 text-sm text-navy dark:text-foreground dark:border-white/15 outline-none focus:border-brand"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Primary Dynamics Solution of Interest
                </label>
                <select
                  value={formData.module}
                  onChange={(e) => setFormData({ ...formData, module: e.target.value })}
                  className="w-full rounded-xl border border-black/10 bg-background px-4 py-3 text-sm text-navy dark:text-foreground dark:border-white/15 outline-none focus:border-brand"
                >
                  <option>Dynamics 365 Business Central</option>
                  <option>Dynamics 365 Finance</option>
                  <option>Dynamics 365 Supply Chain</option>
                  <option>Dynamics 365 Sales / CRM</option>
                  <option>Power Platform & Power BI</option>
                  <option>Copilot & Azure AI</option>
                  <option>Full ERP/CRM Migration</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Project Scope / Key Challenges
              </label>
              <textarea
                rows={4}
                placeholder="Briefly describe your current ERP/CRM landscape and transformation objectives..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full rounded-xl border border-black/10 bg-background px-4 py-3 text-sm text-navy dark:text-foreground dark:border-white/15 outline-none focus:border-brand"
              />
            </div>

            <button
              type="submit"
              className="btn-shine w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand py-4 text-base font-semibold text-white shadow-xl shadow-brand/25 transition-all hover:scale-[1.01]"
            >
              <span>Confirm & Book Discovery Call</span>
              <ArrowRight className="size-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
