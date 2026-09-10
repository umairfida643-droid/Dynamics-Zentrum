import React from 'react';

interface MicrosoftPartnerLogoProps {
  className?: string;
  height?: number | string;
}

export const MicrosoftPartnerLogo: React.FC<MicrosoftPartnerLogoProps> = ({ 
  className = "h-8 md:h-9 w-auto",
  height
}) => {
  return (
    <svg 
      viewBox="0 0 250 50" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={height ? { height } : undefined}
      aria-label="Microsoft Solutions Partner"
    >
      {/* Microsoft 4-Color Squares with subtle rounded edges */}
      <rect x="0" y="4" width="20" height="20" rx="1" fill="#F25022" />
      <rect x="23" y="4" width="20" height="20" rx="1" fill="#7FBA00" />
      <rect x="0" y="27" width="20" height="20" rx="1" fill="#00A4EF" />
      <rect x="23" y="27" width="20" height="20" rx="1" fill="#FFB900" />

      {/* Brand Text: automatically adopts light/dark theme with zero background */}
      <text 
        x="54" 
        y="22" 
        className="fill-slate-900 dark:fill-white font-sans text-[19px] font-semibold tracking-[-0.2px] select-none"
      >
        Microsoft
      </text>
      <text 
        x="54" 
        y="42" 
        className="fill-slate-600 dark:fill-slate-200 font-sans text-[15px] font-normal select-none"
      >
        Solutions Partner
      </text>
    </svg>
  );
};
