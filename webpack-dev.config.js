const webpack = require("webpack")
const merge = require("webpack-merge")
const wpConfig = require("./webpack.config")
const config = require("./config")

module.exports = merge(wpConfig, {
	mode: "development",
	entry: [
		"webpack/hot/dev-server?reload=true",
		`webpack-dev-server/client?http://${config.host}:${config.port}`,
		"./src/index.tsx",
	],
	devtool: "#cheap-eval-source-map",
	plugins: [new webpack.HotModuleReplacementPlugin()],
})
