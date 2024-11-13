import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2B4099", // Custom Primary Color
        secondary: "#15357D", // Custom Secondary Color
        accent: "#DD99D7", // Custom Accent Color
        lightBlue: "#89CAFF", // Custom Light Blue Color
        orange: "#FD9330", // Custom Orange Color
        "dark-gray": "#595959",
        "warm-gray": "#F8F8ED",
        "dark-blue": "#043873",
        gray: "#D9D9D9",
        "custom-pink": "#DB92D4", // Custom color 1
        "custom-blue": "#89CAFF", // Custom color 2
        "custom-orange": "#FD9330", // Custom color 3
      },
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-font-inter")],
};
