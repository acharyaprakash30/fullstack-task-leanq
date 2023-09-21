/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins'],
      },
    },
    colors: {
      lightPink: '#FF9CED',
      green: '#004542',
      blue: '#FF9CED',
      pink: '#B70074',
      gray: '#E8ECF0',
      white: '#FFFFFF',
      black: '#000000',
    },
  },
  plugins: [],
};
