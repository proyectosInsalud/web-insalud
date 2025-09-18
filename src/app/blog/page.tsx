import { Blog } from "@/components/blog/Blog";
import { HeroBlog } from "@/components/blog/HeroBlog";
import { CintilloBarra } from "@/components/home/CintilloBarra";

type RawSearch = { page?: string | string[] };

export const metadata = {
  title: "Blog InSalud · Salud sexual, urología y prevención",
  description:
    "Explora artículos especializados de InSalud sobre urología, salud sexual masculina y bienestar. Información práctica, prevención, diagnóstico avanzado y tratamientos confiables para tu salud integral en Lima y Latinoamérica.",
  keywords: [
    "urología",
    "salud sexual",
    "disfunción eréctil",
    "higiene íntima",
    "prevención médica",
    "clínica InSalud",
    "bienestar masculino",
    "salud prostática",
    "diagnóstico médico",
    "tratamientos Perú",
    "centro urológico",
    "InSalud Perú"
  ],
  authors: [{ name: "InSalud", url: "https://insalud.pe" }],
  openGraph: {
    title: "Blog InSalud · Salud sexual, urología y prevención",
    description:
      "Información confiable y respaldada por especialistas en salud sexual, urología y prevención. Mejora tu bienestar con los contenidos del blog de InSalud.",
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
    title: "Blog InSalud · Salud sexual, urología y prevención",
    description:
      "Consejos médicos sobre salud sexual y bienestar masculino. Entra al blog de InSalud y aprende a prevenir y mejorar tu calidad de vida.",
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
