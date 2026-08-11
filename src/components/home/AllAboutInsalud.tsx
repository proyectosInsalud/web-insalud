import { serverClient } from "@/lib/sanity.client"
import { LATEST_POSTS } from "@/lib/queries"
import Image from "next/image"
import Link from "next/link"

type LatestPost = {
  title: string
  excerpt?: string
  slug: string
  image?: { url?: string; alt?: string }
  category?: { title?: string }
}

const getLatestPosts = async (): Promise<LatestPost[]> => {
  try {
    const data = await serverClient.fetch<{ items?: LatestPost[] }>(
      LATEST_POSTS,
      {},
      { next: { revalidate: 86400 } }
    )
    return data?.items ?? []
  } catch (error) {
    // Si Sanity falla no tumbamos la home: simplemente ocultamos el bloque.
    console.error("[AllAboutInsalud] no se pudieron cargar los posts:", error)
    return []
  }
}

export const AllAboutInsalud = async () => {
  const posts = await getLatestPosts()

  if (posts.length === 0) return null

  return (
    <div id="blog" className="container mx-auto max-w-7xl px-4 pt-16 md:pt-24">
      <section>
        <div className="text-center space-y-4 mb-10">
          <h2 className="font-in-lato text-in-blue-dark text-center leading-8 text-[28px] md:text-4xl lg:text-5xl font-semibold">Todo sobre <span className="text-in-cyan">salud</span></h2>
          <p className="font-in-poppins text-[13px] md:text-base text-in-blue-dark">Consejos y prevención en salud sexual y urología</p>
        </div>

        <div className="font-in-poppins grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <article key={post.slug} className="space-y-4 bg-white border shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 rounded-2xl flex flex-col">
              {post.image?.url && (
                <Image
                  src={post.image.url}
                  alt={post.image.alt || post.title}
                  width={400}
                  height={200}
                  className="w-full h-[200px] object-cover rounded-[10px]"
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              )}
              {post.category?.title && (
                <p className="py-2 px-4 text-in-cyan bg-in-bg-testimonials inline-block self-start">
                  {post.category.title}
                </p>
              )}
              <div className="space-y-1 flex-1">
                <h3 className="font-semibold text-lg text-in-blue-title line-clamp-2">{post.title}</h3>
                {post.excerpt && <p className="line-clamp-2">{post.excerpt}</p>}
              </div>
              <Link href={`/blog/${post.slug}`} className="text-in-cyan">
                Leer más
              </Link>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/blog"
            className="font-in-poppins text-in-cyan border border-in-cyan rounded-full py-3 px-8 hover:bg-in-cyan hover:text-white transition-colors"
          >
            Ver todos los artículos
          </Link>
        </div>
      </section>
    </div>
  )
}
