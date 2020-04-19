const webpack = require("webpack")
const merge = require("webpack-merge")
const wpConfig = require("./webpack-shared.config")
const cfg = require("./config")

module.exports = merge(wpConfig, {
	mode: process.env.NODE_ENV,
	entry: {
		card: `../src/card.tsx`,
		card2: `../src/card2.tsx`,
	},
	devtool: cfg.devtool(),
	output: {
		path: `${cfg.wwwDir}/cards`,
		publicPath: "/",
		filename: `[name].js`,
		libraryTarget: "umd",
		library: "Card_[name]",
		jsonpScriptType: "text/javascript",
	},
	optimization: {
		minimize: false,
		runtimeChunk: false,
	},
	devServer: {
		port: cfg.port,
		host: cfg.host,
		historyApiFallback: true,
		// Enable webpack's Hot Module Replacement feature
		hot: true,
		// Enables Hot Module Replacement (see devServer.hot) without page refresh as a fallback in case of build failures.
		hotOnly: false,
		inline: true,
		publicPath: "/cards",
		contentBase: ["./www"],
		stats: {
			colors: true,
		},
		quiet: true,
		open: true,
	},
	plugins: [new webpack.ProgressPlugin()],
})
