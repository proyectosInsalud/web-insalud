import { CintilloBarra } from "@/components/home/CintilloBarra";
import { HeroConvenios } from "@/components/convenios/HeroConvenios";
import { ConveniosGrid } from "@/components/convenios/ConveniosGrid";
import type { Metadata } from "next";

export const revalidate = 86400;
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Convenios de InSalud | Tarifas Preferenciales",
  description:
    "Conoce las empresas, colegios profesionales, universidades y municipalidades con convenio InSalud. Accede a tarifas preferenciales en tus consultas y tratamientos.",
  alternates: {
    canonical: "/convenios",
  },
  openGraph: {
    title: "Convenios de InSalud | Tarifas Preferenciales",
    description:
      "Conoce las empresas e instituciones con convenio InSalud y accede a tarifas preferenciales.",
    url: "https://insalud.pe/convenios",
    siteName: "InSalud",
    locale: "es_PE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ConveniosPage() {
  return (
    <>
      <CintilloBarra />
      <HeroConvenios />
      <ConveniosGrid />
    </>
  );
}
