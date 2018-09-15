const path = '/code/bt-vue/node_modules/'
// const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
// const smp = new SpeedMeasurePlugin()

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        includePaths: ['node_modules'],
        // implementation: require('sass'),
        implementation: require('node-sass'),
      },
    },
  },
  devServer: {
    proxy: 'http://localhost:8081',
    // overlay: false,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  // SECTION - Chain
  chainWebpack: config => {
    config.when(process.env.NODE_ENV === 'development', config => config.devtool(''))
    config.stats('verbose')
    config.devServer.stats('verbose').clientLogLevel('error')
    config.resolve.alias
      .set('vue-mdc-adapter', 'vue-mdc-adapter/dist')
      .set('material-components-vue', 'material-components-vue/dist')
      .set('~', '/code/bt-vue/node_modules/')
    config
      .plugin('clean-terminal-webpack-plugin')
      .use(require.resolve(`${path}clean-terminal-webpack-plugin`))
    config.plugin('webpack-build-notifier').use(require.resolve(`${path}webpack-build-notifier`), [
      {
        sound: false,
      },
    ])
    // SECTION - Stats
    // config.performance.hints('warning')
    // config
    //   .plugin('speed-measure-webpack-plugin')
    //   .use(require.resolve(`${path}speed-measure-webpack-plugin`))
  },
}
