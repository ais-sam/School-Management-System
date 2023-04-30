/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding:"2rem"
    },
    colors: {
      "d-blue": "#131F73",
      "d-light-blue": "#263AC3",
      "d-red" : "#D60A0B",
      "d-gray": "#DDDEEE",
      "d-bg-gray" : "#F0F1F3"
    }
    },
  },
  plugins: [require('flowbite/plugin')],
}