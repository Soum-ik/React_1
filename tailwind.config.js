/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        neutralSilver: "#F5F7FA",
        neutralDGrey: "#4D4D4D",
        brandPrimar: "#4CAF4F",
        neutralGrey: "#717171",
        gray900: "#18191F",
      },
      animation: {
        big: "big 7s infinite",
      },
      keyframes: {
        big: {
          "0%": {
            transfrom: "scale(1)",
          },
          "25%": {
            transfrom: "scale(1.2)",
          },
          "50%": {
            transfrom: "scale(1.25)",
          },
          "60%": {
            transfrom: "scale(1)",
          },
          "100%": {
            transfrom: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
