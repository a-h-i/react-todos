const HtmlWebpackPlugin  = require('html-webpack-plugin');
function page (title){
  return {
    plugins: [ new HtmlWebpackPlugin({
      title,
      template: 'src/index.html'
    }) ]
  };
}


module.exports = page;