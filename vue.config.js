module.exports = {
  pwa: {
    name: 'Erohub',
    themeColor: '#F5F6FA',
    background_color: '#F4F6FA',
    msTileColor: '#F4F6FA',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'white',
    iconPaths: {
      faviconSVG: 'img/icons/favicon.ico',
      favicon32: 'img/icons/icon.png',
      favicon16: 'img/icons/icon.png',
      appleTouchIcon: 'img/icons/icon.png',
      maskIcon: 'img/icons/favicon.ico',
      msTileImage: 'img/icons/icon.png'
    },
    manifestOptions: {
      background_color: '#F5F6FA'
    }
  },
  productionSourceMap: false
}
