import React from 'react';
import { useLocation } from 'react-router-dom';

export const Legal: React.FC = () => {
  const location = useLocation();
  const title = location.pathname.includes('privacy')
    ? 'Privacy Policy'
    : location.pathname.includes('cookie')
    ? 'Cookie Policy'
    : 'Terms of Service';

  return (
    <div className="py-16 px-6 max-w-4xl mx-auto">
      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand block">
        Legal & Compliance
      </span>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy dark:text-foreground">
        {title}
      </h1>
      <p className="mt-2 text-xs text-muted-foreground">
        Last updated: September 2026 · Dynamics Zentrum Ltd (Company No. 07384912)
      </p>

      <div className="mt-10 space-y-6 text-sm text-muted-foreground leading-relaxed">
        <p>
          Dynamics Zentrum Ltd is committed to safeguarding your privacy and ensuring the highest standards of data security in compliance with the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018.
        </p>
        <h3 className="text-lg font-semibold text-navy dark:text-foreground pt-4">
          1. Information We Collect
        </h3>
        <p>
          We only process personal data necessary to provide enterprise consulting, schedule technical discovery calls, and respond to sales inquiries.
        </p>
        <h3 className="text-lg font-semibold text-navy dark:text-foreground pt-4">
          2. Security & Compliance
        </h3>
        <p>
          As an ISO 27001 certified Microsoft Solutions Partner, all client communications and technical audit logs are encrypted in transit and at rest using enterprise-grade cryptographic standards.
        </p>
      </div>
    </div>
  );
};
