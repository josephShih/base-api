// const WebpackBar = require('webpackbar')

module.exports = {
  webpack: (original, options, webpack) => {
    const config = {
      ...original
    }
    config.module.rules.push({
      test: /\.(sql)$/,
      exclude: /node_modules/,
      loader: 'raw-loader'
    })
    config.plugins.push(
      new webpack.EnvironmentPlugin({
        NODE_ENV: 'development',
        DEBUG: false,
        BABEL_DISABLE_CACHE: 1
      })
    )
    return config
  }
}
