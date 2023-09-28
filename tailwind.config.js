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
        round: " round 8s infinite",
      },
      keyframes: {
        round: {
          "0%": {
            transform: "translate(0px, 0px)",
          },
          "33%": {
            transform: "translate(0px, -20px) ",
          },
          "66%": {
            transform: "translate(0px, 0px) ",
          },
          "88%": {
            transform: "translate(0px, -5px) ",
          },
          "100%": {
            transform: "translate(0px, 0px)",
          },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};


//{
 