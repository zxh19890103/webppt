const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const webpackConfig = require(`./webpack.config`)

const chalk = require('chalk')
const config = require('./config')
const compiler = webpack(webpackConfig)

const server = new webpackDevServer(compiler, {
  historyApiFallback: true,
  hot: true,
  hotOnly: true,
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
