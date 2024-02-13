/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./screens/Sales/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   'sans': ['"Proxima Nova"', ...defaultTheme.fontFamily.sans],
      // },
    },
  },
  plugins: [],
}

// "./App.{js, ts,jsx,tsx}",