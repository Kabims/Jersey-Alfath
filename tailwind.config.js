/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        alfath: {
          red: '#DC2626',
          redHover: '#B91C1C',
          cream: '#FAF8F5',
          creamDeep: '#F3EFE8',
          gold: '#EAB308',
          goldSoft: '#FDE047',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        card: '0 4px 20px -2px rgba(24, 24, 27, 0.06), 0 1px 4px -1px rgba(24, 24, 27, 0.04)',
        'card-hover': '0 18px 36px -8px rgba(24, 24, 27, 0.14), 0 4px 12px -2px rgba(220, 38, 38, 0.08)',
        brutal: '4px 4px 0px 0px #18181B',
        'brutal-red': '4px 4px 0px 0px #DC2626',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'float-slow': 'floatSlow 5s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.35s ease-out forwards',
        'scale-in': 'scaleIn 0.22s ease-out forwards',
      },
    },
  },
  plugins: [],
};
