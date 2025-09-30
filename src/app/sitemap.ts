import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://insalud.pe";
  const now = new Date().toISOString();

  return [
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
      url: `${siteUrl}/blog`,
      lastModified: now,
    },
    {
      url: `${siteUrl}/sedes`,
      lastModified: now,
    },
    {
      url: `${siteUrl}/blog/problemas-urologicos-en-jovenes-propensos-a-enfermedades-de-transmision-sexual`,
      lastModified: now,
    },
    {
      url: `${siteUrl}/blog/insalud-empresa-peruana-del-ano-2025-en-salud-especializada`,
      lastModified: now,
    },
    {
      url: `${siteUrl}/blog/in-aesthetics-descubre-tu-belleza-y-libera-tu-mejor-version`,
      lastModified: now,
    },
    {
      url: `${siteUrl}/blog/hombres-jovenes-en-riesgo-por-vph`,
      lastModified: now,
    },
    {
      url: `${siteUrl}/blog/dieta-clave-para-mejorar-la-salud-de-la-prostata`,
      lastModified: now,
    },
    {
      url: `${siteUrl}/blog/insalud-busca-conquistar-latinoamerica-al-2027`,
      lastModified: now,
    },
    {
      url: `${siteUrl}/blog/peruana-insalud-llegara-a-mexico-y-tres-paises-mas-en-2025`,
      lastModified: now,
    },
    {
      url: `${siteUrl}/blog/rompiendo-el-silencio-la-salud-sexual-como-pilar-del-bienestar`,
      lastModified: now,
    },
    {
      url: `${siteUrl}/blog/problemas-de-salud-sexual-en-el-peru`,
      lastModified: now,
    },
    {
      url: `${siteUrl}/blog/revolucionario-tecnica-para-tratar-disfuncion-erectil`,
      lastModified: now,
    },
    {
      url: `${siteUrl}/blog/castracion-quimica-de-que-se-trata-la-propuesta-del-presidente-castillo`,
      lastModified: now,
    },
    {
      url: `${siteUrl}/blog/cuidados-urologicos-en-mujeres`,
      lastModified: now,
    },
    {
      url: `${siteUrl}/blog/prostatitis-cronica-causas-sintomas-y-tratamiento-en-peru`,
      lastModified: now,
    },
    {
      url: `${siteUrl}/blog/cancer-de-prostata-y-prostatitis-cronica-diferencias-y-senales-de-alerta`,
      lastModified: now,
    },
  ];
}
