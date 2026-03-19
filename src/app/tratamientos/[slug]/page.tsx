import fs from "fs/promises";
import path from "path";
import { TypeDiagnostico } from "@/types";
import { CintilloBarra } from "@/components/home/CintilloBarra";
import { notFound } from "next/navigation";
import { NavBarIntern } from "@/components/common/NavBarIntern";
import { BreadCrumbServices } from "@/components/tratamientos/item/BreadCrumbServices";
import { HeroService } from "@/components/tratamientos/item/HeroService";
import { SeccionDatoImpacto } from "@/components/tratamientos/item/SeccionDatoImpacto";
import Image from "next/image";
import { SeccionBeneficios } from "@/components/tratamientos/item/SeccionBeneficios";
import { MedicalSupportSection } from "@/components/tratamientos/item/MedicalSupportSection";
// import { Testimonials } from "@/components/home/Testimonials";
import { FAQSection } from "@/components/tratamientos/item/FAQSection";
import { EquipoMedicoSection } from "@/components/tratamientos/item/EquipoMedicoSection";
import { HighlightCTASection } from "@/components/tratamientos/item/HighlightCTASection";
import { ReservationModal } from "@/components/common/ReservationModal";
import { Metadata  } from "next";
import { cache } from "react";

export const revalidate = 3600;

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Función para obtener datos (reutilizable)
const getServicioDetalle = cache(async (
  slug: string
): Promise<TypeDiagnostico | null> => {
  try {
    const detailFilePath = path.join(
      process.cwd(),
      `src/data/tratamientos/detalles/${slug}.json`
    );
    const detailJsonData = await fs.readFile(detailFilePath, "utf-8");
    return JSON.parse(detailJsonData);
  } catch (error) {
    console.error(`Error loading tratamiento ${slug}:`, error);
    return null;
  }
});

export async function generateStaticParams() {
  try {
    const treatmentsDir = path.join(process.cwd(), "src/data/tratamientos/detalles");
    const files = await fs.readdir(treatmentsDir);
    return files
      .filter(file => file.endsWith(".json"))
      .map(file => ({
        slug: file.replace(".json", ""),
      }));
  } catch (error) {
    console.error("Error generating treatments static params:", error);
    return [];
  }
}

export async function generateMetadata(
  {params }: PageProps,
): Promise<Metadata> {
  const {slug} = await params;

  // fetch post information
  const post = await getServicioDetalle(slug);
  const twitterImage = post?.seo.twitterImage;

  const rawTitle = post?.seo.title || "";
  const rawDescription = post?.seo.description || "";
  const metaTitle = rawTitle.length > 60 ? rawTitle.slice(0, 57) + "..." : rawTitle;
  const metaDescription = rawDescription.length > 160 ? rawDescription.slice(0, 157) + "..." : rawDescription;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: post?.seo.keywords,
    alternates: {
      canonical: post?.seo.canonical,
    },
    openGraph: {
      title: (post?.seo.ogTitle || "").length > 60 ? (post?.seo.ogTitle || "").slice(0, 57) + "..." : (post?.seo.ogTitle || ""),
      description: (post?.seo.ogDescription || "").length > 160 ? (post?.seo.ogDescription || "").slice(0, 157) + "..." : (post?.seo.ogDescription || ""),
      url: post?.seo.ogUrl,
      siteName: "InSalud",
      locale: post?.seo.ogLocale,
      type: "website",
    },
    twitter: {
      card: post?.seo.twitterCard || "summary_large_image",  
      title: (post?.seo.twitterTitle || "").length > 60 ? (post?.seo.twitterTitle || "").slice(0, 57) + "..." : (post?.seo.twitterTitle || ""),
      description: (post?.seo.twitterDescription || "").length > 160 ? (post?.seo.twitterDescription || "").slice(0, 157) + "..." : (post?.seo.twitterDescription || ""),
      images: twitterImage ? [twitterImage] : undefined,
      creator: "@insalud_pe"
    },

    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    },
    category: "salud",
  }
  
}



export default async function TratamientoDetallePage({ params }: PageProps) {
  const { slug } = await params;
  const tratamiento = await getServicioDetalle(slug);

  if (!tratamiento) {
    notFound();
  }

  return (
    <>
      <div className="relative">
        <Image
          src={tratamiento.hero.image?.src}
          alt={tratamiento.hero.image?.alt}
          width={500}
          height={300}
          className="w-full md:hidden -z-10 pt-6"
        />
        <div className="absolute md:relative top-0 left-0 right-0">
          <CintilloBarra />
          <NavBarIntern />
        </div>
        <BreadCrumbServices title={tratamiento.title} />
        <HeroService tratamiento={tratamiento} />
        <div className="bg-[linear-gradient(180deg,_rgba(86,242,234,0.02)_0%,_rgba(203,255,252,0.42)_50.48%,_#fff_100%)]">
          <SeccionDatoImpacto tratamiento={tratamiento} />
          <SeccionBeneficios tratamiento={tratamiento} />
          <MedicalSupportSection tratamiento={tratamiento} />
        </div>
        {/* <Testimonials testimonials={tratamiento.testimonials} /> */}
        <FAQSection tratamiento={tratamiento} />
        <EquipoMedicoSection equipo={tratamiento.equipo} />
        <HighlightCTASection tratamiento={tratamiento} />
      </div>
      <ReservationModal />
    </>
  );
}
