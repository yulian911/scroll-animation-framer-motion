/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(100%)' },

          '100%': { transform: 'translateX(-100%)' },
        },
        spin: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-850px) rotate(360deg)' },
        },
        rgb: {
          // '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: 'center' },
          // '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'waving-hand': 'wave 10s linear infinite',
        fluids: 'spin 5s linear infinite',
        rgb: 'rgb 6s linear infinite',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
