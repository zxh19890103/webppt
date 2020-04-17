const path = require("path")

module.exports = {
	port: 9003,
	host: "0.0.0.0",
	wwwDir: path.join(__dirname, "../www"),
	indexTpl: path.join(__dirname, "../www/_index.html"),
	appEntry: path.join(__dirname, "../src/index.tsx"),
}
