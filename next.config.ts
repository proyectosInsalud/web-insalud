// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {

    qualities: [75, 85, 90, 95, 100],

    remotePatterns: [
      { protocol: "https", hostname: "cdn.insalud.pe" },
      { protocol: "https", hostname: "prensa.insalud.pe" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },

  async headers() {
    return [
      // Noindex global para el host del CDN
      {
        source: "/:path*",
        has: [{ type: "host", value: "cdn.insalud.pe" }],
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive, nosnippet",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // 👇 Fuerza canónico sin www (cámbialo si quieres www como canónico)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.insalud.pe" }],
        destination: "https://insalud.pe/:path*",
        permanent: true,
      },

      // Viejas URLs del WP -> tus 4 vistas reales
      { source: "/como-me-atiendo", destination: "/contacto", permanent: true },
      {
        source: "/deberes-y-derechos-del-paciente",
        destination: "/",
        permanent: true,
      },
      { source: "/diagnostico", destination: "/diagnosticos", permanent: true },
      { source: "/empleabilidad", destination: "/", permanent: true },
      {
        source: "/libro-de-reclamaciones",
        destination: "/contacto",
        permanent: true,
      },
      { source: "/noisotros", destination: "/", permanent: true },
      { source: "/nosotros", destination: "/", permanent: true },
      { source: "/sedes", destination: "/contacto", permanent: true },
      {
        source: "/jesusmaria-chequeo-prostatico-2/",
        destination: "/contacto",
        permanent: true,
      },
      {
        source: "/jesusmaria-chequeo-prostatico-2",
        destination: "/",
        permanent: true,
      },
      {
        source: "/jesusmaria-ondas-de-choque-1",
        destination: "/",
        permanent: true,
      },
      {
        source: "/jesusmaria-ondas-de-choque-2",
        destination: "/",
        permanent: true,
      },
      // Media heredada de WordPress (evita imágenes rotas de enlaces antiguos)
      {
        source: "/wp-content/uploads/:path*",
        destination: "https://legacy.insalud.pe/wp-content/uploads/:path*",
        permanent: true,
      },

      // Catch-all: manda TODO lo demás a la home,
      // pero NO atrapes raíz ni tus 4 rutas ni assets/sitemaps
      // {
      //   source:
      //     "/:path((?!$|diagnosticos$|servicios$|contacto$|sitemap\\.xml$|robots\\.txt$|favicon\\.ico$|apple-touch-icon\\.png$|manifest\\.json$|_next/|static/|assets/).*)",
      //   destination: "/",
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;
