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
      },
      boxShadow: {
        '3xl': '3px 3px 3px rgba(60, 57, 57, 0.2)',
      },
      colors: {
        'bg-slate-60': '#F4F4F4',
        'color-qatar': '#710C32',
        'color-footer': '#8D1B3D',
      },
      fontFamily: {
        'qatar': ['"Qatar2022 Arabic"', 'sans-serif']
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}
