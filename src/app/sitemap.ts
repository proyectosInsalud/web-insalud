import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://insalud.pe'
  const now = new Date().toISOString()

  return [
    { url: `${siteUrl}/`,             lastModified: now, changeFrequency: 'weekly',  priority: 1 },
    { url: `${siteUrl}/diagnosticos`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/servicios`,    lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/contacto`,     lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]
}
