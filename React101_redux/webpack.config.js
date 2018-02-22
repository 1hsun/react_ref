// 讓你可以動態插入 bundle 好的 .js 檔到 .index.html
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/src/index.html`,
  filename: 'index.html',
  inject: 'body',
});

// entry 為進入點，output 為進行完 eslint、babel loader 轉譯後的檔案位置
module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx$|\.js$/,
        // enforce: 'pre',
        loader: 'eslint-loader',
        include: `${__dirname}/src`,
        exclude: /bundle\.js$/
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: { presets: ['es2015', 'react'], },
      }
    ],
  },
  // 啟動開發測試用 server 設定（不能用在 production）
  devServer: {
    inline: true,
    port: 8008,
  },
  plugins: [HTMLWebpackPluginConfig],
};