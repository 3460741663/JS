const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    path.resolve(__dirname, './src/index.js')
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test:/\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              // modules: true // css-module css模块化
              modules: {
                mode: 'local',
                localIdentName: '[path][name][hash:base64:5]'
              }
            }
          },
          'sass-loader'
        ]
        // style-loader把前面产生的结果插入到style中
      }
    ]
  },
  devServer: {
    hot: true,
    // 指定静态资源从哪里来
    contentBase: path.join(__dirname, './src/')
  },
  plugins: [
    new HtmlWebPackPlugin({
			template: './index.html',
    }),
    new CopyWebpackPlugin([
      {from:'src/asserts/', to:'asserts/'}
    ]),
    new MiniCssExtractPlugin({
      // 和引入时的css保持一致
      filename: '[name].css',
    })
  ]
}