/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: { DEFAULT: "#6558F5", light: "#D5E7F7" },
      orange: { DEFAULT: "#e8833a", light: "#FAE6D8" },
      secondary: { DEFAULT: "#d1efec", dark: "#19cfbd" },
    },
  },
  plugins: [],
};
