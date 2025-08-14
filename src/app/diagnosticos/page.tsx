import { HeaderDiagnosticos } from "@/components/diagnosticos/HeaderDiagnosticos";
import { ListDiagnostico } from "@/components/diagnosticos/ListDiagnostico";
import { CintilloBarra } from "@/components/home/CintilloBarra";


export const metadata = {
  title: "Diagnósticos de Salud Íntima Masculina | InSalud",
  description: "Evaluación y tratamiento de condiciones como eyaculación precoz, disfunción eréctil y prostatitis crónica con especialistas en salud íntima masculina.",
  keywords: [
    'eyaculación precoz',
    'disfunción eréctil',
    'prostatitis crónica',
    'diagnóstico salud íntima',
    'salud sexual masculina',
    'especialistas en Lima',
    'ITS',
  ],
  openGraph: {
    title: "Diagnósticos de Salud Íntima Masculina | InSalud",
    description: "Atención médica especializada en disfunciones sexuales e infecciones ITS con más de 20 especialistas en Lima y Latam.",
    url: "https://www.insalud.pe/diagnosticos",
    sitename: "Insalud",
    locale: "es_PE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Diagnósticos de Salud Íntima Masculina | InSalud",
    description: "Atención médica especializada en disfunciones sexuales e infecciones ITS con más de 20 especialistas en Lima y Latam."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function page() {
  return (
    <>
      <CintilloBarra />
      <HeaderDiagnosticos />
      <ListDiagnostico />
    </>
  );
}