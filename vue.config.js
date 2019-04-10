// var exec = require('shelljs').exec
// var exec = require('child_process').exec

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        includePaths: ['node_modules'],
        implementation: require('sass'), // Dart
        // implementation: require('node-sass'), // Faster, but may error
      },
    },
  },
  devServer: {
    // open: 'firefox',
    proxy: 'http://localhost:8081',
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  /// Chain
  chainWebpack: config => {
    config.stats('verbose') // https://webpack.js.org/configuration/stats#stats
    config.devtool('eval') // https://webpack.js.org/configuration/devtool/#devtool
    config.when(process.env.NODE_ENV === 'production', config => config.devtool(''))
    config.plugin('clean-terminal-webpack-plugin').use(require.resolve('clean-terminal-webpack-plugin'))
    config.plugin('webpack-build-notifier').use(require.resolve('webpack-build-notifier'), [
      {
        sound: false,
        // onClick: function() {
        //   exec('open http://localhost:8080/', { shell: '/usr/local/bin/bash' })
        // },
      },
    ])
    /// Stats
    // config.performance.hints('warning')
  },
}
