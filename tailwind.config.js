/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        'nightblue': '#1B263B',
        'skyblue': '#3D6CB9',
        'mint': '#50C878',
        'corail': '#FFA661',
        'gold': '#FFD700',
        'sky-gray': '#D3D3D3',
        'anthracite': '#555555'
      },
      fontFamily: {
        'kode': ['KodeMono', 'monospace'],
        'sans': ['Roboto', 'sans-serif'],
        'title': ['Montserrat', 'sans-serif'],
        'subtitle': ['Raleway', 'sans-serif'],
        'accent': ['Lora', 'serif'],
        'rubik': ['Rubik Mono One', 'sans-serif'],
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}

