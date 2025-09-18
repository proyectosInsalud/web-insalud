import { serverClient } from "@/lib/sanity.client";
import { GridBlog } from "./GridBlog";
import { POSTS_PAGINATED } from "@/lib/queries";
import { PaginationPage } from "./PaginationPage";
import { PostListType } from "@/types";

const PAGE_SIZE = 6;

type BlogProps = {
    currentPage: number;
}

async function getData(page: number) {
  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  return await serverClient.fetch(POSTS_PAGINATED, { start, end }, {next: {revalidate: 60}});
}

export const Blog = async({currentPage = 1}:BlogProps) => {
  const data:PostListType = await getData(currentPage);

  return (
    <section className="max-w-7xl container mx-auto px-4">
      <div className="py-10 md:py-12">
        <h2 className="font-in-nunito text-in-blue-title text-3xl md:text-4xl font-semibold text-center">Articulos</h2>
      </div>
      <GridBlog data={data} />
      <PaginationPage totalItems={data.total} sizePage={PAGE_SIZE} currentPage={currentPage} />
      {/* {JSON.stringify(data)} */}
    </section>
  )
}



