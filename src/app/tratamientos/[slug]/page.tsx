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

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Función para obtener datos (reutilizable)
async function getServicioDetalle(
  slug: string
): Promise<TypeDiagnostico | null> {
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
}

export async function generateMetadata(
  {params }: PageProps,
): Promise<Metadata> {
  const {slug} = await params;

  // fetch post information
  const post = await getServicioDetalle(slug);
  const twitterImage = post?.seo.twitterImage;

  return {
    title: post?.seo.title,
    description: post?.seo.description,
    keywords: post?.seo.keywords,
    alternates: {
      canonical: post?.seo.canonical,
    },
    openGraph: {
      title: post?.seo.ogTitle,
      description: post?.seo.ogDescription,
      url: post?.seo.ogUrl,
      siteName: "InSalud",
      locale: post?.seo.ogLocale,
      type: "website",
    },
    twitter: {
      card: post?.seo.twitterCard || "summary_large_image",  
      title: post?.seo.twitterTitle,
      description: post?.seo.twitterDescription,
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
