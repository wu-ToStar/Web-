const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ['./src/index.ts'],
  output: {
    path: resolve(__dirname, "dist"),
    filename: "js/bundle.js",
    //不使用箭头函数
    environment: {
      arrowFunction: false,
      const: false,
    },
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
                      ie: "11",
                    },
                    corejs: "3",
                    useBuiltIns: "usage",
                  },
                ],
              ],
            },
          },
          "ts-loader",
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          // MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            ident: "postcss",
            options: {
              postcssOptions: {
                plugins: [require("postcss-preset-env")()],
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    // new CleanWebpackPlugin(),
    // new MiniCssExtractPlugin({
    //   filename: "css/built.css",
    // }),
  ],
  // mode: "production",
  //用来设置引用模板，主要是模块引起的冲突
  resolve: {
    extensions: [".ts", ".js"],
  },
  mode:"development"
};
