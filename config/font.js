const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin")

exports.loader = () => ({
  module: {
    rules: [
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        type: "asset/resource",
      }
    ]
  }
});

exports.googleFonts = (fonts) => ({
  plugins: [
    new GoogleFontsPlugin({
      fonts,
      formats: [ 'woff', 'woff2' ],
      local: true,
      path: 'fonts/',
      filename: 'font_faces.css'
    })
  ]
});