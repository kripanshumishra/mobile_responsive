module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'tab':'450px',
      // => @media ( min-width:850px ) { ... }
      'lap':'850px',
      // => @media ( min-width:1280px ) { ... }
    },
  },
  plugins: [],
}
