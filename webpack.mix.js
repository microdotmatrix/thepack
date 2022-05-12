let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.js('src/js/app.js', 'js')
  .extract(['jquery', 'gsap', 'luge'], 'js/lib.js')
  .sass('src/scss/main.scss', 'css')
  .options({
    processCssUrls: false,
    postCss: [
      require('postcss-import'),
      require('autoprefixer'),
      require('tailwindcss'),
      tailwindcss('tailwind.config.js')
    ],
  })
  .setPublicPath('dist')
  .browserSync({
    proxy: 'localhost/thepack/dist',
    port: 8080,
    watch: true,
    files: ['src/**/*.{html,js,scss}']
  })
  .copy('src/**/*.html', 'dist')
  .copy('src/svg/bootstrap-icons.svg', 'dist/svg')
