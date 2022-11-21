const path = require("path");
const ElementPlus = require("unplugin-element-plus/webpack");

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    plugins: [ElementPlus()],
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "./src/styles/main.scss";'
      }
    },
  },
}
