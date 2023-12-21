/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F28705",
          600: "#DC7B05",
          50: "#FEF3E6",
        },
        black: {
          DEFAULT: "#2A2A2A",
          10: "#1A1A1A",
        },
        gray: {
          custom: "#1C1C1C",
          10: "#C0C0C0",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
