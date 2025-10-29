import {createClient} from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const serverClient = createClient({
  projectId: "wma19ek2",
  dataset: "production",
  apiVersion: '2025-09-11',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  perspective: 'published',
});

export const client = createClient({
  projectId: "wma19ek2",
  dataset: "production",
  apiVersion: '2025-09-11',
  useCdn: true,
});

const builder = imageUrlBuilder(serverClient);
export const urlFor = (ref: string) => builder.image(ref);