"use client"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import type { CarouselApi } from "@/components/ui/carousel"

type BlogPost = {
  title: string
  excerpt?: string
  slug: string
  image?: { url?: string; alt?: string }
  category?: { title?: string }
}

export const BlogCarousel = ({ posts }: { posts: BlogPost[] }) => {
  const [api, setApi] = useState<CarouselApi>()

  // 5s de autoplay: suficiente para leer el título antes de que avance sola.
  const autoplay = useMemo(
    () => Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
    []
  )

  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      autoplay.stop()
    }
  }, [autoplay])

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "start" }}
        plugins={[autoplay]}
        className="font-in-poppins"
      >
        <CarouselContent className="-ml-4">
          {posts.map((post) => (
            <CarouselItem key={post.slug} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
              <article className="h-full space-y-4 bg-white border hover:border-in-cyan shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 p-8 rounded-2xl flex flex-col">
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
                  <p className="py-2 px-4 text-in-cyan bg-in-cyan/10 font-medium rounded-full inline-block self-start">
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
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex justify-center gap-3 mt-6">
        <Button
          className="bg-in-blue w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-in-blue/90"
          onClick={() => api?.scrollPrev()}
          aria-label="Artículo anterior"
        >
          <Image src="/svg/arrow-left.svg" alt="" width={20} height={20} />
        </Button>
        <Button
          className="bg-in-blue w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-in-blue/90"
          onClick={() => api?.scrollNext()}
          aria-label="Siguiente artículo"
        >
          <Image src="/svg/arrow-right.svg" alt="" width={20} height={20} />
        </Button>
      </div>
    </div>
  )
}
