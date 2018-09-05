module.exports = {
  lintOnSave: false,
  parallel: true,
  css: {
    loaderOptions: {
      sass: {
        // data: '@import "@/global.scss"',
        includePaths: ['node_modules'],
      },
    },
  },
  configureWebpack: config => {
    // delete config.resolve.alias['@']
  },
}
