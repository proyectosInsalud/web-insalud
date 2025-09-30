import { Blog } from "@/components/blog/Blog";
import { HeroBlog } from "@/components/blog/HeroBlog";
import { CintilloBarra } from "@/components/home/CintilloBarra";

type RawSearch = { page?: string | string[] };

export const metadata = {
  title: "Salud Sexual, Noticias de urología y Prevención | Blog InSalud",
  description:
    "Consejos médicos y artículos confiables sobre urología, salud sexual, próstata, prevención y bienestar masculino y femenino. Información médica en Lima.",
  keywords: [
    "articulos de medicina", "artículos médicos", "clínica insalud", "prostata sana", "salud intima", "prevención médica", "articulo medicina", "prevenir prostata", "salud prostática", "bienestar masculino", "tu salud intima", "articulos med", "cuidar la próstata", "prostata saludable", "salud de la prostata", "salud intima femenina", "una prostata sana", "blog salud sexual", "blog urología", "disfunción eréctil", "salud prostática", "prevención médica", "bienestar masculino", "clínica InSalud", "artículos médicos", "salud íntima"
  ],
  authors: [{ name: "InSalud", url: "https://insalud.pe" }],
  openGraph: {
    title: "Salud Sexual, Noticias de urología y Prevención | Blog InSalud",
    description:
      "Consejos médicos y artículos confiables sobre urología, salud sexual, próstata, prevención y bienestar masculino y femenino. Información médica en Lima.",
    url: "https://insalud.pe/blog",
    siteName: "InSalud",
    images: [
      {
        // url: "https://insalud.pe/assets/images/insalud-blog-og.jpg",
        width: 1200,
        height: 630,
        alt: "Blog InSalud",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salud Sexual, Noticias de urología y Prevención | Blog InSalud",
    description:
      "Consejos médicos y artículos confiables sobre urología, salud sexual, próstata, prevención y bienestar masculino y femenino. Información médica en Lima.",
    // images: ["https://insalud.pe/assets/images/insalud-blog-og.jpg"], 
  },
  metadataBase: new URL("https://insalud.pe"),
};

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
