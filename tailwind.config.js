module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'base_pink': '#ff00a0',
        'base_purple': '#8761ff',
        'base_teal': '#00ffc2',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
