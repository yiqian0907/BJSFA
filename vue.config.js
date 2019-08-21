module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "./src/style/cart.scss";`
      }
    }
  },
  devServer: {
    proxy: "http://143.167.208.171:45560"
  }
};
