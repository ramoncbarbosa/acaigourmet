/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      montserratAlt: ['"Montserrat Alternates"', 'sans-serif'],
    },
      colors: {
        colorOne: '#FFEBD3',
        colorTwo: '#FAD3A5',
        colorThree: '#521864',
        colorFour: '#FF900B',
      },
    },
  },
  plugins: [],
}
