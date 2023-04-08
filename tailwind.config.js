/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      xs: "280px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        'Alkatra' : ['Alkatra', 'sans-serif']
      },
      boxShadow: {
        '3xl': '10px 9px 6px 0px rgba(0,0,0,0.91)',
        '4xl': '9px 10px 5px -4px rgba(0,0,0,0.75)'
      }
    },
  },
  plugins: [],
}

