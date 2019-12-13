module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],
  pluginOptions: {
    i18n: {
      locale: 'en', // The locale of project localization
      fallbackLocale: 'en', // The fallback locale of project localization
      localeDir: 'locales', // The directory where store localization messages of project
      enableInSFC: true // Enable locale messages in Single file components
    }
  },
  lintOnSave: true,
  devServer: {
    proxy: 'http://localhost:8080/',
    port: 8085,
  }
}
