const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    //不使用箭头函数
    environment: {
      arrowFunction:false
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  //指定环境创建
                  "@babel/preset-env",
                  {
                    //兼容目标浏览器
                    targets: {
                      chrome: "80",
                      ie:"11"
                    },
                    "corejs": "3",
                    "useBuiltIns": "usage",
                  },
                ],
              ],
            },
          },
          "ts-loader",
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  // mode: "production",
  //用来设置引用模板，主要是模块引起的冲突
  resolve: {
    extensions: [".ts", ".js"],
  },
};
