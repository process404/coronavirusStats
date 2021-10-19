module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'gray-rgb': '#0f0f0f',
        'gray-footer': '#0f0f0f',
        'gray-button': '#171717',
        'vue-color': '#287a51',
        'vue-color-hglt': '#68d49e',
        'tailwind-col': '#0d4952',
        'tailwind-col-hglt': '#22d3ee',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

}
