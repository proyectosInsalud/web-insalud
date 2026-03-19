import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import { TypeDiagnostico } from "@/types";
import { CintilloBarra } from "@/components/home/CintilloBarra";
import { NavBarIntern } from "@/components/common/NavBarIntern";
import { BreadCrumbInsa } from "@/components/common/BreadCrumbInsa";
import { DiagnosticPDPHero } from "@/components/diagnostico/DiagnosticPDPHero";

import { Metadata } from "next";
import { cache } from "react";

export const revalidate = 86400;

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Función para obtener datos
const getTratamientoDetalle = cache(async (
  slug: string
): Promise<TypeDiagnostico | null> => {
  try {
    const detailFilePath = path.join(
      process.cwd(),
      `src/data/enfermedades/detalles/${slug}.json`
    );
    const detailJsonData = await fs.readFile(detailFilePath, "utf-8");
    return JSON.parse(detailJsonData);
  } catch (error) {
    console.error(`Error loading tratamiento ${slug}:`, error);
    return null;
  }
});

export async function generateMetadata(
    { params }: PageProps,
): Promise<Metadata> {
    const { slug } = await params;
    const data = await getTratamientoDetalle(slug);

    if (!data) return { title: 'Enfermedad no encontrada' };

    const title = data.title || "";
    const description = (data as any).parrafo || "";

    return {
        title: title.length > 60 ? title.slice(0, 57) + "..." : title,
        description: description.length > 160 ? description.slice(0, 157) + "..." : description,
        alternates: {
            canonical: `/enfermedades/${slug}`,
        },
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
      <DiagnosticPDPHero
        images={(tratamiento as any).images}
        title={tratamiento.title}
        pasos={(tratamiento as any).pasosDiagnostico}
        duracion={(tratamiento as any).duracion}
      />
    </>
  );
}
