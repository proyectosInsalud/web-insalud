// src/sanity/fetchers.ts
import { sanityFetch } from './lib/live';
import { client } from './lib/client';
import {
  POSTS_QUERY_DESC,
  POSTS_QUERY_ASC,
  POSTS_COUNT_QUERY,
  POST_BY_SLUG_QUERY,
  CATEGORIES_QUERY,
  DIAGNOSTICOS_QUERY,
} from './queries';

export type PostCard = {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  publishedAt?: string;
  cover?: any;
  excerpt?: string;
  author?: { _id: string; name: string; slug?: string; image?: any };
  category?: { _id: string; title: string; slug?: string };
  diagnostico?: { _id: string; title: string; slug?: string; icon?: string };
};

export type ListArgs = {
  q?: string;
  category?: string;      // slug de categoría
  diagnostico?: string;   // slug de diagnóstico
  sort?: 'recent' | 'oldest';
  page?: number;
  limit?: number;
};

const asPrefix = (s?: string) => {
  if (!s) return undefined;
  const t = s.trim();
  return t ? `${t}*` : undefined;
};

export const listPosts = async (args: ListArgs = {}) => {
  const q = asPrefix(args.q);
  const category = args.category || undefined;
  const diagnostico = args.diagnostico || undefined;
  const sort = args.sort === 'oldest' ? 'oldest' : 'recent';
  const limit = Number.isFinite(args.limit) ? Math.max(1, Math.min(48, Number(args.limit))) : 12;
  const page = Number.isFinite(args.page) ? Math.max(1, Number(args.page)) : 1;
  const offset = (page - 1) * limit;
  const end = offset + limit;

  try {
    // Para que TypeScript no “ensanche” el tipo del query, separo las ramas.
    let itemsRes:
      | Awaited<ReturnType<typeof sanityFetch<typeof POSTS_QUERY_ASC, PostCard[]>>>
      | Awaited<ReturnType<typeof sanityFetch<typeof POSTS_QUERY_DESC, PostCard[]>>>;
    if (sort === 'oldest') {
      itemsRes = await sanityFetch<typeof POSTS_QUERY_ASC, PostCard[]>({
        query: POSTS_QUERY_ASC,
        params: { q, category, diagnostico, offset, end },
      });
    } else {
      itemsRes = await sanityFetch<typeof POSTS_QUERY_DESC, PostCard[]>({
        query: POSTS_QUERY_DESC,
        params: { q, category, diagnostico, offset, end },
      });
    }

    const totalRes = await sanityFetch<typeof POSTS_COUNT_QUERY, number>({
      query: POSTS_COUNT_QUERY,
      params: { q, category, diagnostico },
    });

    const items = itemsRes.data ?? [];
    const total = totalRes.data ?? 0;
    return { items, total, page, limit, pages: Math.max(1, Math.ceil(total / limit)) };
  } catch {
    // Fallback clásico con client.fetch tipado
    const QUERY = sort === 'oldest' ? POSTS_QUERY_ASC : POSTS_QUERY_DESC;
    const [items, total] = await Promise.all([
      client.fetch<PostCard[]>(QUERY, { q, category, diagnostico, offset, end }),
      client.fetch<number>(POSTS_COUNT_QUERY, { q, category, diagnostico }),
    ]);
    return { items: items ?? [], total: total ?? 0, page, limit, pages: Math.max(1, Math.ceil((total ?? 0) / limit)) };
  }
};

export const getPostBySlug = async (slug: string) => {
  if (!slug) return null;
  try {
    const { data } = await sanityFetch<typeof POST_BY_SLUG_QUERY, PostCard>({
      query: POST_BY_SLUG_QUERY,
      params: { slug },
    });
    return data ?? null;
  } catch {
    return client.fetch<PostCard>(POST_BY_SLUG_QUERY, { slug });
  }
};

export const getCategories = async () => {
  type Cat = { _id: string; title: string; slug: string };
  try {
    const { data } = await sanityFetch<typeof CATEGORIES_QUERY, Cat[]>({
      query: CATEGORIES_QUERY,
    });
    return data ?? [];
  } catch {
    return client.fetch<Cat[]>(CATEGORIES_QUERY);
  }
};

export const getDiagnosticos = async () => {
  type Diag = { _id: string; title: string; slug: string; icon?: string };
  try {
    const { data } = await sanityFetch<typeof DIAGNOSTICOS_QUERY, Diag[]>({
      query: DIAGNOSTICOS_QUERY,
    });
    return data ?? [];
  } catch {
    return client.fetch<Diag[]>(DIAGNOSTICOS_QUERY);
  }
};
