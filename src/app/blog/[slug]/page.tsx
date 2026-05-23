import { EntradaBlog } from "@/components/blog/EntradaBlog";
import { NavBarIntern } from "@/components/common/NavBarIntern";
import { CintilloBarra } from "@/components/home/CintilloBarra";
import { POST_BY_SLUG } from "@/lib/queries";
import { serverClient } from "@/lib/sanity.client";
import { Metadata } from "next";
import { cache } from "react";

export const revalidate = 60;

type PageProps = {
  params: Promise<{ slug: string }>;
};

const getData = cache(async (slug: string) => {
    const data = await serverClient.fetch(POST_BY_SLUG, { slug }, { next: { revalidate: 60 } });
    return data[0];
});

export async function generateStaticParams() {
    const posts = await serverClient.fetch(
        `*[_type == "post" && !draft && defined(publishedAt)]{ "slug": slug.current }`,
        {},
        { next: { revalidate: 3600 } }
    );
    return posts.map((post: any) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata(
    { params }: PageProps,
): Promise<Metadata> {
    const { slug } = await params;
    const data = await getData(slug);
    
    if (!data) return { title: 'Post no encontrado' };

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://insalud.pe";
    const rawTitle = data.seo?.metaTitle || data.title || "";
    const rawDescription = data.seo?.metaDescription || data.excerpt || "";
    
    const metaTitle = rawTitle.length > 60 ? rawTitle.slice(0, 57) + "..." : rawTitle;
    const metaDescription = rawDescription.length > 160 ? rawDescription.slice(0, 157) + "..." : rawDescription;

    return {
        title: metaTitle,
        description: metaDescription,
        alternates: {
            canonical: `${siteUrl}/blog/${slug}`,
        },
        openGraph: {
            title: metaTitle,
            description: metaDescription,
            url: `${siteUrl}/blog/${slug}`,
            type: 'article',
            publishedTime: data.publishedAt,
            images: [
                {
                    url: data.cover?.url || "",
                    alt: data.cover?.alt || data.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: metaTitle,
            description: metaDescription,
            images: [data.cover?.url || ""],
        },
    }
}

export default async function BlogPost({params}: PageProps) {
  const { slug } = await params;

  const data = await getData(slug);

  if (!data) return <div>No se encontró el artículo.</div>;

  return (
    <>
      <div className="hidden md:block">
        <CintilloBarra />
      </div>
      <NavBarIntern />
      <EntradaBlog data={[data]}/>
    </>
  );
}
