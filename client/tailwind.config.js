/** @type {import('tailwindcss').Config} */
require("tailwind-scrollbar");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        inner: "inset 0px 0px 100px 0px red;"
      },
      colors: {
        red: {
          100: "#f5d0d2",
          200: "#eba1a5",
          300: "#e17377",
          400: "#d7444a",
          500: "#cd151d",
          600: "#a41117",
          700: "#7b0d11",
          800: "#52080c",
          900: "#290406"
        },
        black: {
          100: "#cccccc",
          200: "#999999",
          300: "#666666",
          400: "#333333",
          500: "#000000",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000"
        }
      }
    }
  },
  plugins: []
};
