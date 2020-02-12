const webpack = require('webpack')

const config = require(`./webpack.config`)

const compiler = webpack(config)
compiler.watch(
  {
    aggregateTimeout: 400,
  },
  (err, stat) => {
    if (err) throw err
    console.log(
      stat.toString({
        colors: true,
      }),
    )
    // const { startTime, endTime } = stat
  },
)
