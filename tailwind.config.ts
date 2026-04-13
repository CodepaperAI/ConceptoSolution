import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7c2633',
          hover: '#601b26',
        },
        secondary: '#c8ab8d',
        bg: {
          primary: '#f5efe6',
          secondary: '#ece3d7',
          dark: '#15110f',
        },
        text: {
          primary: '#241d18',
          secondary: '#5f544c',
          muted: '#8e7f73',
        },
        accent: '#7c2633',
        link: '#086ad8',
        border: {
          DEFAULT: '#d7ccbf',
          dark: '#443932',
        },
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        container: '1400px',
      },
      boxShadow: {
        panel: '0 18px 42px rgba(39, 24, 18, 0.09)',
        luxury: '0 30px 80px rgba(28, 18, 14, 0.12)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-out',
        'slide-up': 'slideUp 400ms ease-out',
      },
    },
  },
  plugins: [],
}
export default config
