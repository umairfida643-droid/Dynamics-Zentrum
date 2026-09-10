import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Search,
  ArrowRight
} from 'lucide-react';
import { SERVICES_DATA, SOLUTIONS_DATA, INDUSTRIES_DATA } from '../../data/siteData';

interface HeaderProps {
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
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
    }, 150); // 150ms graceful hover grace period to prevent accidental closing
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setActiveMenu(null);
  }, [location.pathname]);

  const navItems = [
    {
      label: 'Services',
      to: '/services',
      children: SERVICES_DATA.slice(0, 8).map(s => ({
        title: s.title,
        to: `/services/${s.slug}`,
        description: s.summary
      }))
    },
    {
      label: 'Solutions',
      to: '/solutions',
      children: SOLUTIONS_DATA.slice(0, 8).map(s => ({
        title: s.title,
        to: `/solutions/${s.slug}`,
        description: s.summary
      }))
    },
    {
      label: 'Industries',
      to: '/industries',
      children: INDUSTRIES_DATA.slice(0, 8).map(i => ({
        title: i.title,
        to: `/industries/${i.slug}`,
        description: i.summary
      }))
    },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' }
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'border-b border-black/10 bg-white/95 backdrop-blur-xl dark:border-white/10 dark:bg-[#0d0211]/95 shadow-sm' 
        : 'border-b border-transparent bg-white/70 backdrop-blur-md dark:bg-[#0d0211]/70'
    }`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-6 relative">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Dynamics Zentrum home">
          <img 
            src="/assets/dz-logo.png" 
            alt="Dynamics Zentrum" 
            className="h-12 md:h-14 w-auto object-contain block dark:hidden"
          />
          <img 
            src="/assets/dz-logo-dark.png" 
            alt="Dynamics Zentrum" 
            className="h-12 md:h-14 w-auto object-contain hidden dark:block"
          />
        </Link>

        {/* Desktop Navigation with Mega Menus */}
        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => (
            item.children ? (
              <div 
                key={item.label}
                className="relative py-2"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className={`group flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium transition-colors rounded-lg ${
                    activeMenu === item.label 
                      ? 'text-brand font-semibold bg-brand/5 dark:bg-brand/10' 
                      : 'text-muted-foreground hover:text-brand'
                  }`}
                  onClick={() => setActiveMenu(activeMenu === item.label ? null : item.label)}
                >
                  {item.label}
                  <ChevronDown className={`size-3.5 transition-transform duration-200 ${
                    activeMenu === item.label ? 'rotate-180 text-brand' : ''
                  }`} />
                </button>

                {/* Mega Menu Popover */}
                {activeMenu === item.label && (
                  <div 
                    className={`absolute top-full pt-1 w-[680px] max-w-[calc(100vw-2rem)] z-[100] animate-in fade-in slide-in-from-top-2 duration-150 ${
                      item.label === 'Industries' 
                        ? 'right-0' 
                        : item.label === 'Services' 
                        ? 'left-0' 
                        : 'left-1/2 -translate-x-1/2'
                    }`}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Solid Opaque Background Card with strong shadow */}
                    <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-[0_25px_60px_-15px_rgba(20,3,26,0.3)] dark:border-white/15 dark:bg-[#150520] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]">
                      <div className="grid grid-cols-2 gap-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            className="group flex flex-col rounded-xl p-3 transition-all hover:bg-brand/5 dark:hover:bg-brand/10 border border-transparent hover:border-brand/10"
                          >
                            <div className="text-sm font-semibold text-navy dark:text-foreground group-hover:text-brand transition-colors">
                              {child.title}
                            </div>
                            {child.description && (
                              <div className="mt-1 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                                {child.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>

                      <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-3 dark:border-white/10">
                        <Link
                          to={item.to}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-brand hover:opacity-80 transition-opacity"
                        >
                          View all {item.label.toLowerCase()}
                          <ArrowRight className="size-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className={`px-3.5 py-2 text-sm font-medium transition-colors rounded-lg ${
                  location.pathname === item.to 
                    ? 'text-brand font-semibold' 
                    : 'text-muted-foreground hover:text-brand'
                }`}
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Search Trigger */}
          {onOpenSearch && (
            <button
              onClick={onOpenSearch}
              aria-label="Search"
              className="hidden md:grid size-9 place-items-center rounded-full text-muted-foreground hover:bg-muted transition-colors"
            >
              <Search className="size-4" />
            </button>
          )}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="hidden md:grid size-9 place-items-center rounded-full text-muted-foreground hover:bg-muted transition-colors"
          >
            {isDark ? <Sun className="size-4 text-amber-400" /> : <Moon className="size-4" />}
          </button>

          {/* Consultation CTA */}
          <Link
            to="/book-consultation"
            className="hidden sm:inline-flex btn-shine items-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/25 ring-1 ring-brand transition-all hover:scale-[1.02]"
          >
            Book Consultation
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

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="xl:hidden border-t border-black/10 bg-white/98 dark:border-white/10 dark:bg-[#150520] animate-in slide-in-from-top-2 duration-200 shadow-xl">
          <nav className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-1.5">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setIsMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-navy dark:text-foreground hover:bg-muted transition-colors flex items-center justify-between"
              >
                {item.label}
                <ArrowRight className="size-4 text-muted-foreground" />
              </Link>
            ))}

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
              className="mt-4 rounded-full bg-brand px-5 py-3 text-center text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/25"
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
