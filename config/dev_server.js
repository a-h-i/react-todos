const { WebpackPluginServe } = require('webpack-plugin-serve');

module.exports =  function() {
  return {
    watch: true,
    devtool: 'inline-source-map',
    plugins: [
      new WebpackPluginServe({
        port: process.env.PORT || 8080,
        static: './dist',
        liveReload: true,
        compress: true,
        waitForBuild: true,
        hmr: 'refresh-on-failure'
      })
    ]
  }
}