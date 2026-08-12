import { PostListType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { PostCard } from "./PostCard";

type GridBlogProps = {
  data: PostListType;
};

const AD_SLOT = (
  <Link
    key="ad-doctoralia"
    target="_blank"
    href="https://www.doctoralia.pe/j-antonio-grandez-urbina/urologo/jesus-maria"
    className="block h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <Image
      src="/images/blog/aside/doctor-antonio-grandez-doctoralia.png"
      width={300}
      height={200}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      alt="Doctor Antonio Grandez Doctoralia"
      className="w-full h-full object-cover"
    />
  </Link>
);

export const GridBlog = ({ data }: GridBlogProps) => {
  const itemsWithAd = [
    ...data.items.slice(0, 3),
    null, // placeholder para el ad
    ...data.items.slice(3),
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-4">
      {itemsWithAd.map((post) => {
        if (post === null) return <div key="ad">{AD_SLOT}</div>;
        return <PostCard key={post._id} post={post} />;
      })}
    </section>
  );
};
