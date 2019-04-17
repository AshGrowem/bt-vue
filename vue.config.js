/// DOCS: https://cli.vuejs.org/config
const { exec } = require('child_process')

module.exports = {
  // https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
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
    // config.performance.hints('warning')
    config.plugins.delete('progress')
    config.devtool('eval') // https://webpack.js.org/configuration/devtool/#devtool
    config.when(process.env.NODE_ENV === 'production', config => config.devtool(''))
    config.plugin('simple-progress-webpack-plugin').use(require.resolve('simple-progress-webpack-plugin'), [
      {
        format: 'minimal',
      },
    ])
    config.plugin('webpack-build-notifier').use(require.resolve('webpack-build-notifier'), [
      {
        sound: false,
        onClick: function() {
          exec('open http://localhost:8080')
        },
      },
    ])
  },
}
