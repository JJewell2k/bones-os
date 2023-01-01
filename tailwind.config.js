module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        wallpaper: "url('/images/surtur-wallpaper.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      width: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
}
