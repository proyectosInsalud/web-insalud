import type { MetadataRoute } from "next";
import { serverClient } from "@/lib/sanity.client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://insalud.pe";
  const now = new Date().toISOString();

  // Fetch all blog posts slugs from Sanity
  const posts = await serverClient.fetch(`*[_type == "post" && !draft && defined(publishedAt)]{ "slug": slug.current, _updatedAt }`);

  const blogEntries = posts.map((post: any) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post._updatedAt || now,
  }));

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified: now,
    },
    {
      url: `${siteUrl}/enfermedades`,
      lastModified: now,
    },
    {
      url: `${siteUrl}/tratamientos`,
      lastModified: now,
    },
    {
      url: `${siteUrl}/contacto`,
      lastModified: now,
    },
    {
      url: `${siteUrl}/tratamientos/chequeo-prostatico`,
      lastModified: now,
    },
    {
      url: `${siteUrl}/tratamientos/cauterizacion-laser-vph`,
      lastModified: now,
    },
    {
      url: `${siteUrl}/tratamientos/ondas-de-choque-disfuncion`,
      lastModified: now,
    },
    {
      url: `${siteUrl}/tratamientos/ondas-de-choque-prostatitis`,
      lastModified: now,
    },
    {
      url: `${siteUrl}/tratamientos/vacuna-vph`,
      lastModified: now,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: now,
    },
    {
      url: `${siteUrl}/sedes`,
      lastModified: now,
    },
  ];

  return [...staticEntries, ...blogEntries];
}
