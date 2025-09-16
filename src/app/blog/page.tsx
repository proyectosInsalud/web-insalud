import { Blog } from "@/components/blog/Blog";
import { HeroBlog } from "@/components/blog/HeroBlog";
import { CintilloBarra } from "@/components/home/CintilloBarra";

type RawSearch = { page?: string | string[] };

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<RawSearch>;
}) {
  const { page } = await searchParams;

  // Normaliza string | string[]
  const pageStr = Array.isArray(page) ? page?.[0] : page;

  // Convierte a número seguro
  const currentPage = Number(pageStr) || 1;
  const validPage = currentPage > 0 ? currentPage : 1;

  return (
    <div>
      <CintilloBarra />
      <HeroBlog />
      <Blog currentPage={validPage} />
    </div>
  );
}
