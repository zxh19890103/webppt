const webpack = require("webpack")
const merge = require("webpack-merge")
const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin

const cfg = require("./config")
const libraryName = "[name]_dll_lib"
const dist = `${cfg.wwwDir}/dll`

module.exports = merge({
	mode: "production",
	context: __dirname,
	entry: {
		react: ["react", "react-dom"],
	},
	devtool: false,
	output: {
		path: dist,
		filename: "[name].dll.js",
		library: libraryName,
		libraryTarget: "umd",
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new CleanWebpackPlugin(),
		new webpack.HashedModuleIdsPlugin({
			hashDigest: "hex",
			hashDigestLength: 7,
			hashFunction: "md5",
		}),
		new webpack.DllPlugin({
			context: __dirname,
			path: `${dist}/[name].manifest.json`,
			entryOnly: true,
			name: libraryName,
			format: false,
		}),
	],
})
