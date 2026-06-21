/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Neon colors
        'neon': {
          'blue': '#00d9ff',
          'purple': '#d946ef',
          'pink': '#ec4899',
          'green': '#10b981',
          'cyan': '#06b6d4',
          'orange': '#f97316',
          'red': '#ef4444',
          'yellow': '#eab308',
        },
        // Cyber colors
        'cyber': {
          'dark': '#0a0e27',
          'darker': '#050812',
          'card': '#1a1f3a',
          'border': '#2d3748',
          'surface': '#0f1419',
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '2xl': '1rem',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 217, 255, 0.6)',
        'neon-purple': '0 0 20px rgba(217, 70, 239, 0.6)',
        'neon-pink': '0 0 20px rgba(236, 72, 153, 0.6)',
        'neon-green': '0 0 20px rgba(16, 185, 129, 0.6)',
        'glow': '0 0 30px rgba(0, 217, 255, 0.8)',
      },
      backdropFilter: {
        'blur': 'blur(10px)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0, 217, 255, 0.7)' },
          '50%': { boxShadow: '0 0 0 10px rgba(0, 217, 255, 0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      fontFamily: {
        'mono': ['Fira Code', 'Monaco', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
