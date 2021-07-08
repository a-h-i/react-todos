const ESLintPlugin = require('eslint-webpack-plugin');

exports.js = () => ({
  plugins: [
    new ESLintPlugin()
  ]
});