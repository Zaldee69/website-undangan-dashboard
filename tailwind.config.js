const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        beau: ["Beau Rivage", "sans-serif"],
        quick: ["Quicksand", "sans-serif"],
      },
      screens: {
        ss: { max: "540px" },
        xs: { max: "480px" },
        xxsm: { max: "280px" },
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [require("daisyui")],
};
