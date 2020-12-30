const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "built.js",
    path: resolve(__dirname, "build")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  mode: "development",
  devServer: {
    contentBase: "./build",
    progress: true,
    port: 3000,
    open: true,
    proxy: {
      // 一旦devServer(5000)服务器接受到 / 的请求，就会把请求转发到另外一个服务器(3000)
      "/": {
        target: "http://127.0.0.1:3001",
        changeOrigin: true,
      },
    },
  },
};
