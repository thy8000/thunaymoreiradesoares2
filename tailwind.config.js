const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
    },
  },
  plugins: [],
}

