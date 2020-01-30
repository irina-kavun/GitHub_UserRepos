const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './js/script.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    })
  ],
  devServer: {
    host: "0.0.0.0",
    port: 3000,
  }
};