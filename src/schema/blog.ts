import { z } from "zod";

export const blogFrontmatterSchema = z.object({
  title: z.string(),
  excerpt: z.string(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Formato YYYY-MM-DD"),
  category: z.string().optional(),
  diagnostico: z.string().optional(),
  tags: z.array(z.string()).optional(),
  cover: z.string().url().or(z.string().startsWith("/images/")).optional(),
  ogImage: z.string().url().optional(),
  author: z.string().optional(),
  draft: z.boolean().optional(),
});

export const blogPostMetaSchema = blogFrontmatterSchema.extend({
  slug: z.string(),
  readingTime: z.string(),
});