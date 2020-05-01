const webpack = require("webpack")
const merge = require("webpack-merge")

const cfg = require("./config")

module.exports = merge({
	context: __dirname,
	output: {
		path: `${cfg.wwwDir}`,
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
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			},
		],
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new webpack.HashedModuleIdsPlugin({
			hashDigest: "hex",
			hashDigestLength: 7,
			hashFunction: "md5",
		}),
		new webpack.DllReferencePlugin({
			context: __dirname,
			manifest: require(`${cfg.wwwDir}/dll/react.manifest.json`),
		}),
	],
	optimization: {
		runtimeChunk: "single",
	},
})
