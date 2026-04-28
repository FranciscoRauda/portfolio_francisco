/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#0a0f1a',
          card: '#121a2b',
          elevated: '#1a2438',
        },
        brand: {
          blue: '#2563eb',
          glow: '#3b82f6',
          green: '#4ade80',
        },
      },
      boxShadow: {
        'glow-blue': '0 0 60px -12px rgba(59, 130, 246, 0.55)',
        'glow-blue-sm': '0 0 40px -16px rgba(59, 130, 246, 0.45)',
        card: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        typewriter: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': 'white' },
        },
      },
      animation: {
        'typewriter-name': 'typewriter 1.8s steps(18) forwards',
        'typewriter-role': 'typewriter 2s steps(21) 1.9s forwards',
        'caret-blink': 'blink 0.75s step-end infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}
