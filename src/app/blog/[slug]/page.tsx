import { EntradaBlog } from "@/components/blog/EntradaBlog";
import { NavBarIntern } from "@/components/common/NavBarIntern";
import { CintilloBarra } from "@/components/home/CintilloBarra";
import { POST_BY_SLUG } from "@/lib/queries";
import { serverClient } from "@/lib/sanity.client";
import { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string }>;
};

async function getData(slug: string) {
    const data = await serverClient.fetch(POST_BY_SLUG, { slug });
    return data;
}

export async function generateMetadata(
    {params }: PageProps,
): Promise<Metadata> {
    const {slug} = await params;
    const data = await getData(slug);
    return {
        title: data[0].title,
        description: data[0].excerpt,
    }
}

export default async function BlogPost({params}: PageProps) {
  const { slug } = await params;

  const data = await getData(slug);

  return (
    <>
      <div className="hidden md:block">
        <CintilloBarra />
      </div>
      <NavBarIntern />
      <EntradaBlog data={data}/>
    </>
  );
}
