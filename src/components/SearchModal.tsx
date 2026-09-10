import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import { SERVICES_DATA, SOLUTIONS_DATA, INDUSTRIES_DATA } from '../data/siteData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchedServices = q ? SERVICES_DATA.filter(s => s.title.toLowerCase().includes(q) || s.summary.toLowerCase().includes(q)) : [];
  const matchedSolutions = q ? SOLUTIONS_DATA.filter(s => s.title.toLowerCase().includes(q) || s.summary.toLowerCase().includes(q)) : [];
  const matchedIndustries = q ? INDUSTRIES_DATA.filter(i => i.title.toLowerCase().includes(q) || i.summary.toLowerCase().includes(q)) : [];

  const hasResults = matchedServices.length > 0 || matchedSolutions.length > 0 || matchedIndustries.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 bg-navy/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-2xl rounded-3xl border border-black/10 bg-card p-6 shadow-2xl dark:border-white/10 dark:bg-card">
        <div className="flex items-center justify-between pb-4 border-b border-black/5 dark:border-white/10">
          <div className="flex items-center gap-3 flex-1">
            <Search className="size-5 text-brand" />
            <input
              autoFocus
              type="text"
              placeholder="Search services, solutions, or industries..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-base text-navy dark:text-foreground outline-none placeholder:text-muted-foreground"
            />
          </div>
          <button
            onClick={onClose}
            className="grid size-8 place-items-center rounded-full hover:bg-muted text-muted-foreground"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Results */}
        <div className="mt-4 max-h-96 overflow-y-auto space-y-4">
          {!query && (
            <p className="text-center py-8 text-sm text-muted-foreground">
              Type keywords like "Finance", "Supply Chain", "Manufacturing", or "Implementation"...
            </p>
          )}

          {query && !hasResults && (
            <p className="text-center py-8 text-sm text-muted-foreground">
              No results found for "{query}".
            </p>
          )}

          {matchedServices.length > 0 && (
            <div>
              <div className="text-xs font-semibold uppercase text-brand tracking-wider mb-2">Services</div>
              <div className="space-y-1">
                {matchedServices.map(s => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-muted text-sm font-medium text-navy dark:text-foreground transition-colors"
                  >
                    <span>{s.title}</span>
                    <ArrowRight className="size-4 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {matchedSolutions.length > 0 && (
            <div>
              <div className="text-xs font-semibold uppercase text-brand tracking-wider mb-2">Solutions</div>
              <div className="space-y-1">
                {matchedSolutions.map(s => (
                  <Link
                    key={s.slug}
                    to={`/solutions/${s.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-muted text-sm font-medium text-navy dark:text-foreground transition-colors"
                  >
                    <span>{s.title}</span>
                    <ArrowRight className="size-4 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {matchedIndustries.length > 0 && (
            <div>
              <div className="text-xs font-semibold uppercase text-brand tracking-wider mb-2">Industries</div>
              <div className="space-y-1">
                {matchedIndustries.map(i => (
                  <Link
                    key={i.slug}
                    to={`/industries/${i.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-muted text-sm font-medium text-navy dark:text-foreground transition-colors"
                  >
                    <span>{i.title}</span>
                    <ArrowRight className="size-4 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
