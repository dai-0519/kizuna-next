import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0C1828',
          light: '#16253C',
          dark: '#080F1C',
        },
        gold: {
          DEFAULT: '#C09240',
          dark: '#9A7430',
        },
        'off-white': '#F6F2EC',
        cream: '#ECE7DA',
        muted: '#706A60',
      },
      fontFamily: {
        fraunces: ['var(--font-fraunces)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        jp: ['"Noto Serif JP"', 'serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
      },
    },
  },
  plugins: [],
}

export default config
