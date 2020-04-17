const webpack = require("webpack")
const merge = require("webpack-merge")
const wpConfig = require("./webpack.config")
const cfg = require("./config")

const component = "card"

module.exports = merge(wpConfig, {
	mode: "production",
	entry: {
		card: `../src/card.tsx`,
		card2: `../src/card2.tsx`,
	},
	devtool: "#source-map",
	output: {
		path: `${cfg.wwwDir}/cards`,
		filename: `[name].js`,
		libraryTarget: "umd",
		library: "Card_[name]",
		jsonpScriptType: "text/javascript",
	},
	optimization: {
		minimize: false,
		runtimeChunk: false,
	},
})
