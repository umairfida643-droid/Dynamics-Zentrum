import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { SERVICES_DATA, SOLUTIONS_DATA, INDUSTRIES_DATA } from '../../data/siteData';
import { MicrosoftPartnerLogo } from '../common/MicrosoftPartnerLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-black/5 bg-gradient-to-b from-muted/40 to-surface pt-16 pb-8 dark:border-white/5 dark:from-navy-card/40 dark:to-navy-dark overflow-hidden">
      {/* Top neon glow line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-6">
          {/* Col 1 & 2: Branding & Accreditations */}
          <div className="col-span-2">
            <Link to="/" aria-label="Dynamics Zentrum home">
              <img 
                src="/assets/dz-logo.png" 
                alt="Dynamics Zentrum" 
                className="h-16 w-auto object-contain block dark:hidden"
              />
              <img 
                src="/assets/dz-logo-dark.png" 
                alt="Dynamics Zentrum" 
                className="h-16 w-auto object-contain hidden dark:block"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              The UK's premier independent Microsoft Dynamics 365 consulting firm. Delivering complex enterprise transformations across EMEA since 2010.
            </p>

            <div className="mt-4 space-y-2 text-xs text-muted-foreground">
              <a 
                href="mailto:info@dynamicszentrum.com" 
                className="flex items-center gap-2 hover:text-brand transition-colors"
              >
                <Mail className="size-3.5 text-brand shrink-0" />
                <span>info@dynamicszentrum.com</span>
              </a>
              <a 
                href="tel:+447988586885" 
                className="flex items-center gap-2 hover:text-brand transition-colors"
              >
                <Phone className="size-3.5 text-brand shrink-0" />
                <span>+44 7988 586885</span>
              </a>
            </div>

            {/* Social Icons with SVG */}
            <div className="mt-6 flex gap-3">
              {[
                {
                  label: 'LinkedIn',
                  href: 'https://linkedin.com',
                  svg: (
                    <svg className="size-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  )
                },
                {
                  label: 'Twitter / X',
                  href: 'https://twitter.com',
                  svg: (
                    <svg className="size-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  )
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com',
                  svg: (
                    <svg className="size-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                    </svg>
                  )
                },
                {
                  label: 'YouTube',
                  href: 'https://youtube.com',
                  svg: (
                    <svg className="size-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  )
                }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="grid size-9 place-items-center rounded-full border border-black/5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-brand hover:text-brand dark:border-white/10 dark:hover:border-brand"
                >
                  {item.svg}
                </a>
              ))}
            </div>

            {/* Microsoft Partner Badges */}
            <div className="mt-8">
              <div className="mb-3">
                <MicrosoftPartnerLogo className="h-8 w-auto hover:opacity-90 transition-opacity" />
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  'Solutions Partner',
                  'Business Applications',
                  'Modern Work',
                  'Data & AI'
                ].map((badge) => (
                  <span
                    key={badge}
                    className="rounded-md border border-brand/20 bg-brand/5 px-2.5 py-1 text-[11px] font-semibold text-brand dark:bg-brand/10"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-navy dark:text-foreground">
              Services
            </h4>
            <ul className="mt-5 space-y-3">
              {SERVICES_DATA.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-sm text-muted-foreground hover:text-brand transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Solutions */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-navy dark:text-foreground">
              Solutions
            </h4>
            <ul className="mt-5 space-y-3">
              {SOLUTIONS_DATA.slice(0, 8).map((sol) => (
                <li key={sol.slug}>
                  <Link
                    to={`/solutions/${sol.slug}`}
                    className="text-sm text-muted-foreground hover:text-brand transition-colors"
                  >
                    {sol.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Industries */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-navy dark:text-foreground">
              Industries
            </h4>
            <ul className="mt-5 space-y-3">
              {INDUSTRIES_DATA.slice(0, 8).map((ind) => (
                <li key={ind.slug}>
                  <Link
                    to={`/industries/${ind.slug}`}
                    className="text-sm text-muted-foreground hover:text-brand transition-colors"
                  >
                    {ind.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 6: Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-navy dark:text-foreground">
              Company
            </h4>
            <ul className="mt-5 space-y-3">
              {[
                { label: 'About Us', to: '/about' },
                { label: 'All Services', to: '/services' },
                { label: 'All Solutions', to: '/solutions' },
                { label: 'All Industries', to: '/industries' },
                { label: 'Book Consultation', to: '/book-consultation' },
                { label: 'Contact Us', to: '/contact' }
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-brand transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Giant Watermark SVG Typography */}
        <div className="mt-16 w-full overflow-hidden select-none">
          <svg
            aria-hidden="true"
            viewBox="0 0 800 170"
            preserveAspectRatio="xMidYMid meet"
            className="block w-full"
          >
            <defs>
              <linearGradient id="dz-fade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.30" />
                <stop offset="60%" stopColor="var(--brand)" stopOpacity="0.10" />
                <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <text
              x="400"
              y="140"
              textAnchor="middle"
              textLength="760"
              lengthAdjust="spacingAndGlyphs"
              fontSize="180"
              fontWeight="800"
              fill="url(#dz-fade)"
              className="font-display"
            >
              DYNAMICS
            </text>
          </svg>
        </div>

        {/* Sub-footer Legal Bar */}
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-black/5 pt-8 text-xs text-muted-foreground md:flex-row md:items-center dark:border-white/10">
          <p>© {new Date().getFullYear()} Dynamics Zentrum Ltd. Registered in England & Wales.</p>
          <div className="flex flex-wrap gap-6">
            <Link to="/privacy" className="hover:text-brand transition-colors">Privacy</Link>
            <Link to="/cookie-policy" className="hover:text-brand transition-colors">Cookies</Link>
            <Link to="/terms" className="hover:text-brand transition-colors">Terms</Link>
            <Link to="/contact" className="hover:text-brand transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
