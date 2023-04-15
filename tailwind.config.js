/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        dark: {
          800: '#21222d',
        },
        galaxy: {
          500: '#141410',
          400: '#21222d'
        }
      }
    },
  },
  plugins: [],
}

