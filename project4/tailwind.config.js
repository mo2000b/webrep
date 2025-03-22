/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#1e40af', // blue-900
          light: '#3b82f6', // blue-500
        },
        'secondary': {
          DEFAULT: '#dc2626', // red-600
          light: '#ef4444', // red-500
        },
      },
    },
  },
  plugins: [],
};