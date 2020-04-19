/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack")
const WebpackDevServer = require("webpack-dev-server")
const webpackConfig = require(`./webpack-dev.config`)

const chalk = require("chalk")
const config = require("./config")
const compiler = webpack(webpackConfig)

const { port, host } = config

const server = new WebpackDevServer(compiler, {
	historyApiFallback: true,
	// Enable webpack's Hot Module Replacement feature
	hot: true,
	// Enables Hot Module Replacement (see devServer.hot) without page refresh as a fallback in case of build failures.
	hotOnly: false,
	inline: true,
	publicPath: "/dev",
	contentBase: ["./www"],
	stats: {
		colors: true,
	},
	quiet: true,
	open: true,
	openPage: "/dev",
})

server.listen(port, host, () => {
	console.log(chalk.green(`Starting server on http://${host}:${port}`))
})
