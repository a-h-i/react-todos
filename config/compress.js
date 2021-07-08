const CompressionPlugin = require("compression-webpack-plugin");

module.exports = () => ({
  plugins: [
    new CompressionPlugin({
      algorithm: 'gzip',
      compressionOptions: {
        level: 9
      }
    })
  ]
})