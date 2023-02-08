/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald"],
        poppins: ["Poppins"],
        titillium: ['"Titillium Web"'],
      },
      colors: {
        bronze: "#A79258",
      },
    },
  },
  plugins: [],
};
