module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.(svg|png|jpg|jpeg)$/,
        type: 'asset',
        parser: { dataUrlCondition: { maxSize: 2 * 1024 } } // 2kb
      }
    ]
  }
});