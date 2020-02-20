const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const config = require('./config')
const MODE = 'development'

module.exports = {
  mode: MODE,
  entry: [
    'webpack/hot/dev-server?reload=true',
    `webpack-dev-server/client?http://${config.host}:${config.port}`,
    './src/index.ts',
  ],
  output: {
    path: path.resolve('./dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin.CleanWebpackPlugin({}),
    new HtmlWebpackPlugin({
      template: './www/index.html',
      filename: 'index.html',
    }),
  ],
  optimization: {
    minimize: false,
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
}
