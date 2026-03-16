import type { MetadataRoute } from "next";
import { serverClient } from "@/lib/sanity.client";
import fs from "fs/promises";
import path from "path";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://insalud.pe";
  const now = new Date().toISOString();

  // 1. Fetch all blog posts slugs from Sanity
  const posts = await serverClient.fetch(`*[_type == "post" && !draft && defined(publishedAt)]{ "slug": slug.current, _updatedAt }`);

  const blogEntries = posts.map((post: any) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post._updatedAt || now,
  }));

  // 2. Fetch all treatments from local JSON files
  let treatmentEntries: MetadataRoute.Sitemap = [];
  try {
    const treatmentsDir = path.join(process.cwd(), "src/data/tratamientos/detalles");
    const files = await fs.readdir(treatmentsDir);
    
    treatmentEntries = files
      .filter(file => file.endsWith(".json"))
      .map(file => ({
        url: `${siteUrl}/tratamientos/${file.replace(".json", "")}`,
        lastModified: now, // Simplificado, podrías leer mtime si quisieras
      }));
  } catch (error) {
    console.error("Error generating treatments sitemap:", error);
  }

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
      url: `${siteUrl}/blog`,
      lastModified: now,
    },
    {
      url: `${siteUrl}/sedes`,
      lastModified: now,
    },
  ];

  return [...staticEntries, ...treatmentEntries, ...blogEntries];
}
