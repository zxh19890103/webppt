const merge = require("webpack-merge")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const wpConfig = require("./webpack-shared.config")
const cfg = require("./config")

module.exports = merge(wpConfig, {
	mode: "production",
	entry: cfg.appEntry,
	devtool: false,
	output: {
		filename: "app/[name].bundle.js",
		publicPath: "/",
		chunkFilename: "app/[name].chunk.js",
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
		new CleanWebpackPlugin.CleanWebpackPlugin({
			dangerouslyAllowCleanPatternsOutsideProject: false,
			cleanAfterEveryBuildPatterns: [],
			cleanOnceBeforeBuildPatterns: ["app/*"],
		}),
		new MiniCssExtractPlugin({
			filename: "app/[name].css",
			// chunkFilename: '[id].[chunkhash:7].css'
		}),
		new HtmlWebpackPlugin({
			template: cfg.indexTpl,
			filename: "index.html",
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
