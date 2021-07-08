const path = require('path');
const { mode } = require('webpack-nano/argv');
const { merge } =  require('webpack-merge');
const  { page, devServer, style, lint, babel, fonts, images, staticCopy, compress } =  require('./webpack.parts');

const commonConfig = merge([
  { entry: { app: './src/entry.jsx' }, 
    output: {
      path: path.join(__dirname, "dist"), 
      filename: "[name].js", // Emit app.js by capturing entry name
      clean: true
    }
  },
  page('Bynar Systems'), // page title is argument
  lint.js(),
  fonts.googleFonts([
    { family: 'Amiri', variants: [ '400', '700' ], display: 'swap' },
    { family: 'Cormorant', variants: [ '400', '700' ], display: 'swap' },
    { family: 'Quicksand', variants: [ '400', '700' ], display: 'swap' },
    { family: 'Gruppo', variants: [ '400' ], display: 'swap' }
  ]),
  babel(),
  style(),
  images(),
  staticCopy([
    { from: 'src/robots.txt', to: 'robots.txt' }
  ]),
  compress()
]);


const productionConfig = merge([]);

const developmentConfig = merge(devServer());

const getConfig = (mode) => {
  switch(mode) {
  case 'production':
    return merge(commonConfig, productionConfig, { mode });
  case 'development':
    return merge(commonConfig, developmentConfig, { mode });
  default:
    throw new Error(`Unknown mode ${mode}`);
  }
}


module.exports = getConfig(mode);