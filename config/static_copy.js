const CopyPlugin = require('copy-webpack-plugin');

module.exports = (patterns) => ({
  plugins: [
    new CopyPlugin({
      patterns
    })
  ]
});