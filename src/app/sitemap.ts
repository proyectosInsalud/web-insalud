import type { MetadataRoute } from 'next'

function getSiteUrl() {
    const envUrl =
        process.env.NEXT_PUBLIC_SITE_URL ||
        (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "")
    return envUrl || 'http://localhost:3000'
}

// Rutas de navegacion estaticas 
const staticRoutes: string[] = [
    '/',
    '/diagnosticos',
    '/servicios',
]

// 🔧 Rutas de diagnósticos individuales (puedes renombrar slugs)
// const diagnosticosSlugs: string[] = [
//   'eyaculacion-precoz',
//   'disfuncion-erectil',
//   'prostatitis-cronica',
//   'its', // infecciones de transmisión sexual
// ]


export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl()
  const now = new Date()

  return staticRoutes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }))
}