const { default: daisyui } = require('daisyui');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: [
      "sunset",
    ],
  },
  plugins: [
    require('daisyui'),
  ],
};