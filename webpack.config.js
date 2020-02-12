const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')

const MODE = 'development'

module.exports = {
  mode: MODE,
  entry: './src/index.ts',
  output: {
    path: path.resolve('./www/dist'),
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
    ],
  },
  plugins: [new CleanWebpackPlugin.CleanWebpackPlugin({})],
  optimization: {
    minimize: false,
    moduleIds: 'named',
    runtimeChunk: {
      name: "runtime"
    },
    splitChunks: {
      chunks: 'all',
    },
  },
}
