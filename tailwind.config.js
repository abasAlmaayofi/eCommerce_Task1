/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'ecommerce-orange': '#f46703',
    },
    extend: {},
    backgroundImage: {
      'logo': "url('./images/eCommerceLogo.png')",
    },
  },
  plugins: [],
}

