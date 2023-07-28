/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm:'380px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        "soft-red": "#fe7867",
        yellow:"#fad400",
        "dark-cyan":"#25564b",
        "dark-blue":"#19536b",
        "mod-cyan":"#458c7e",
        "dark-sat-blue":"#23303e",
        "very-dark-gray-blue":"#5a636c",
        "dark-gray-blue":"hsl(232, 10%, 55%)",
        "gray-blue":"#a7abae",
        white:"#ffffff"
      },
      fontFamily:{
        barlow:["Barlow", "sans-serif"],
        fraunces:["Fraunces", "serif"]
      }
    },
  },
  plugins: [],
}

