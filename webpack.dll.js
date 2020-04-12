const path = require("path")
const webpack = require("webpack")

module.exports = {
	mode: "production",
	entry: {
		react: ["react", "react-dom"],
	},
	output: {
		path: path.join(__dirname, "./www/dll"),
		filename: "[name].dll.js",
		library: "[name]_dll_lib",
		libraryTarget: "umd",
	},
	plugins: [
		new webpack.DllPlugin({
			context: __dirname,
			path: path.join(__dirname, "./www/dll/[name].manifest.json"),
			entryOnly: true,
			name: "[name]_dll_lib",
			format: false,
		}),
	],
}
