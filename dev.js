/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack")
const webpackDevServer = require("webpack-dev-server")
const webpackConfig = require(`./webpack.config`)

const chalk = require("chalk")
const config = require("./config")
const compiler = webpack(webpackConfig)

const server = new webpackDevServer(compiler, {
	historyApiFallback: true,
	// Enable webpack's Hot Module Replacement feature
	hot: true,
	// Enables Hot Module Replacement (see devServer.hot) without page refresh as a fallback in case of build failures.
	hotOnly: false,
	inline: true,
	contentBase: ["./www/assets"],
	stats: {
		colors: true,
	},
	quiet: true,
	open: true,
})

const { port, host } = config

server.listen(port, host, () => {
	console.log(chalk.green(`Starting server on http://${host}:${port}`))
})
