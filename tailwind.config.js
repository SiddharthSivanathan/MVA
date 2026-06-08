/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eaf0f6',
          100: '#c8d4e3',
          200: '#94a8c1',
          300: '#5f7c9f',
          400: '#34557c',
          500: '#193257',
          600: '#102243',
          700: '#0a1731',
          800: '#06101f',
          900: '#030813',
          950: '#01040a',
        },
        ocean: {
          50: '#e6fbfb',
          100: '#b8f1f1',
          200: '#7be4e4',
          300: '#34cdcd',
          400: '#0bb0b0',
          500: '#008f90',
          600: '#007373',
          700: '#005757',
          800: '#003c3d',
          900: '#002323',
        },
        turquoise: {
          DEFAULT: '#1ec8c8',
          light: '#5ee0e0',
          dark: '#0a8a8a',
        },
        sunset: {
          50: '#fff4eb',
          100: '#ffd8b8',
          200: '#ffb377',
          300: '#ff8c40',
          400: '#ff6b1a',
          500: '#e84a00',
          600: '#b53600',
          700: '#822500',
          800: '#501500',
        },
        sand: {
          50: '#fbf8f1',
          100: '#f3ecd8',
          200: '#e6d9af',
          300: '#d7c181',
          400: '#c6a955',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-sunset': 'linear-gradient(135deg, #ff8c40 0%, #e84a00 50%, #b53600 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #0bb0b0 0%, #008f90 50%, #003c3d 100%)',
        'gradient-night': 'linear-gradient(135deg, #030813 0%, #06101f 50%, #102243 100%)',
        'gradient-glow': 'radial-gradient(circle at center, rgba(30,200,200,0.25) 0%, rgba(3,8,19,0) 70%)',
      },
      boxShadow: {
        glow: '0 0 60px rgba(30,200,200,0.35)',
        'glow-sm': '0 0 24px rgba(30,200,200,0.25)',
        sunset: '0 20px 60px -20px rgba(232,74,0,0.45)',
        glass: '0 8px 32px 0 rgba(0,0,0,0.37)',
        soft: '0 24px 60px -25px rgba(3,8,19,0.45)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-med': 'float 6s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'wave': 'wave 10s linear infinite',
        'wave-reverse': 'wave 14s linear infinite reverse',
        'shimmer': 'shimmer 2.5s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-x': 'gradientX 10s ease infinite',
        'fade-up': 'fadeUp 0.9s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-18px) translateX(6px)' },
        },
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 30px rgba(30,200,200,0.35)' },
          '50%': { boxShadow: '0 0 60px rgba(30,200,200,0.7)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
