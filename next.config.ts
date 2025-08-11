import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.insalud.pe",
      },
      {
        protocol: "https",
        hostname: "prensa.insalud.pe",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

};

export default nextConfig;
