const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.warmGray,
      green: colors.teal
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
