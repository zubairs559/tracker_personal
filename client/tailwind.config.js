/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors : {
      'headercolor' : '#5D5C61',
      'button' : '#B1A296',
      'link' : '#557A95',
    }
  },
  plugins: [],
}