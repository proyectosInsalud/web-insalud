import { serverClient } from "@/lib/sanity.client"
import { HOME_POSTS } from "@/lib/queries"
import { BlogCarousel } from "./BlogCarousel"
import Link from "next/link"

type LatestPost = {
  title: string
  excerpt?: string
  slug: string
  image?: { url?: string; alt?: string }
  category?: { title?: string }
}

const getHomePosts = async (): Promise<LatestPost[]> => {
  try {
    const data = await serverClient.fetch<{ items?: LatestPost[] }>(
      HOME_POSTS,
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
  const posts = await getHomePosts()

  if (posts.length === 0) return null

  return (
    <div id="blog" className="container mx-auto max-w-7xl px-4 pt-16 md:pt-24">
      <section>
        <div className="text-center space-y-4 mb-10">
          <h2 className="font-in-lato text-in-blue-dark text-center leading-8 text-[28px] md:text-4xl lg:text-5xl font-semibold">Todo sobre <span className="text-in-cyan">salud</span></h2>
          <p className="font-in-poppins text-[13px] md:text-base text-in-blue-dark">Consejos y prevención en salud sexual y urología</p>
        </div>

        <BlogCarousel posts={posts} />

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
