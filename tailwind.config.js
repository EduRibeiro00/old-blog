module.exports = {
  purge: {
    enabled: false,
    content: ['./src/**/*.jsx'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '2rem'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
