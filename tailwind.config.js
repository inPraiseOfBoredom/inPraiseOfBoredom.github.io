const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.warmGray,
      green: colors.teal
    },
    screens: {
      sm: "300px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px"
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
