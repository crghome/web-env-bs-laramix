let mix = require('laravel-mix');

mix.setPublicPath('./');

mix.js('resources/js/main.js', 'js/main.min.js')
    .js('resources/js/bootstrap.js', 'js/bootstrap.min.js')
    .sourceMaps()
    .version();

mix.sass('resources/scss/main.scss', 'css/main.min.css')
    .sass('resources/scss/bootstrap.scss', 'css/bootstrap.min.css')
    .options({processCssUrls: false, autoprefixer: true})
    .sourceMaps()
    .version();
