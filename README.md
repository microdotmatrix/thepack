This is my boilerplate
======
###### *There are many like it but this one is mine...*

![Screenshot](https://github.com/microdotmatrix/thepack/blob/master/src/img/webpack-kit-screenshot.png "Screenshot of index page")

Made this repo to hold a basic skeleton package I've pieced together of the tools I would start pretty much any web development project with. It is simple, relatively unopinionated, and easy to configure. Quick synopsis:

### NPM DevDependencies:
- Webpack
- Babel
- Sass
- PostCSS

Update: So I dropped Laravel's Mix compiler for Webpack and finally committed to using standard Webpack for this. Mix is great, and I honestly prefer it to bootstrap a project quickly because it uses a much cleaner and more
intuitive syntax... but I'm trying to be mindful of standardization and best-practice, so I went this route instead. I've configured it to compile my JS modules with Babel, minification through the Terser plugin. For my
stylesheets I've got Sass and PostCSS running together; I'm a faithful devotee to Sass for writing my CSS, but have recently become a fan of Tailwind, so PostCSS is necessary. I don't personally prefer utility-based styling syntax - unless
working with others on something - but using Tailwind's @apply function to shorthand redundant CSS and better standardize spacing/sizing is a huge efficiency boost. The utility class syntax is handy for sandboxing, and
makes it easy to scale up for team based projects. PostCSS's scalable plugin based architecture is very useful as well. I have Webpack's Mini CSS Extract plugin compiling my stylesheets into normal CSS files rather than importing to JS,
just because this is a pretty standard boilerplate, but if reconfigured with a JS framework like React or Vue, that's an easy switch.

Expanding on this foundation, I have a couple of templating and aesthetic development packages for my front end toolkit that I typically find useful in just about any project...
* jQuery
* GSAP
* Gerillass
* Accoutrement
* Tailwind v.3
* Open Props
* Bootstrap Icons
