/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-navy': '#0A1F44',
        'primary-blue': '#1E3A8A',
        'primary-light-blue': '#A7C7E7',
        'accent-teal': '#14b8a6',
        'accent-cyan': '#22d3ee',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse': 'pulse 3s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(34, 211, 238, 0.2)',
        'glow-md': '0 0 25px rgba(34, 211, 238, 0.3)',
        'glow-lg': '0 0 35px rgba(34, 211, 238, 0.4)',
      },
    },
  },
  plugins: [],
};