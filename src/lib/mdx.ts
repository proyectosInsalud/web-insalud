import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolink from "rehype-autolink-headings";
import { BlogFrontmatter, BlogPostMeta } from "@/types";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

const calcReadingTime = (text: string) => {
  const words = text.trim().split(/\s+/).length;
  const mins = Math.max(1, Math.ceil(words / 220));
  return `${mins} min`;
};

export const getAllSlugs = () =>
  fs.existsSync(CONTENT_DIR)
    ? fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith(".mdx")).map(f => f.replace(/\.mdx$/, ""))
    : [];

export const getAllPosts = (): BlogPostMeta[] => {
  const posts = getAllSlugs().map(slug => {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, `${slug}.mdx`), "utf8");
    const { data, content } = matter(raw);
    const fm = data as Partial<BlogFrontmatter>;
    if (!fm.title || !fm.excerpt || !fm.date) throw new Error(`Frontmatter incompleto en ${slug}.mdx`);

    const meta: BlogPostMeta = {
      slug,
      title: fm.title,
      excerpt: fm.excerpt,
      date: fm.date,
      category: fm.category,
      diagnostico: fm.diagnostico,
      tags: fm.tags ?? [],
      cover: fm.cover,
      ogImage: fm.ogImage,
      author: fm.author ?? "InSalud",
      draft: Boolean(fm.draft),
      readingTime: calcReadingTime(content),
    };
    return meta;
  });

  return posts
    .filter(p => !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
};

export const getPostBySlug = async (slug: string) => {
  const fullPath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const fm = data as BlogFrontmatter;
  if (fm.draft) return null;

  const { content: compiled } = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, [rehypeAutolink, { behavior: "wrap" }]],
      },
    },
    components: {}, // puedes mapear componentes MDX propios si los necesitas
  });

  const meta: BlogPostMeta = { ...fm, slug, readingTime: calcReadingTime(content) };
  return { meta, compiled };
};

export const getAllFacetValues = () => {
  const categories = new Set<string>();
  const diagnosticos = new Set<string>();
  getAllPosts().forEach(p => {
    if (p.category) categories.add(p.category);
    if (p.diagnostico) diagnosticos.add(p.diagnostico);
  });
  return {
    categories: Array.from(categories).sort(),
    diagnosticos: Array.from(diagnosticos).sort(),
  };
};
