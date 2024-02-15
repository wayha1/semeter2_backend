/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        abc: ["Playfair Display", "serif"],
        dbc: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
