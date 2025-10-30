import { formatMesDiaAnio } from "@/helpers/formatFechaPeru";
import { PostListType, PostType } from "@/types";
import Image from "next/image";
import Link from "next/link";

type GridBlogProps = {
    data: PostListType;
}

export const GridBlog = ({data}: GridBlogProps) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-4">
        {data.items.map((post:PostType, index: number) => {
            if (index === 3) {
                // Contenido personalizado en la 4ta posición (índice 3), como un item más del grid
                return (
                    <Link key={`custom-${index}`} target="_blank" href="https://www.doctoralia.pe/j-antonio-grandez-urbina/urologo/jesus-maria">
                        <Image 
                            key={`custom-${index}`} 
                            src="/images/blog/aside/doctor-antonio-grandez-doctoralia.png" 
                            width={300}
                            height={200}
                        alt="Doctor Antonio Grandez Doctoralia"
                        className="w-full max-h-[380px] object-cover rounded-3xl"
                        />
                    </Link>
                );
            }

            return (
                <Link key={post._id} href={`/blog/${post.slug}`}>
                    <article className="space-y-4 hover:shadow-2xl p-4 rounded-2xl transition-all cursor-pointer duration-300" >
                        <Image src={post.cover.url || ""} alt={post.cover.alt || ""} width={300} height={200} className="w-full max-h-[200px] object-cover rounded-3xl" />
                        <div className="flex gap-2">
                            {post.tagsExpanded?.map((tag) => (
                                <span className="text-in-cyan bg-in-cyan/10 px-4 py-1 rounded-full" key={tag._id}>{tag.title}</span>
                            ))}
                        </div>
                        <div className="space-y-2">
                            <h2 className="font-in-nunito text-2xl line-clamp-2 font-semibold">{post.title}</h2>
                            <p className="line-clamp-3 text-sm" >{post.excerpt}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            {post.author ? (
                                <div className="flex items-center gap-2">
                                    {
                                        post.author.image && post.author.image.url ? (
                                            <Image src={post.author.image.url} alt={post.author.name} width={32} height={32} className="w-8 h-8 rounded-full" />
                                        ) : (
                                            <div className="w-8 h-8 rounded-full bg-in-cyan flex items-center justify-center">
                                                <p className="text-in-blue font-semibold">{post.author.name.charAt(0)}</p>
                                            </div>
                                        )
                                    }
                                    <p className="font-semibold">
                                        {post.author.name}
                                    </p>
                                </div>
                            ) : (
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-in-cyan flex items-center justify-center">
                                        <p className="text-in-blue font-semibold">?</p>
                                    </div>
                                    <p className="font-semibold">Autor Desconocido</p>
                                </div>
                            )}
                            <p className="text-sm">
                                {formatMesDiaAnio(post.publishedAt)}
                            </p>
                        </div>
                    </article>
                </Link>
            );
        })}
    </section>
  )
}
