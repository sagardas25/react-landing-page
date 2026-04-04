/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pink:   { highlight: '#f5a8c8' },
        green:  { highlight: '#b8d8b0', footer: '#d6e8d0' },
        yellow: { highlight: '#f5e6a0' },
        red:    { brand: '#e8453c' },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
      },
      maxWidth: {
        content: '1100px',
      },
    },
  },
  plugins: [],
};
