const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    require('postcss-import'),
    require('autoprefixer'),
    require('tailwindcss'),
    tailwindcss('tailwind.config.js')
  ]
}
