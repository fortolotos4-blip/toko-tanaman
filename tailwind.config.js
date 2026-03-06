/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7FC4A6",
        primaryDark: "#5DAA8A",
        primaryLight: "#EAF7F1",
        accent: "#8FAF2C",
      },
    },
  },
  plugins: [],
};