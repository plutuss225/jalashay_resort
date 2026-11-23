import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/payment-success',
          '/*.mp4$',
          '/*.webm$',
        ],
      },
      {
        userAgent: [
          'AhrefsBot',
          'SemrushBot',
          'MJ12bot',
          'DotBot',
          'PetalBot',
          'Bytespider',
          'Amazonbot',
          'ClaudeBot',
          'GPTBot',
          'CCBot',
        ],
        disallow: ['/'],
      },
    ],
    sitemap: 'https://jalashay.com/sitemap.xml',
  }
}

