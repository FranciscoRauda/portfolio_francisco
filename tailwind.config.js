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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'white' },
        },
      },
      animation: {
        'typewriter-part1': 'typewriter 1.8s steps(18) forwards, blink 0.7s step-end infinite',
        'typewriter-part2': 'typewriter 1.7s steps(17) forwards, blink 0.7s step-end infinite',
        'typewriter-part3': 'typewriter 2s steps(20) forwards, blink 0.7s step-end infinite',
        'typewriter-line1-mobile': 'typewriter 3.1s steps(31) forwards, blink 0.7s step-end infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}
