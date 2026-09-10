/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        border: 'var(--border)',
        brand: {
          DEFAULT: 'var(--brand)',
          foreground: 'var(--brand-foreground)',
          glow: '#cc00e6',
        },
        navy: {
          DEFAULT: 'var(--navy)',
          dark: '#08010c',
          card: '#150520',
        },
        purple: {
          DEFAULT: 'var(--purple)',
        },
        sky: {
          DEFAULT: 'var(--sky)',
        },
        success: {
          DEFAULT: 'var(--success)',
        },
        surface: 'var(--surface)',
      },
      fontFamily: {
        display: ['Sora', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'float': 'float-y 6s ease-in-out infinite',
        'float-3d-1': 'float-3d-1 7s ease-in-out infinite',
        'float-3d-2': 'float-3d-2 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'fade-up': 'fade-up 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) both',
        'ping-slow': 'ping-slow 2.6s cubic-bezier(0, 0, 0.2, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'spin-orbit-cw': 'spin-orbit 50s linear infinite',
        'spin-orbit-ccw': 'spin-orbit-reverse 65s linear infinite',
        'spin-orbit-outer': 'spin-orbit 85s linear infinite',
        'marquee': 'marquee-x 30s linear infinite',
      },
      keyframes: {
        'float-y': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-3d-1': {
          '0%, 100%': { transform: 'perspective(1000px) rotateX(2deg) rotateY(-3deg) translateY(0)' },
          '50%': { transform: 'perspective(1000px) rotateX(-2deg) rotateY(3deg) translateY(-14px)' },
        },
        'float-3d-2': {
          '0%, 100%': { transform: 'perspective(1000px) rotateX(-2deg) rotateY(3deg) translateY(0)' },
          '50%': { transform: 'perspective(1000px) rotateX(3deg) rotateY(-2deg) translateY(-16px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'ping-slow': {
          '0%': { opacity: '0.8', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(2.2)' },
        },
        'marquee-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'spin-orbit': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spin-orbit-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
}
