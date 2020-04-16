const webpack = require("webpack")
const merge = require("webpack-merge")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const wpConfig = require("./webpack.config")

module.exports = merge(wpConfig, {
	mode: "production",
	entry: ["./src/index.tsx"],
	devtool: "#source-map",
	output: {
		filename: "[name].bundle.[hash:7].js",
		chunkFilename: "[name].chunk.[chunkhash:7].js",
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin.CleanWebpackPlugin({}),
		new MiniCssExtractPlugin({
			filename: "[name].[chunkhash:7].css",
			// chunkFilename: '[id].[chunkhash:7].css'
		}),
	],
	optimization: {
		minimizer: [
			new TerserPlugin({
				cache: true,
				parallel: true,
				sourceMap: true, // Must be set to true if using source-maps in production
				terserOptions: {
					// https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
				},
			}),
			new OptimizeCssAssetsPlugin(),
		],
	},
})
