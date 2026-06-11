import { serverClient } from "@/lib/sanity.client";
import { POSTS_PAGINATED } from "@/lib/queries";
import { PostListType } from "@/types";
import { Suspense } from "react";
import { BlogWithSearch } from "./BlogWithSearch";

const PAGE_SIZE = 8;

type BlogProps = {
    currentPage: number;
    initialData?: PostListType;
}

async function getData(page: number) {
  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  return await serverClient.fetch(POSTS_PAGINATED, { start, end }, { next: { revalidate: 86400 } });
}

export const Blog = async({currentPage = 1, initialData}:BlogProps) => {
  const data:PostListType = initialData || await getData(currentPage);

  return (
    <section className="max-w-7xl container mx-auto px-4">
      <div className="py-10 md:py-12">
        <h2 className="font-in-nunito text-in-blue-title text-3xl md:text-4xl font-semibold text-center">Articulos</h2>
      </div>
      <Suspense>
        <BlogWithSearch currentPage={currentPage} data={data} />
      </Suspense>
    </section>
  )
}



