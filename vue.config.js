module.exports = {
  pwa: {
    name: 'Erohub',
    themeColor: '#F5F6FA',
    background_color: '#F4F6FA',
    msTileColor: '#F4F6FA',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'white',
    iconPaths: {
      faviconSVG: 'img/icons/favicon.svg',
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/msapplication-icon-144x144.png'
    },
    manifestOptions: {
      background_color: '#F5F6FA'
    }
  },
  productionSourceMap: false,
  // chainWebpack: config => {
  //   config
  //       .plugin('webpack-bundle-analyzer')
  //       .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
  // },
}
