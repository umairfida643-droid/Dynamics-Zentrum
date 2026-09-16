import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Search, 
  ArrowRight, 
  Phone, 
  Mail, 
  Database, 
  Briefcase, 
  Layers, 
  Cpu,
  Factory,
  Landmark,
  Stethoscope,
  ShoppingBag,
  HardHat,
  Building,
  Building2,
  GraduationCap,
  HeartHandshake,
  Compass,
  Rocket,
  RefreshCw,
  ArrowUpCircle,
  Headphones,
  Settings2,
  Store,
  Boxes,
  Coins,
  Truck,
  ShoppingCart,
  Target,
  Wrench,
  PieChart,
  BarChart3,
  Workflow,
  Cloud,
  Sparkles
} from 'lucide-react';
import { SERVICES_DATA, SOLUTIONS_DATA, INDUSTRIES_DATA } from '../../data/siteData';
import { MicrosoftPartnerLogo } from '../common/MicrosoftPartnerLogo';

const getServiceIcon = (slug: string) => {
  switch (slug) {
    case 'consulting':
      return <Compass className="size-4" />;
    case 'implementation':
      return <Rocket className="size-4" />;
    case 'migration':
      return <RefreshCw className="size-4" />;
    case 'upgrades':
      return <ArrowUpCircle className="size-4" />;
    case 'support':
      return <Headphones className="size-4" />;
    case 'managed-services':
      return <Settings2 className="size-4" />;
    default:
      return <Layers className="size-4" />;
  }
};

const getIndustryIcon = (slug: string) => {
  switch (slug) {
    case 'manufacturing':
      return <Factory className="size-4" />;
    case 'financial-services':
      return <Landmark className="size-4" />;
    case 'healthcare':
      return <Stethoscope className="size-4" />;
    case 'retail':
      return <ShoppingBag className="size-4" />;
    case 'construction':
      return <HardHat className="size-4" />;
    case 'real-estate':
      return <Building className="size-4" />;
    case 'education':
      return <GraduationCap className="size-4" />;
    case 'ngo':
      return <HeartHandshake className="size-4" />;
    default:
      return <Building2 className="size-4" />;
  }
};

const getSolutionIcon = (slug: string) => {
  switch (slug) {
    case 'business-central':
      return <Boxes className="size-4" />;
    case 'finance':
      return <Coins className="size-4" />;
    case 'supply-chain':
      return <Truck className="size-4" />;
    case 'commerce':
      return <ShoppingCart className="size-4" />;
    case 'project-operations':
      return <Briefcase className="size-4" />;
    case 'sales':
      return <Target className="size-4" />;
    case 'customer-service':
      return <Headphones className="size-4" />;
    case 'field-service':
      return <Wrench className="size-4" />;
    case 'customer-insights':
      return <PieChart className="size-4" />;
    case 'power-bi':
      return <BarChart3 className="size-4" />;
    case 'fabric':
      return <Database className="size-4" />;
    case 'power-apps':
      return <Workflow className="size-4" />;
    case 'azure':
      return <Cloud className="size-4" />;
    case 'copilot':
      return <Sparkles className="size-4" />;
    default:
      return <Cpu className="size-4" />;
  }
};

interface HeaderProps {
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [solutionCategory, setSolutionCategory] = useState<'size' | 'erp' | 'crm' | 'platform'>('size');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (root.classList.contains('dark')) {
      root.classList.remove('dark');
      setIsDark(false);
      localStorage.setItem('theme', 'light');
    } else {
      root.classList.add('dark');
      setIsDark(true);
      localStorage.setItem('theme', 'dark');
    }
  };

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveMenu(null);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* 1. TOP UTILITY BAR (top-header-sec) matching Dynamics Square UK */}
      <div className="border-b border-black/5 bg-muted/40 px-6 py-2 text-xs text-muted-foreground dark:border-white/5 dark:bg-card/60 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="hidden sm:flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-navy dark:text-foreground">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              UK Microsoft Solutions Partner
            </span>
            <span className="text-black/20 dark:text-white/20">|</span>
            <span className="text-[11px]">United Kingdom · United States · Pakistan</span>
          </div>

          <div className="flex items-center gap-6 ml-auto">
            <a 
              href="mailto:info@dynamicszentrum.com" 
              className="flex items-center gap-1.5 hover:text-brand transition-colors text-xs"
            >
              <Mail className="size-3.5 text-brand" />
              <span>info@dynamicszentrum.com</span>
            </a>

            <a 
              href="tel:+447988586885" 
              className="flex items-center gap-1.5 font-semibold text-navy dark:text-foreground hover:text-brand transition-colors text-xs"
            >
              <Phone className="size-3.5 text-brand" />
              <span>+44 7988 586885</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR (navbar) matching Dynamics Square UK */}
      <div className={`transition-all duration-300 ${
        isScrolled
          ? 'border-b border-black/10 bg-white/98 shadow-md dark:border-white/10 dark:bg-[#0f0316]/98 backdrop-blur-xl'
          : 'border-b border-black/5 bg-white/90 shadow-xs dark:border-white/5 dark:bg-[#0f0316]/90 backdrop-blur-md'
      }`}>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-6 relative">
          {/* Left: Brand Logo + Microsoft Partner Emblem (logo-wrapper) */}
          <div className="flex items-center gap-3 shrink-0">
            <Link to="/" className="flex items-center" aria-label="Dynamics Zentrum home">
              <img 
                src="/assets/dz-logo.png" 
                alt="Dynamics Zentrum" 
                className="h-11 md:h-12 w-auto object-contain block dark:hidden"
              />
              <img 
                src="/assets/dz-logo-dark.png" 
                alt="Dynamics Zentrum" 
                className="h-11 md:h-12 w-auto object-contain hidden dark:block"
              />
            </Link>

            {/* Microsoft Solutions Partner Official Logo side-by-side with transparent background */}
            <div className="hidden sm:flex items-center pl-3 border-l border-black/10 dark:border-white/10">
              <MicrosoftPartnerLogo className="h-8 md:h-9 w-auto hover:opacity-90 transition-opacity" />
            </div>
          </div>

          {/* Center / Right: Desktop Navigation Items matching Dynamics Square UK */}
          <nav className="hidden xl:flex items-center gap-1">
            {/* 1. SOLUTION MEGA-MENU */}
            <div 
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('solution')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`flex items-center gap-1 px-3.5 py-2 text-sm font-semibold transition-colors rounded-lg ${
                  activeMenu === 'solution' 
                    ? 'text-brand bg-brand/5 dark:bg-brand/10' 
                    : 'text-navy/80 dark:text-foreground/80 hover:text-brand'
                }`}
                onClick={() => setActiveMenu(activeMenu === 'solution' ? null : 'solution')}
              >
                <span>Solution</span>
                <ChevronDown className={`size-3.5 transition-transform duration-200 ${
                  activeMenu === 'solution' ? 'rotate-180 text-brand' : ''
                }`} />
              </button>

              {/* Mega-menu panel matching Dynamics Square UK solution tabs */}
              {activeMenu === 'solution' && (
                <div 
                  className="absolute top-full -left-20 pt-1 w-[860px] max-w-[calc(100vw-2rem)] z-[100] animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseEnter={() => handleMouseEnter('solution')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-2xl dark:border-white/15 dark:bg-[#150520] flex gap-6">
                    {/* Left Sidebar Category Pills */}
                    <div className="w-52 shrink-0 space-y-1.5 border-r border-black/5 pr-4 dark:border-white/10">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground px-3 mb-2">
                        Categories
                      </div>
                      {[
                        { id: 'size', label: 'Company By Size', icon: <Briefcase className="size-4" /> },
                        { id: 'erp', label: 'Enterprise ERP', icon: <Database className="size-4" /> },
                        { id: 'crm', label: 'Customer CRM', icon: <Layers className="size-4" /> },
                        { id: 'platform', label: 'Power Platform & AI', icon: <Cpu className="size-4" /> }
                      ].map(cat => (
                        <button
                          key={cat.id}
                          onClick={() => setSolutionCategory(cat.id as any)}
                          onMouseEnter={() => setSolutionCategory(cat.id as any)}
                          className={`w-full flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-semibold text-left transition-all ${
                            solutionCategory === cat.id
                              ? 'bg-brand text-brand-foreground shadow-sm'
                              : 'text-muted-foreground hover:text-navy hover:bg-muted dark:hover:text-foreground'
                          }`}
                        >
                          {cat.icon}
                          <span>{cat.label}</span>
                        </button>
                      ))}

                      <div className="pt-4 mt-4 border-t border-black/5 dark:border-white/10">
                        <Link
                          to="/solutions"
                          className="flex items-center gap-1.5 text-xs font-semibold text-brand hover:opacity-80 px-3"
                        >
                          <span>All Solutions</span>
                          <ArrowRight className="size-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Right Content Area */}
                    <div className="flex-1">
                      {solutionCategory === 'size' && (
                        <div className="grid grid-cols-2 gap-3">
                          <Link to="/solutions/business-central" className="group flex items-start gap-3 rounded-2xl border border-black/5 p-3.5 hover:border-brand/40 hover:bg-brand/[0.03] dark:border-white/10 dark:hover:bg-brand/10 transition-all">
                            <div className="size-8 rounded-xl bg-brand/10 dark:bg-brand/20 text-brand flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-white transition-colors mt-0.5">
                              <Rocket className="size-4" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="text-xs font-bold text-brand">Startups &amp; Scaleups</div>
                              <div className="text-sm font-semibold text-navy dark:text-foreground mt-0.5 group-hover:text-brand transition-colors">D365 Business Central Cloud</div>
                              <div className="text-xs text-muted-foreground mt-1">Lightweight rapid setup with zero IT infrastructure overhead.</div>
                            </div>
                          </Link>
                          <Link to="/solutions/business-central" className="group flex items-start gap-3 rounded-2xl border border-black/5 p-3.5 hover:border-brand/40 hover:bg-brand/[0.03] dark:border-white/10 dark:hover:bg-brand/10 transition-all">
                            <div className="size-8 rounded-xl bg-brand/10 dark:bg-brand/20 text-brand flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-white transition-colors mt-0.5">
                              <Store className="size-4" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="text-xs font-bold text-brand">Small Businesses</div>
                              <div className="text-sm font-semibold text-navy dark:text-foreground mt-0.5 group-hover:text-brand transition-colors">Connected Core Operations</div>
                              <div className="text-xs text-muted-foreground mt-1">Unified sales, purchasing, invoicing, and bank automation.</div>
                            </div>
                          </Link>
                          <Link to="/solutions/finance" className="group flex items-start gap-3 rounded-2xl border border-black/5 p-3.5 hover:border-brand/40 hover:bg-brand/[0.03] dark:border-white/10 dark:hover:bg-brand/10 transition-all">
                            <div className="size-8 rounded-xl bg-brand/10 dark:bg-brand/20 text-brand flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-white transition-colors mt-0.5">
                              <Layers className="size-4" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="text-xs font-bold text-brand">Medium Businesses</div>
                              <div className="text-sm font-semibold text-navy dark:text-foreground mt-0.5 group-hover:text-brand transition-colors">Multi-Entity Operations</div>
                              <div className="text-xs text-muted-foreground mt-1">Advanced multi-location warehousing and consolidated ledgers.</div>
                            </div>
                          </Link>
                          <Link to="/solutions/finance" className="group flex items-start gap-3 rounded-2xl border border-black/5 p-3.5 hover:border-brand/40 hover:bg-brand/[0.03] dark:border-white/10 dark:hover:bg-brand/10 transition-all">
                            <div className="size-8 rounded-xl bg-brand/10 dark:bg-brand/20 text-brand flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-white transition-colors mt-0.5">
                              <Building2 className="size-4" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="text-xs font-bold text-brand">Large Enterprises</div>
                              <div className="text-sm font-semibold text-navy dark:text-foreground mt-0.5 group-hover:text-brand transition-colors">D365 Finance &amp; Operations</div>
                              <div className="text-xs text-muted-foreground mt-1">Tier-1 high throughput, global multi-entity, and sovereign data.</div>
                            </div>
                          </Link>
                        </div>
                      )}

                      {solutionCategory === 'erp' && (
                        <div className="grid grid-cols-2 gap-3">
                          {SOLUTIONS_DATA.filter(s => s.category === 'ERP').slice(0, 4).map(sol => (
                            <Link key={sol.slug} to={`/solutions/${sol.slug}`} className="group flex items-start gap-3 rounded-2xl border border-black/5 p-3.5 hover:border-brand/40 hover:bg-brand/[0.03] dark:border-white/10 dark:hover:bg-brand/10 transition-all">
                              <div className="size-8 rounded-xl bg-brand/10 dark:bg-brand/20 text-brand flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-white transition-colors mt-0.5">
                                {getSolutionIcon(sol.slug)}
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="text-sm font-bold text-navy dark:text-foreground group-hover:text-brand transition-colors">{sol.title}</div>
                                <div className="text-xs text-muted-foreground mt-1 line-clamp-2">{sol.summary}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}

                      {solutionCategory === 'crm' && (
                        <div className="grid grid-cols-2 gap-3">
                          {SOLUTIONS_DATA.filter(s => s.category === 'CRM').slice(0, 4).map(sol => (
                            <Link key={sol.slug} to={`/solutions/${sol.slug}`} className="group flex items-start gap-3 rounded-2xl border border-black/5 p-3.5 hover:border-brand/40 hover:bg-brand/[0.03] dark:border-white/10 dark:hover:bg-brand/10 transition-all">
                              <div className="size-8 rounded-xl bg-brand/10 dark:bg-brand/20 text-brand flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-white transition-colors mt-0.5">
                                {getSolutionIcon(sol.slug)}
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="text-sm font-bold text-navy dark:text-foreground group-hover:text-brand transition-colors">{sol.title}</div>
                                <div className="text-xs text-muted-foreground mt-1 line-clamp-2">{sol.summary}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}

                      {solutionCategory === 'platform' && (
                        <div className="grid grid-cols-2 gap-3">
                          {SOLUTIONS_DATA.filter(s => s.category === 'AI & Analytics' || s.category === 'Platform').slice(0, 4).map(sol => (
                            <Link key={sol.slug} to={`/solutions/${sol.slug}`} className="group flex items-start gap-3 rounded-2xl border border-black/5 p-3.5 hover:border-brand/40 hover:bg-brand/[0.03] dark:border-white/10 dark:hover:bg-brand/10 transition-all">
                              <div className="size-8 rounded-xl bg-brand/10 dark:bg-brand/20 text-brand flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-white transition-colors mt-0.5">
                                {getSolutionIcon(sol.slug)}
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="text-sm font-bold text-navy dark:text-foreground group-hover:text-brand transition-colors">{sol.title}</div>
                                <div className="text-xs text-muted-foreground mt-1 line-clamp-2">{sol.summary}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2. INDUSTRIES MEGA-MENU */}
            <div 
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('industries')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`flex items-center gap-1 px-3.5 py-2 text-sm font-semibold transition-colors rounded-lg ${
                  activeMenu === 'industries' 
                    ? 'text-brand bg-brand/5 dark:bg-brand/10' 
                    : 'text-navy/80 dark:text-foreground/80 hover:text-brand'
                }`}
                onClick={() => setActiveMenu(activeMenu === 'industries' ? null : 'industries')}
              >
                <span>Industries</span>
                <ChevronDown className={`size-3.5 transition-transform duration-200 ${
                  activeMenu === 'industries' ? 'rotate-180 text-brand' : ''
                }`} />
              </button>

              {activeMenu === 'industries' && (
                <div 
                  className="absolute top-full -left-28 pt-1 w-[760px] max-w-[calc(100vw-2rem)] z-[100] animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseEnter={() => handleMouseEnter('industries')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-2xl dark:border-white/15 dark:bg-[#150520]">
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                      Core Sector Accelerators
                    </div>
                    <div className="grid grid-cols-2 gap-2.5">
                      {INDUSTRIES_DATA.slice(0, 8).map(ind => (
                        <Link 
                          key={ind.slug} 
                          to={`/industries/${ind.slug}`}
                          className="group flex items-center justify-between rounded-xl p-3 border border-black/5 hover:border-brand/40 hover:bg-brand/5 dark:border-white/5 dark:hover:bg-brand/10 transition-all"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="size-9 rounded-xl bg-brand/10 dark:bg-brand/20 text-brand flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-white transition-colors">
                              {getIndustryIcon(ind.slug)}
                            </div>
                            <div className="min-w-0">
                              <div className="text-sm font-bold text-navy dark:text-foreground group-hover:text-brand transition-colors truncate">{ind.title}</div>
                              <div className="text-[11px] text-muted-foreground">{ind.code}</div>
                            </div>
                          </div>
                          <ArrowRight className="size-3.5 text-muted-foreground group-hover:text-brand group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                      <Link to="/industries" className="text-xs font-semibold text-brand hover:opacity-80 flex items-center gap-1">
                        <span>View all 16 UK industries</span>
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 3. OUR SERVICES */}
            <div 
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`flex items-center gap-1 px-3.5 py-2 text-sm font-semibold transition-colors rounded-lg ${
                  activeMenu === 'services' 
                    ? 'text-brand bg-brand/5 dark:bg-brand/10' 
                    : 'text-navy/80 dark:text-foreground/80 hover:text-brand'
                }`}
                onClick={() => setActiveMenu(activeMenu === 'services' ? null : 'services')}
              >
                <span>Our Services</span>
                <ChevronDown className={`size-3.5 transition-transform duration-200 ${
                  activeMenu === 'services' ? 'rotate-180 text-brand' : ''
                }`} />
              </button>

              {activeMenu === 'services' && (
                <div 
                  className="absolute top-full -left-16 pt-1 w-[760px] max-w-[calc(100vw-2rem)] z-[100] animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseEnter={() => handleMouseEnter('services')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-2xl dark:border-white/15 dark:bg-[#150520]">
                    <div className="grid grid-cols-2 gap-3">
                      {SERVICES_DATA.slice(0, 6).map(srv => (
                        <Link 
                          key={srv.slug} 
                          to={`/services/${srv.slug}`}
                          className="group flex items-start gap-3.5 rounded-2xl border border-black/5 p-3.5 hover:border-brand/40 hover:bg-brand/[0.03] dark:border-white/10 dark:hover:bg-brand/10 transition-all"
                        >
                          <div className="size-9 rounded-xl bg-brand/10 dark:bg-brand/20 text-brand flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-white transition-colors mt-0.5">
                            {getServiceIcon(srv.slug)}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-[11px] font-bold text-brand uppercase tracking-wider">{srv.category}</div>
                            <div className="text-sm font-bold text-navy dark:text-foreground mt-0.5 group-hover:text-brand transition-colors">{srv.title}</div>
                            <div className="text-xs text-muted-foreground mt-1 line-clamp-2">{srv.summary}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                      <Link to="/services" className="text-xs font-semibold text-brand hover:opacity-80 flex items-center gap-1">
                        <span>Explore all 16 lifecycle services</span>
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. COMPANY */}
            <div 
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('company')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`flex items-center gap-1 px-3.5 py-2 text-sm font-semibold transition-colors rounded-lg ${
                  activeMenu === 'company' 
                    ? 'text-brand bg-brand/5 dark:bg-brand/10' 
                    : 'text-navy/80 dark:text-foreground/80 hover:text-brand'
                }`}
                onClick={() => setActiveMenu(activeMenu === 'company' ? null : 'company')}
              >
                <span>Company</span>
                <ChevronDown className={`size-3.5 transition-transform duration-200 ${
                  activeMenu === 'company' ? 'rotate-180 text-brand' : ''
                }`} />
              </button>

              {activeMenu === 'company' && (
                <div 
                  className="absolute top-full -left-10 pt-1 w-64 z-[100] animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseEnter={() => handleMouseEnter('company')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="rounded-2xl border border-black/10 bg-white p-3 shadow-2xl dark:border-white/15 dark:bg-[#150520] space-y-1">
                    <Link to="/about" className="block rounded-xl px-3.5 py-2.5 text-sm font-semibold text-navy hover:bg-muted dark:text-foreground transition-colors">
                      About Dynamics Zentrum
                    </Link>
                    <Link to="/contact" className="block rounded-xl px-3.5 py-2.5 text-sm font-semibold text-navy hover:bg-muted dark:text-foreground transition-colors">
                      UK Office Locations
                    </Link>
                    <Link to="/book-consultation" className="block rounded-xl px-3.5 py-2.5 text-sm font-semibold text-navy hover:bg-muted dark:text-foreground transition-colors">
                      Consultation Booking
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 5. RESOURCES DROPDOWN matching screenshot */}
            <div 
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors rounded-lg ${
                  activeMenu === 'resources' 
                    ? 'text-brand bg-brand/5 dark:bg-brand/10' 
                    : 'text-navy/80 dark:text-foreground/80 hover:text-brand'
                }`}
                onClick={() => setActiveMenu(activeMenu === 'resources' ? null : 'resources')}
              >
                <span>Resources</span>
                <ChevronDown className={`size-3.5 transition-transform duration-200 ${
                  activeMenu === 'resources' ? 'rotate-180 text-brand' : ''
                }`} />
              </button>

              {activeMenu === 'resources' && (
                <div 
                  className="absolute top-full right-0 pt-1 w-64 z-[100] animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseEnter={() => handleMouseEnter('resources')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="rounded-2xl border border-black/10 bg-white p-3 shadow-2xl dark:border-white/15 dark:bg-[#150520] space-y-1">
                    <Link to="/solutions" className="block rounded-xl px-3.5 py-2.5 text-sm font-semibold text-navy hover:bg-muted dark:text-foreground transition-colors">
                      Implementation Roadmap
                    </Link>
                    <Link to="/services" className="block rounded-xl px-3.5 py-2.5 text-sm font-semibold text-navy hover:bg-muted dark:text-foreground transition-colors">
                      Support SLA Agreements
                    </Link>
                    <Link to="/book-consultation" className="block rounded-xl px-3.5 py-2.5 text-sm font-semibold text-navy hover:bg-muted dark:text-foreground transition-colors">
                      Architecture Assessment
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right: Actions & Signature Contact Us Button */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Search Trigger */}
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                aria-label="Search"
                className="grid size-9 place-items-center rounded-full text-muted-foreground hover:bg-muted transition-colors"
              >
                <Search className="size-4" />
              </button>
            )}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="grid size-9 place-items-center rounded-full text-muted-foreground hover:bg-muted transition-colors"
            >
              {isDark ? <Sun className="size-4 text-amber-400" /> : <Moon className="size-4" />}
            </button>

            {/* SIGNATURE WHITE PILL "Contact Us" BUTTON */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-white text-slate-900 dark:text-slate-900 font-bold px-6 py-2.5 text-sm shadow-md hover:bg-white/90 hover:scale-[1.02] active:scale-98 transition-all border border-black/10"
            >
              Contact Us
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              aria-label="Menu"
              className="xl:hidden grid size-10 place-items-center rounded-full hover:bg-muted text-navy dark:text-foreground"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {isMobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="xl:hidden border-t border-black/10 bg-white/98 dark:border-white/10 dark:bg-[#150520] animate-in slide-in-from-top-2 duration-200 shadow-xl">
          <nav className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-1.5">
            <Link
              to="/solutions"
              onClick={() => setIsMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-semibold text-navy dark:text-foreground hover:bg-muted transition-colors flex items-center justify-between"
            >
              <span>Solution</span>
              <ArrowRight className="size-4 text-muted-foreground" />
            </Link>

            <Link
              to="/industries"
              onClick={() => setIsMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-semibold text-navy dark:text-foreground hover:bg-muted transition-colors flex items-center justify-between"
            >
              <span>Industries</span>
              <ArrowRight className="size-4 text-muted-foreground" />
            </Link>

            <Link
              to="/services"
              onClick={() => setIsMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-semibold text-navy dark:text-foreground hover:bg-muted transition-colors flex items-center justify-between"
            >
              <span>Our Services</span>
              <ArrowRight className="size-4 text-muted-foreground" />
            </Link>

            <Link
              to="/about"
              onClick={() => setIsMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-semibold text-navy dark:text-foreground hover:bg-muted transition-colors flex items-center justify-between"
            >
              <span>Company</span>
              <ArrowRight className="size-4 text-muted-foreground" />
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-semibold text-navy dark:text-foreground hover:bg-muted transition-colors flex items-center justify-between"
            >
              <span>Contact Us</span>
              <ArrowRight className="size-4 text-muted-foreground" />
            </Link>

            <div className="pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between px-2">
              <span className="text-sm font-medium text-muted-foreground">Dark Theme</span>
              <button
                onClick={toggleTheme}
                className="grid size-9 place-items-center rounded-full bg-muted text-navy dark:text-foreground"
              >
                {isDark ? <Sun className="size-4 text-amber-400" /> : <Moon className="size-4" />}
              </button>
            </div>

            <Link
              to="/book-consultation"
              onClick={() => setIsMobileOpen(false)}
              className="mt-4 rounded-full bg-brand px-5 py-3.5 text-center text-sm font-bold text-brand-foreground shadow-lg shadow-brand/25"
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
