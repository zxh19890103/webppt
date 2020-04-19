const path = require("path")

module.exports = {
	port: 9003,
	host: "0.0.0.0",
	wwwDir: path.join(__dirname, "../www"),
	indexTpl: path.join(__dirname, "../src/_index.html"),
	indexTpl4card: path.join(__dirname, "../www/index.html"),
	appEntry: path.join(__dirname, "../src/index.tsx"),
	devtool() {
		const isProd = process.env.NODE_ENV === "production"
		if (isProd) return false
		return "#eval-cheap-module-source-map"
	},
}
