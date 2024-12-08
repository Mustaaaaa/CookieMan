/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '3xl': ['32px', '48px'],
        '4xl': ['40px', '60px'],
        '2xl': ['24px', '36px'],
        '6xl': ['64px', '96px'],
        '8xl': ['96px', '144px'],
        'sm': ['12px', '18px'],
        'lg': ['16px', '24px'],
      },
      width: {
        '46': '188px',
      },
      colors: {
        green: {
          500: '#1c7b44',
          400: '#549c72',
        },
        orange: {
          400: '#fe974f',
          500: '#ff7715',
        },
      },
    },
  },
  plugins: [],
}