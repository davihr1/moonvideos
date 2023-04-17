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
        },
        rocket: {
          900: '#6029D7'
        }
      },
      backgroundImage: {
        'moon-gradient': 'linear-gradient(40deg, #141410 40%, transparent)',
        'moon-detaque': "url('https://firebasestorage.googleapis.com/v0/b/plus-7fa48.appspot.com/o/startapp%2Ftheflashbb.png?alt=media&token=5c7d8794-7f57-48e0-9c79-f526d5e562e4')",
      }
    },
  },
  plugins: [],
}

