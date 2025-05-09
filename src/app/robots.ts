import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/api/contact'
        ],
        disallow: [
          '/private/',
          '/admin/',
          '/*.json$',
          '/*.xml$'
        ]
      },
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/api/contact'
        ],
        disallow: [
          '/private/',
          '/admin/'
        ]
      },
      {
        userAgent: 'Bingbot',
        allow: [
          '/',
          '/api/contact'
        ],
        disallow: [
          '/private/',
          '/admin/'
        ]
      }
    ],
    sitemap: 'https://makeupbynadia.com/sitemap.xml',
    host: 'https://makeupbynadia.com'
  }
}
