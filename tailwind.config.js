/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DCF2F1",
        secondary: "#7FC7D9",
        accent: "#365486",
        dark: "#0F1035",
      },
    },
  },
  plugins: [],
}