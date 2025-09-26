import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import { TypeDiagnostico } from "@/types";
import { CintilloBarra } from "@/components/home/CintilloBarra";
import { NavBarIntern } from "@/components/common/NavBarIntern";
import { BreadCrumbInsa } from "@/components/common/BreadCrumbInsa";
// import { DiagnosticPDPHero } from "@/components/diagnostico/DiagnosticPDPHero";

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Función para obtener datos
async function getTratamientoDetalle(
  slug: string
): Promise<TypeDiagnostico | null> {
  try {
    const detailFilePath = path.join(
      process.cwd(),
      `src/data/diagnosticos/detalles/${slug}.json`
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
  const tratamiento = await getTratamientoDetalle(slug);

  if (!tratamiento) {
    notFound();
  }

  return (
    <>
      <CintilloBarra/>
      <NavBarIntern />
      <BreadCrumbInsa title={tratamiento.title}/>
      {/* <DiagnosticPDPHero
        images={tratamiento.images}
        title={tratamiento.title}
        pasos={tratamiento.pasosDiagnostico}
        duracion={tratamiento.duracion}
      /> */}
    </>
  );
}
