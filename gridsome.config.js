const autoprefixer = require("autoprefixer");
const tailwind = require("tailwindcss");
const purgecss = require("purgecss");

const postcssPlugins = [tailwind(), autoprefixer()]

if (process.env.NODE_ENV === "production") postcssPlugins.push(purgecss(require('./purgecss.config.js')));

module.exports = {
  siteName: 'Rafał Pyska / Front-End Developer / Portfolio',
  siteDescription: 'Zajmuję się tworzeniem nowoczesnych stron interentowych, dostosowanych pod każde urządzenie.',
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      },
    },
  }
}
