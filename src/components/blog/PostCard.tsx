import { formatMesDiaAnio } from "@/helpers/formatFechaPeru";
import Image from "next/image";
import Link from "next/link";

export type PostCardData = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  cover: { url?: string | null; alt?: string | null };
  tagsExpanded?: Array<{ _id: string; title: string } | null> | null;
  author?: { name: string; image?: { url?: string | null } | null } | null;
};

export const PostCard = ({ post }: { post: PostCardData }) => (
  <Link href={`/blog/${post.slug}`} className="h-full">
    <article className="h-full flex flex-col space-y-4 hover:shadow-2xl p-4 rounded-2xl transition-all cursor-pointer duration-300">
      <div className="w-full h-[200px] overflow-hidden rounded-3xl bg-gray-100 flex items-center justify-center">
        <Image
          src={post.cover.url || ""}
          alt={post.cover.alt || ""}
          width={300}
          height={200}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-full object-cover"
        />
      </div>

      {post.tagsExpanded && post.tagsExpanded.filter((t) => t !== null).length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {post.tagsExpanded.filter((tag) => tag !== null).map((tag) => (
            <span
              key={tag?._id}
              className="text-in-cyan bg-in-cyan/10 px-4 py-1 rounded-full text-sm"
            >
              {tag?.title}
            </span>
          ))}
        </div>
      )}

      <div className="space-y-2">
        <h2 className="font-in-nunito text-2xl line-clamp-2 font-semibold">{post.title}</h2>
        <p className="line-clamp-3 text-sm">{post.excerpt}</p>
      </div>

      <div className="flex items-center justify-between mt-auto pt-4">
        {post.author ? (
          <div className="flex items-center gap-2">
            {post.author.image?.url ? (
              <Image
                src={post.author.image.url}
                alt={post.author.name}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-in-cyan flex items-center justify-center">
                <p className="text-in-blue font-semibold">{post.author.name.charAt(0)}</p>
              </div>
            )}
            <p className="font-semibold">{post.author.name}</p>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-in-cyan flex items-center justify-center">
              <p className="text-in-blue font-semibold">I</p>
            </div>
            <p className="font-semibold">InSalud</p>
          </div>
        )}
        <p className="text-sm">{formatMesDiaAnio(post.publishedAt)}</p>
      </div>
    </article>
  </Link>
);
