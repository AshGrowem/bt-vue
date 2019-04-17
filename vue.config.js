/// DOCS: https://cli.vuejs.org/config
const { exec } = require('child_process')
const Fiber = require('fibers')

module.exports = {
  // https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        includePaths: ['node_modules'],
        implementation: require('sass'), // Dart
        fiber: Fiber, // speeds up Dart
        // implementation: require('node-sass'), // Faster, but may error
      },
    },
  },
  devServer: {
    proxy: 'http://localhost:8081',
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  /// Chain
  chainWebpack: config => {
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
    config.plugin('clean-terminal-webpack-plugin').use(require.resolve('clean-terminal-webpack-plugin'))
  },
}
