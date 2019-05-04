module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "./src/style/cart.scss";`
      }
    }
  },
  devServer: {
    proxy: {
      "^/api": {
        target: "http://143.167.210.245:45560",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
