const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const merge = require("webpack-merge")
const path = require("path")

module.exports = merge({
	context: __dirname,
	output: {
		path: path.resolve("../www/static"),
		publicPath: "/",
		filename: "[name].bundle.js",
		chunkFilename: "[name].chunk.js",
	},
	resolve: {
		extensions: [".ts", ".js", ".tsx"],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "babel-loader",
			},
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	plugins: [
		new webpack.HashedModuleIdsPlugin({
			hashDigest: "hex",
			hashDigestLength: 7,
			hashFunction: "md5",
		}),
		new HtmlWebpackPlugin({
			template: "./www/_index.html",
			filename: "index.html",
		}),
		new webpack.DllReferencePlugin({
			context: __dirname,
			manifest: require("../www/dll/react.manifest.json"),
		}),
	],
	optimization: {
		// minimize: true,
		runtimeChunk: "single",
	},
})
