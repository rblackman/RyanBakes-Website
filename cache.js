'use strict';

// Workbox RuntimeCaching config: https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.RuntimeCachingEntry
module.exports = [
    {
        urlPattern: /^https:\/\/(?:fonts\.gstatic\.com\/|use\.typekit\.net\/af\/).*$/i,
        handler: 'CacheFirst',
        options: {
            cacheName: 'webfonts',
            expiration: {
                maxEntries: 4,
                maxAgeSeconds: 365 * 24 * 60 * 60 // 365 days
            }
        }
    },
    {
        urlPattern: /^https:\/\/(?:fonts\.googleapis\.com\/|use\.typekit\.net\/[a-z]+\.css).*/i,
        handler: 'StaleWhileRevalidate',
        options: {
            cacheName: 'font-stylesheets',
            expiration: {
                maxEntries: 4,
                maxAgeSeconds: 7 * 24 * 60 * 60 // 7 days
            }
        }
    },
    {
        urlPattern: /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
        handler: 'StaleWhileRevalidate',
        options: {
            cacheName: 'static-font-assets',
            expiration: {
                maxEntries: 4,
                maxAgeSeconds: 7 * 24 * 60 * 60 // 7 days
            }
        }
    },
    {
        urlPattern: /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
        handler: 'StaleWhileRevalidate',
        options: {
            cacheName: 'static-image-assets',
            expiration: {
                maxEntries: 64,
                maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
            }
        }
    },
    {
        urlPattern: /\/_next\/image\?url=.+$/i,
        handler: 'StaleWhileRevalidate',
        options: {
            cacheName: 'next-image',
            expiration: {
                maxEntries: 64,
                maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
            }
        }
    },
    {
        urlPattern: /\.(?:js)$/i,
        handler: 'StaleWhileRevalidate',
        options: {
            cacheName: 'static-js-assets',
            expiration: {
                maxEntries: 32,
                maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
            }
        }
    },
    {
        urlPattern: /\.(?:css|less)$/i,
        handler: 'StaleWhileRevalidate',
        options: {
            cacheName: 'static-style-assets',
            expiration: {
                maxEntries: 32,
                maxAgeSeconds: 30 * 24 * 60 * 60 // 30 dyas
            }
        }
    },
    {
        urlPattern: /\/_next\/data\/.+\/.+\.json$/i,
        handler: 'StaleWhileRevalidate',
        options: {
            cacheName: 'next-data',
            expiration: {
                maxEntries: 32,
                maxAgeSeconds: 24 * 60 * 60 // 24 hours
            }
        }
    },
    {
        urlPattern: /\.(?:json|xml|csv)$/i,
        handler: 'NetworkFirst',
        options: {
            cacheName: 'static-data-assets',
            expiration: {
                maxEntries: 32,
                maxAgeSeconds: 24 * 60 * 60 // 24 hours
            }
        }
    }
];