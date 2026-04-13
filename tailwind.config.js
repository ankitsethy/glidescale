/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./types.ts",
    "./components/**/*.{ts,tsx}",
    "./services/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        // New semantic tokens
        base: {
          DEFAULT: '#07070C',
          900: '#0A0A12',
          800: '#0F0F18',
          700: '#14141F',
          600: '#1B1B28',
        },
        ink: {
          DEFAULT: '#F5F5FA',
          dim: 'rgba(245,245,250,0.65)',
          mute: 'rgba(245,245,250,0.45)',
          faint: 'rgba(245,245,250,0.25)',
        },
        accent: {
          DEFAULT: '#7C5CFF',
          400: '#9C82FF',
          300: '#B6A3FF',
          200: '#D2C5FF',
          glow: 'rgba(124,92,255,0.35)',
          soft: 'rgba(124,92,255,0.08)',
        },
        // Legacy aliases (so any leftover refs still compile)
        navy: {
          950: '#07070C',
          900: '#0F0F18',
          800: '#14141F',
        },
        electric: {
          500: '#7C5CFF',
          400: '#9C82FF',
          300: '#B6A3FF',
          100: '#E6DEFF',
          50:  '#F2EEFF',
          glow: 'rgba(124,92,255,0.45)',
        },
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
        tightx: '-0.02em',
        eyebrow: '0.18em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)',
        'dot-pattern': 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
        'border-gradient': 'linear-gradient(140deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.04) 30%, rgba(255,255,255,0.02) 70%, rgba(124,92,255,0.18) 100%)',
        'accent-gradient': 'linear-gradient(135deg, #B6A3FF 0%, #7C5CFF 60%, #5A3FE0 100%)',
      },
      animation: {
        'shimmer': 'shimmer 6s linear infinite',
        'shimmer-fast': 'shimmer 2.4s linear infinite',
        'float': 'float 12s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 24s linear infinite',
        'breathe': 'breathe 6s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
        'pulse-soft': 'pulseSoft 3.5s ease-in-out infinite',
        'draw': 'draw 1.4s ease-out forwards',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.04)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '1' },
        },
        draw: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
};
