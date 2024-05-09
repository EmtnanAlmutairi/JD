module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#69B1B0',
        secondary: '#000A38',
        accent: '#F4D561',
        accent2: '#D5805F',
        stroke: '#DFE4EA',
        bg2: '#F5F5F5',
      },
      fontFamily: {
        calibri: ['Calibri', 'Arial', 'sans-serif'],
        workSans: ['Work Sans', 'sans-serif'],
        cairo: ['Cairo', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      fontWeight: {
        'regular': 400,
        'medium': 500,
        'bold': 700,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

