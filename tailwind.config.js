module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'gray-rgb': '#0f0f0f',
        'gray-footer': '#0f0f0f',
        'vue-color': '#287a51',
        'vue-color-hglt': '#41a372',
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
