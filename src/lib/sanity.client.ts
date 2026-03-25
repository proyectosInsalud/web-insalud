import {createClient} from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

// Cliente para fetches del servidor (SSR/ISR) - SIN TOKEN para asegurar uso del CDN en producción
export const serverClient = createClient({
  projectId: "wma19ek2",
  dataset: "production",
  apiVersion: '2025-09-11',
  useCdn: false,
  perspective: 'published',
});

// Cliente para previsualización o mutaciones (CON TOKEN)
export const previewClient = createClient({
  projectId: "wma19ek2",
  dataset: "production",
  apiVersion: '2025-09-11',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  perspective: 'previewDrafts',
});

export const client = createClient({
  projectId: "wma19ek2",
  dataset: "production",
  apiVersion: '2025-09-11',
  useCdn: true,
});

const builder = imageUrlBuilder(serverClient);
export const urlFor = (ref: any) => builder.image(ref).auto('format').quality(90);