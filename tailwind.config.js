/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A0F1F',
          light: '#101830',
          card: '#0F1730',
          border: 'rgba(255,255,255,0.06)',
        },
        accent: {
          blue: '#4F8CFF',
          cyan: '#38BDF8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'hero-glow':
          'radial-gradient(60% 50% at 50% 0%, rgba(79,140,255,0.18) 0%, rgba(10,15,31,0) 70%)',
        'accent-gradient': 'linear-gradient(135deg, #4F8CFF 0%, #38BDF8 100%)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(79,140,255,0.45)',
        card: '0 8px 32px 0 rgba(0,0,0,0.36)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        gradient: 'gradientShift 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
