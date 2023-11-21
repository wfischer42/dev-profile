const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./code/**/*.{html,js}'],
  theme: {
    fontFamily: {
      sans: ['Karla', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4AB07F',
        },
        neutral: {
          100: '#FFFCF8',
        },
        slate: {
          100: '#F7F7F7',
          200: '#EFEFEF',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
