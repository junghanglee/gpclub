import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sand: '#F7F4EE',
        ink: '#1F1F1F',
        muted: '#6E6A64',
        line: '#E7E1D8',
        accent: '#C7AE88',
        accentDeep: '#8B7355',
      },
      boxShadow: {
        soft: '0 12px 40px rgba(34, 28, 20, 0.08)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
};

export default config;
