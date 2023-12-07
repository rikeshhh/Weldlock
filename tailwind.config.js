/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    colors:{
      'maroon-red':'#F80102',
      'white':'#fff',
      'black':'#000',
      'dipBlack':'#171717',
      'solutionBlack':'#232323',
      'grayWhite':'#F2F4F7',
      'borderWhite':'#ffffff1a',
    },
    fontFamily:{
      'manrope':["'Manrope', sans-serif"],
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}