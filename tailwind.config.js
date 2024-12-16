/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        altasianBlue : "#1868DB",
        accentBg: "#F8F8F8",
        secondaryColor:"#8FB8F6",
        thatOrangeColor: "#FFA900",
        secondaryText:"#123263",
        grayText : "#88898B",
        blueText : "#1868DB",
        blackText : "#101214"
      },
      fontFamily:{
        charlieDisplay :["charlieDisplay", "sans"],
        charlieText :["charlieText","Arial","sans-serif"]
      }
    },
  },
  plugins: [],
}

