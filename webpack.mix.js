let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

var baseDir = 'thepack';

mix.js('src/js/app.js', 'js')
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
    proxy: ['localhost/'+baseDir+'/dist'],
    watch: true,
    files: ['src/**/*.{html,js,scss}']
  })
  .copy('src/**/*.html', 'dist')
  .autoload({
    jquery: ['$', 'window.jQuery']
  });