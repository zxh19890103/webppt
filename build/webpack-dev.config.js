const webpack = require("webpack")
const merge = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const wpConfig = require("./webpack-shared.config")
const cfg = require("./config")

module.exports = merge(wpConfig, {
	mode: "development",
	entry: [
		"webpack/hot/dev-server?reload=true",
		`webpack-dev-server/client?http://${cfg.host}:${cfg.port}`,
		cfg.appEntry,
	],
	output: {
		publicPath: "/dev",
	},
	devtool: "#eval-cheap-module-source-map",
	plugins: [
		new HtmlWebpackPlugin({
			template: cfg.indexTpl,
			filename: "index.html",
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
})
