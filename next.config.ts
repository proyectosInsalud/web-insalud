// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.insalud.pe" },
      { protocol: "https", hostname: "prensa.insalud.pe" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },

  async redirects() {
    return [
      // Blog (no hay sección nueva, mándalo a home o a /noticias si la creas)
      { source: "/blog", destination: "/", permanent: true },

      // Cómo me atiendo → podrías llevarlo a contacto o a una landing de pasos
      { source: "/como-me-atiendo", destination: "/contacto", permanent: true },

      // Contacto → ya existe
      { source: "/contacto", destination: "/contacto", permanent: true },

      // Deberes y derechos del paciente → si no hay sección nueva, al home
      { source: "/deberes-y-derechos-del-paciente", destination: "/", permanent: true },

      // Diagnóstico (WordPress) → Diagnosticos (Next.js)
      { source: "/diagnostico", destination: "/diagnosticos", permanent: true },

      // Empleabilidad (no existe en Next, mándalo al home o crea sección)
      { source: "/empleabilidad", destination: "/", permanent: true },

      // Inicio
      { source: "/", destination: "/", permanent: true },

      // Libro de reclamaciones
      { source: "/libro-de-reclamaciones", destination: "/contacto", permanent: true },

      // Nosotros (mal escrito en WP)
      { source: "/noisotros", destination: "/nosotros", permanent: true },
      { source: "/nosotros", destination: "/nosotros", permanent: true },

      // Sedes
      { source: "/sedes", destination: "/sedes", permanent: true },

      // Servicios
      { source: "/servicios", destination: "/servicios", permanent: true },
    ];
  },
};

export default nextConfig;
