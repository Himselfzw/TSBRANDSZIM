/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        red: '#FF0000',
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        garamond: ['Cormorant Garamond', 'serif'],
      },
      fontSize: {
        'clamp-h1': 'clamp(2rem, 8vw, 5rem)',
        'clamp-h2': 'clamp(1.5rem, 5vw, 3.5rem)',
        'clamp-h3': 'clamp(1.25rem, 3vw, 2rem)',
      },
      spacing: {
        'border-width': '2px',
      },
      transitionDuration: {
        '400': '400ms',
        '500': '500ms',
      },
    },
  },
  plugins: [],
}