// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {

    qualities: [75, 85, 90, 95, 100],

    remotePatterns: [
      { protocol: "https", hostname: "cdn.insalud.pe" },
      { protocol: "https", hostname: "prensa.insalud.pe" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "swiperjs.com" },
      { protocol: "https", hostname: "via.placeholder.com" },
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

      // PDF de política de privacidad (estaba dando 404 en la ruta con /tratamientos/)
      {
        source: "/tratamientos/docs/politica-de-privacidad.pdf",
        destination: "/docs/politica-de-privacidad.pdf",
        permanent: true,
      },
      {
        source: "/blog/docs/politica-de-privacidad.pdf",
        destination: "/docs/politica-de-privacidad.pdf",
        permanent: true,
      },

      // Viejas URLs del WP -> tus 4 vistas reales
      { source: "/como-me-atiendo", destination: "/contacto", permanent: true },
      {
        source: "/deberes-y-derechos-del-paciente",
        destination: "/",
        permanent: true,
      },
      { source: "/diagnostico", destination: "/enfermedades", permanent: true },
      { source: "/diagnostico", destination: "/enfermedades", permanent: true },
      { source: "/servicios/chequeo-prostatico", destination: "/tratamientos/chequeo-prostatico", permanent: true },
      { source: "/diagnostico", destination: "/enfermedades", permanent: true },
      { source: "/empleabilidad", destination: "/", permanent: true },
      { source: "/noisotros", destination: "/", permanent: true },
      {
        source: "/jesusmaria-chequeo-prostatico-2/",
        destination: "/contacto",
        permanent: true,
      },
      {
        source: "/chequeo-prostatico-la-prevencion-es-el-primer-paso-hacia-una-vida-saludable",
        destination: "/enfermedades/chequeo-prostatico",
        permanent: true,
      },
      {
        source: "/jesusmaria-chequeo-prostatico-2",
        destination: "/enfermedades/chequeo-prostatico",
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
      {
        source: "/tratamientos/ondas-de-choque",
        destination: "/tratamientos/ondas-de-choque-disfuncion", // Redirigimos a la más común o genérica
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
      //     "/:path((?!$|diagnosticos$|tratamientos$|contacto$|sitemap\\.xml$|robots\\.txt$|favicon\\.ico$|apple-touch-icon\\.png$|manifest\\.json$|_next/|static/|assets/).*)",
      //   destination: "/",
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;
