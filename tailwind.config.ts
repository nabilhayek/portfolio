import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      desktop: '1315px',
      mobile: '650px',
    },
    extend: {
      keyframes: {
        breathe: {
          //also move up and down slightly
          '0%, 100%': { transform: 'scale(1)', rotate: '0deg' },
          '50%': { transform: 'scale(0.95)', rotate: '2deg' },
        },
      },
      animation: {
        breathe: 'breathe 12s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
