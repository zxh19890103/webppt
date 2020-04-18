const merge = require("webpack-merge")
const wpConfig = require("./webpack-shared.config")
const cfg = require("./config")

module.exports = merge(wpConfig, {
	mode: process.env.NODE_ENV,
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
		runtimeChunk: "single",
	},
})
