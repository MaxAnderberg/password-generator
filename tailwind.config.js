/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'almost-white': '#E6E5EA',
        'neon-green': '#A4FFAF',
        'dark-grey': '#24232C',
      },
      textColor: {
        'almost-white': '#E6E5EA',
        'neon-green': '#A4FFAF',
        'dark-grey': '#24232C',
      }
    },
  },
  plugins: [("@tailwindcss/forms")],
}
