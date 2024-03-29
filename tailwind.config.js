/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xs': '280px',
        'xs': '320px',
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [ 
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('flowbite/plugin')
  ],
}
