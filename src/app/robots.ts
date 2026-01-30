import { MetadataRoute } from 'next'

/**
 * Robots.txt dinámico para Oscar Performance
 * Optimizado para SEO y eficiencia de presupuesto de rastreo
 * Generado automáticamente por Next.js
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/', '/_next/'],
    },
    sitemap: 'https://www.oscarperformance.cl/sitemap.xml',
  }
}
