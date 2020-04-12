const webpack = require("webpack")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const config = require("./config")

const env = process.env.NODE_ENV

console.log("now the env is", env)

module.exports = {
	mode: env,
	devtool: "eval-cheap-source-map",
	entry: [
		"webpack/hot/dev-server?reload=true",
		`webpack-dev-server/client?http://${config.host}:${config.port}`,
		"./src/index.tsx",
	],
	output: {
		path: path.resolve("./dist"),
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
		new webpack.HotModuleReplacementPlugin(),
		new CleanWebpackPlugin.CleanWebpackPlugin({}),
		new HtmlWebpackPlugin({
			template: "./www/index.html",
			filename: "index.html",
		}),
	],
	optimization: {
		minimize: false,
		runtimeChunk: "single",
		namedModules: true,
		splitChunks: {
			chunks: "all",
			cacheGroups: {
				react: {
					test: /react/,
					name: "react",
					priority: 1,
				},
			},
		},
	},
}
