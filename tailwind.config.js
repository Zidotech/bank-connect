const { Colors, Fonts } = require('./constants/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...Colors.light,
        ...Colors.dark,
      },
      fontFamily: {
        sans: Fonts.sans,
        serif: Fonts.serif,
        mono: Fonts.mono,
      },
    },
  },
  plugins: [],
  presets: [require('nativewind/preset')],
};

