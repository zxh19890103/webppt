/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack")
const webpackConfig = require(`./webpack.dll`)

const compiler = webpack(webpackConfig)
compiler.run((err, stats) => {
	if (err) throw err
	console.log(
		stats.toString({
			colors: true,
		}),
	)
})
