let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.js('src/js/app.js', 'js')
  .sass('src/scss/main.scss', 'css')
  .options({
    postCss: [ tailwindcss('./tailwind.config.js') ],
  })
  .setPublicPath('dist')
  .browserSync({
    proxy: 'localhost/mxr/dist',
    watch: true,
    files: ['src/**/*.{html,js,scss}']
  })
  .copy('src/**/*.html', 'dist')
  .autoload({
    jquery: ['$', 'window.jQuery']
  });