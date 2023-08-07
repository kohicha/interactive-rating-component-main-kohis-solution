/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily:{
      Overpass: 'Overpass'
    },
    extend: {
      colors:{
        White: 'hsl(0, 0%, 100%)',
        LightGrey: 'hsl(217, 12%, 63%)',
        MediumGrey: 'hsl(216, 12%, 54%)',
        DarkBlue: 'hsl(213, 19%, 18%)',
        VeryDarkBlue: 'hsl(216, 12%, 8%)',
        Orange: 'hsl(25, 97%, 53%)',
        LightGreyBlue: '#262F38'
      }
    },
  },
  plugins: [],
}

