module.exports = {
  lintOnSave: false,
  parallel: true,
  css: {
    loaderOptions: {
      sass: {
        includePaths: ['node_modules'],
      },
    },
  },
  configureWebpack: config => {
    // delete config.resolve.alias['@']
  },
}
