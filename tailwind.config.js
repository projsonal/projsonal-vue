/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#B8001F',
        secondary: '#FCFAEE',
        surface: '#507687',
        ink: '#384B70',
        textLight: '#FCFAEE',   // teks terang untuk dark mode
        textDark: '#1A1A1A',    // teks gelap untuk light mode
      },
    },
  },
  darkMode: 'class',
 plugins: [
  function({ addUtilities, theme }) {
    const newUtilities = {
      '.stroke-text': {
        '-webkit-text-stroke-width': '1.4px',
        '-webkit-text-fill-color': 'transparent',
        '-webkit-text-stroke-color': theme('colors.secondary'),
      },
      '.text-stroke-primary': {
        '-webkit-text-stroke-color': theme('colors.primary'),
      },
      '.text-stroke-secondary': {
        '-webkit-text-stroke-color': theme('colors.secondary'),
      }
    }
    addUtilities(newUtilities, ['responsive', 'dark'])
  }
],
}
