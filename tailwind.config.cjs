/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '14': '3.5rem',
        '125px': '125px'
      },
      colors: {
        'hoversppt': '#18D760',
        'purple-main': '#2D46B9',
        'green-main': '#1ED760'
      },
      backgroundImage: theme => ({
        'spotify-theme': "url('https://raw.githubusercontent.com/frontRocha/SpotifyCloneTw/00574f5362736e648f7d7a2617a468c414210cbf/src/Assets/bursts-mobile.svg')",
        'spotify-theme-mobile': "url('https://raw.githubusercontent.com/frontRocha/SpotifyCloneTw/00574f5362736e648f7d7a2617a468c414210cbf/src/Assets/bursts.svg')",
      }),
      backgroundSize: {
        '175%': '175%',
        '195%': '195%'
      },
      backgroundPosition: {
        'banner': '56% 4%',
        'banner-mobile': 'top 25% center'
      },
      fontSize: {
        '9xl': '9rem'
      }
    },
  },
  plugins: [],
}
