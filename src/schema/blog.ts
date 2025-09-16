import { z } from "zod";
/** ====== Sub-estructuras ====== */
export const zImageUrl = z.object({
  url: z.string().nullable().optional(), // ← puede no llegar
  alt: z.string().optional().nullable(),
});

export const zAuthor = z.object({
  _id: z.string(),
  image: zImageUrl.default({ url: null }),
  name: z.string(),
  slug: z.string().nullable(),
});

export const zTag = z.object({
  _id: z.string(),
  title: z.string(),
  slug: z.string(),
});

export const zCategory = z.object({
  _id: z.string(),
  title: z.string(),
  slug: z.string(),
});

export const zPTSpan = z.object({
  _key: z.string(),
  _type: z.literal("span"),
  marks: z.array(z.string()),
  text: z.string(),
});
export const zPTMarkDef = z.object({ _key: z.string(), _type: z.string() }).passthrough();
export const zPTBlock = z.object({
  _key: z.string(),
  _type: z.literal("block"),
  children: z.array(zPTSpan),
  markDefs: z.array(zPTMarkDef),
  style: z.string(),
});
export const zPTNode = z.union([zPTBlock]);

export const zPost = z.object({
  _id: z.string(),
  author: zAuthor,
  body: z.array(zPTNode),
  excerpt: z.string(),
  category: zCategory.nullable(),
  cover: zImageUrl, // reutilizamos
  diagnostico: z.object({
    _id: z.string(),
    icon: z.string(),
    slug: z.string(),
    title: z.string(),
  }).nullable().optional(),
  publishedAt: z.string().datetime(),
  slug: z.string(),
  tagsExpanded: z.array(zTag),
  title: z.string(),
});

// 👇 Esto es lo que espera tu Grid: { items: Post[], total: number }
export const zPostList = z.object({
  items: z.array(zPost),
  total: z.number(),
});
