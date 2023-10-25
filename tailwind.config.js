/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Lora'],
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        'primary-color': '#072A56',
        'secondary-color': '#F6F8FC'
      }
    },
  },
  plugins: [],
}