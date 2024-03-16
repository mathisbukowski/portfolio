/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        'charcoal': '#2E4057',
        'zomp': '#66A182',
        'green': '#caffb9',
        'light-green': '#AEF78E',
        'yellow-green': '#C0D461'
      },
      fontFamily: {
        'kode': ['KodeMono', 'monospace']
      }
    },
  },
  plugins: [],
}

