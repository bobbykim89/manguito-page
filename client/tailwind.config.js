module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        '10v': '10vh',
        '20v': '20vh',
        '30v': '30vh',
        '40v': '40vh',
        '50v': '50vh',
        '60v': '60vh',
        '70v': '70vh',
        '75v': '75vh',
        '80v': '80vh',
        '85v': '85vh',
        '90v': '90vh',
        '100v': '100vh',
      },
      animation: {
        balls: 'balls 5s infinite',
      },
      keyframes: {
        balls: {
          '0%, 100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        marker: ["'Permanent Marker'", 'cursive'],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-textshadow'),
  ],
}
