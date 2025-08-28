import { HeaderBannerPage } from "@/components/diagnosticos/HeaderBannerPage";
import { ListDiagnostico } from "@/components/diagnosticos/ListDiagnostico";
import { CintilloBarra } from "@/components/home/CintilloBarra";


// app/diagnosticos/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diagnósticos de Urología Confiables | InSalud – Urólogo en Lima",
  description:
    "Diagnósticos precisos en urología con InSalud: eyaculación precoz, disfunción eréctil, prostatitis crónica, ITS y exámenes de urología. Urólogos expertos en Lima. Agenda tu cita.",
  keywords: [
    "urólogo",
    "InSalud",
    "urología",
    "prostatitis",
    "vasectomía",
    "enfermedades y exámenes de urología",
    "diagnóstico urológico",
    "eyaculación precoz",
    "disfunción eréctil",
    "infecciones ITS",
    "Lima"
  ],
  alternates: {
    canonical: "https://www.insalud.pe/diagnosticos"
  },
  openGraph: {
    title: "Diagnósticos de Urología Confiables | InSalud",
    description:
      "Evaluación integral de disfunciones sexuales e infecciones ITS. Urólogos certificados, tecnología avanzada y opciones de tratamiento claras.",
    url: "https://www.insalud.pe/diagnosticos",
    siteName: "InSalud",
    locale: "es_PE",
    type: "website",
    // images: [
    //   {
    //     url: "https://www.insalud.pe/og/diagnosticos-1200x630.jpg",
    //     secureUrl: "https://www.insalud.pe/og/diagnosticos-1200x630.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt:
    //       "InSalud Diagnósticos de Urología en Lima: disfunción eréctil, eyaculación precoz y prostatitis crónica"
    //   }
    // ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Diagnósticos de Urología Confiables | InSalud",
    description:
      "Urólogos en Lima para disfunción eréctil, eyaculación precoz, prostatitis crónica e ITS. Resultados precisos y atención cercana.",
    // images: ["https://www.insalud.pe/og/diagnosticos-1200x630.jpg"],
    creator: "@insalud_pe" // opcional si tienen cuenta en X/Twitter
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  },
  category: "salud",
  formatDetection: {
    email: false,
    address: false,
    telephone: true
  } 
};


export default function Page() {
  return (
    <>
      <CintilloBarra />
      <HeaderBannerPage 
        image="/images/banner-diagnosticos.png"
         title1="Diagnósticos confiables "
         title2="para tu salud íntima"
         paragraph2="opciones de tratamiento claras."
         paragraph="Evaluación precisa, trato cercano y "
      />
      <ListDiagnostico />
    </>
  );
}