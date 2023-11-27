import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-800': '#2D1664',
        'primary-800-hover': '#261158',
        'primary-500': '#7640F5',
        'primary-500-hover': '#6437CD',
        'primary-200': '#848EEB',

        'secondary-800': '#20262B',
        'secondary-800-hover': '#1B2227',
        'secondary-500': '#384656',
        'secondary-200': '#7C8CA0',

        'background': '#191E24',
      },
    }
  },
  plugins: []
};

export default config;
