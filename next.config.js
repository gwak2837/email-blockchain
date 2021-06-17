module.exports = {
  i18n: {
    locales: ['ko', 'en'],
    defaultLocale: 'ko',
  },
  poweredByHeader: process.env.NODE_ENV === 'development',
  reactStrictMode: process.env.NODE_ENV === 'development',
}
