/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        tint: '#0a7ea4',
      },
    },
  },
  plugins: [],
  presets: [require('nativewind/preset')],
};

