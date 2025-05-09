import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/'
        ],
        disallow: [
          '/private/',
          '/admin/',
          '/api/',
          '/*.json$',
          '/*.xml$'
        ]
      },
      {
        userAgent: 'Googlebot',
        allow: [
          '/'
        ],
        disallow: [
          '/private/',
          '/admin/',
          '/api/'
        ]
      },
      {
        userAgent: 'Bingbot',
        allow: [
          '/'
        ],
        disallow: [
          '/private/',
          '/admin/',
          '/api/'
        ]
      }
    ],
    sitemap: 'https://makeupbynadia.com/sitemap.xml',
    host: 'https://makeupbynadia.com'
  }
}
