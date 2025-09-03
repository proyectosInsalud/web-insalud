import fs from "fs/promises";
import path from "path";
import { TypeDiagnostico } from "@/types";
import { CintilloBarra } from "@/components/home/CintilloBarra";
import { notFound } from "next/navigation";
import { NavBarIntern } from "@/components/common/NavBarIntern";
import { BreadCrumbServices } from "@/components/servicios/item/BreadCrumbServices";
import { HeroDiagnostico } from "@/components/servicios/item/HeroDiagnostico";
import { SeccionDatoImpacto } from "@/components/servicios/item/SeccionDatoImpacto";
import Image from "next/image";
import { SeccionBeneficios } from "@/components/servicios/item/SeccionBeneficios";
import { MedicalSupportSection } from "@/components/servicios/item/MedicalSupportSection";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQSection } from "@/components/servicios/item/FAQSection";
import { EquipoMedicoSection } from "@/components/servicios/item/EquipoMedicoSection";
import { HighlightCTASection } from "@/components/servicios/item/HighlightCTASection";

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Función para obtener datos
async function getServicioDetalle(
  slug: string
): Promise<TypeDiagnostico | null> {
  try {
    const detailFilePath = path.join(
      process.cwd(),
      `src/data/servicios/detalles/${slug}.json`
    );
    const detailJsonData = await fs.readFile(detailFilePath, "utf-8");
    return JSON.parse(detailJsonData);
  } catch (error) {
    console.error(`Error loading tratamiento ${slug}:`, error);
    return null;
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
        <HeroDiagnostico tratamiento={tratamiento} />
        <div className="bg-[linear-gradient(180deg,_rgba(86,242,234,0.02)_0%,_rgba(203,255,252,0.42)_50.48%,_#fff_100%)]">
          <SeccionDatoImpacto tratamiento={tratamiento} />
          <SeccionBeneficios tratamiento={tratamiento} />
          <MedicalSupportSection tratamiento={tratamiento} />
        </div>
        <Testimonials testimonials={tratamiento.testimonials} />
        <FAQSection faq={tratamiento.faq} />
        <EquipoMedicoSection equipo={tratamiento.equipo} />
        <HighlightCTASection />
      </div>
    </>
  );
}
