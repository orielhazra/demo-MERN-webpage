/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,css}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 60px rgba(34, 211, 238, 0.15)'
      }
    }
  },
  variants: {
    extend: {
      clipPath: ['responsive'],
    },
  plugins: []
  }
};
