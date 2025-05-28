import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1B005E',
        'secondary': '#3A0079'
      },
    },
  },
  plugins: [],
};
export default config;