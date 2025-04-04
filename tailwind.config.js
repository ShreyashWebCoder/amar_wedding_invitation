/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        wedding: {
          primary: "#006A71",
          secondary: "#48A6A7",
          accent: "#9ACBD0",
          cream: "#F2EFE7",
        },
      },
      fontFamily: {
        sans: ["'Playfair Display'", "serif"],
        heading: ["'Great Vibes'", "cursive"],
        marathi: ["'Noto Sans Devanagari'", "sans-serif"],
      },
    },
  },
  plugins: [],
}