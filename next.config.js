const withPWA = require('next-pwa');
const runtimeCaching = require('./cache.js');

module.exports = withPWA({
  webpack5: true,
  future: {
    strictPostcssConfiguration: true
  },
  pwa: {
    disable: process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_ENABLE_SW !== 'true',
    dest: 'public',
    register: true,
    scope: '/',
    maximumFileSizeToCacheInBytes: 15000000,
    cleanupOutdatedCaches: true,
    buildExcludes: [/chunks\/images\/.*$/],
    dynamicStartUrl: true,
    runtimeCaching
  }
});