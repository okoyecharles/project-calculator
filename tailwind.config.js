/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        calc: {
          display: "#E2EFF8",
          "display-text": "#274459",
          button: "#0094FF",
        },
      },
    },
  },
  plugins: [],
};
