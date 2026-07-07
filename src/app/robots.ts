import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/payment-success',
    },
    sitemap: 'https://jalashay.com/sitemap.xml',
  }
}
