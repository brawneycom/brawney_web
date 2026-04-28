const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/**/*.{js,ts,jsx,tsx}",
    // "./tailwind/**/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("cssnano")({
      preset: "default",
    }),
  ],
};
