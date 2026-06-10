/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Redefined to match DESIGN.md precisely
        ivory: { DEFAULT: '#FAFAF9', warm: '#F5F5F4', cool: '#FAF9F6' }, // Canvas White (#FAFAF9)
        espresso: { DEFAULT: '#18181B', light: '#27272A', dark: '#09090B' }, // Charcoal Ink (#18181B)
        cream: { DEFAULT: '#FFFFFF', soft: '#FAFAF9' }, // Pure Surface (#FFFFFF)
        burgundy: { DEFAULT: '#831843', light: '#9D174D', dark: '#500724', muted: '#BE185D' }, // Burgundy Accent (#831843)
        gold: { DEFAULT: '#C85A3C', light: '#E07A5F', dark: '#A13D24', bright: '#FF6B35', muted: '#DCA494' }, // Gold/Rust Highlight (#C85A3C)
        ebony: { DEFAULT: '#09090B', soft: '#18181B' },
        brand: {
          bg: '#FAFAF9',
          text: '#18181B',
          accent: '#831843',
          gold: '#C85A3C',
          card: '#FFFFFF',
          dark: '#09090B',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        normal: '0em',
        wide: '0.04em',
        wider: '0.08em',
        widest: '0.18em',
        ultra: '0.28em',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        34: '8.5rem',
        38: '9.5rem',
        42: '10.5rem',
        50: '12.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      borderRadius: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        '3xl': '32px',
        pill: '9999px',
      },
      boxShadow: {
        'flat-tactile': '0 2px 0 0 #000000',
        'depth': '0 10px 30px -10px rgba(24,24,27,0.08)',
        'depth-lg': '0 20px 40px -15px rgba(24,24,27,0.12)',
        'glass': '0 8px 32px 0 rgba(24,24,27,0.04), inset 0 1px 0 rgba(255,255,255,0.6)',
        'glass-dark': '0 8px 32px 0 rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)',
        'premium-card': '0 15px 35px -10px rgba(131,24,67,0.05), 0 5px 15px -5px rgba(200, 90, 60, 0.03)',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #E07A5F 0%, #C85A3C 50%, #A13D24 100%)',
        'gradient-burgundy': 'linear-gradient(135deg, #9D174D 0%, #831843 60%, #500724 100%)',
        'gradient-espresso': 'linear-gradient(180deg, #18181B 0%, #09090B 100%)',
        'gradient-ivory': 'linear-gradient(180deg, #FAFAF9 0%, #F5F5F4 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)',
        'gradient-glass-dark': 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both',
        'fade-up-slow': 'fade-up 0.8s ease-out both',
        'fade-in': 'fade-in 0.4s ease-out both',
        shimmer: 'shimmer 2.4s linear infinite',
        float: 'float 4s ease-in-out infinite',
      },
      transitionDuration: {
        250: '250ms',
        350: '350ms',
        450: '450ms',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
};
