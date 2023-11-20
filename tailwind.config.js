const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./code/**/*.{html,js}'],
  theme: {
    fontFamily: {
      sans: ['Karla', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
