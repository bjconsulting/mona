/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'nomaRed': '#8B0000',
        'nomaRedMinor': '#e60b0b'
      },
    },
  },
  plugins: [],
};
