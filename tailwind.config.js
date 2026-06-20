/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00d9ff',
          purple: '#d946ef',
          pink: '#ec4899',
          green: '#10b981',
          cyan: '#06b6d4',
        },
        cyber: {
          dark: '#0a0e27',
          darker: '#050812',
          card: '#1a1f3a',
          border: '#2d3748',
        },
      },
      fontFamily: {
        mono: ['Fira Code', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 8s linear infinite',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0, 217, 255, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.8)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'scan': {
          '0%': { top: '0%' },
          '100%': { top: '100%' },
        },
      },
      backdropFilter: {
        none: 'none',
        sm: 'blur(4px)',
        DEFAULT: 'blur(12px)',
        md: 'blur(16px)',
        lg: 'blur(20px)',
      },
      boxShadow: {
        neon: '0 0 10px rgba(0, 217, 255, 0.5)',
        'neon-lg': '0 0 30px rgba(0, 217, 255, 0.6)',
        'neon-purple': '0 0 10px rgba(217, 70, 239, 0.5)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
