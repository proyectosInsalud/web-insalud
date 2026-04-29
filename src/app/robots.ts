// app/robots.ts
import type { MetadataRoute } from 'next'
import { headers } from 'next/headers'

const CANONICAL_HOST = 'insalud.pe'

const NON_CANONICAL_HOSTS = new Set([
  'insalud-latam.com',
  'www.insalud-latam.com',
  'sistemagolf.insalud-latam.com',
  'sistemajm.insalud-latam.com',
  'sistema.insalud-latam.com',
])

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers()
  const host = headersList.get('host') ?? ''
  const hostname = host.split(':')[0]

  const isNonCanonical = NON_CANONICAL_HOSTS.has(hostname)

  if (isNonCanonical) {
    return {
      rules: [{ userAgent: '*', disallow: '/' }],
    }
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin',
          '/intranet',
          '/api',
          '/draft',
          '/privado',
          '/404',
          '/500',
        ],
      },
    ],
    sitemap: `https://${CANONICAL_HOST}/sitemap.xml`,
    host: `https://${CANONICAL_HOST}`,
  }
}
