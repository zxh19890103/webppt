const webpack = require("webpack")
const merge = require("webpack-merge")
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
		publicPath: "/assets",
	},
	devtool: "#cheap-eval-source-map",
	plugins: [new webpack.HotModuleReplacementPlugin()],
})
