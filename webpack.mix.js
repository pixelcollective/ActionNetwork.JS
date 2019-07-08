const mix = require('laravel-mix')

const postCssPlugins = [
  require('postcss-import'),
  require('postcss-nested'),
  require('tailwindcss')('./tailwind.config.js'),
]

mix
  .js('./src/script', './dist/action-network.js')
  .postCss('./src/css/style.css', './dist/action-network.css', postCssPlugins)
  .setPublicPath('./dist')
