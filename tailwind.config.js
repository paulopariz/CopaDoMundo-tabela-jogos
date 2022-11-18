/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '1920' : '1920px',
      },
      height: {
        '600': '600px',
      },
      inset: {
        '52px': '52px',
        '41%': '41%',
        '78%': '78%',
        '6%': '6%'
      }
    },
  },
  plugins: [],
}
