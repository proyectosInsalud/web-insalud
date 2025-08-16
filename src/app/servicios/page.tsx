import { HeaderDiagnosticos } from "@/components/diagnosticos/HeaderDiagnosticos";
import { CintilloBarra } from "@/components/home/CintilloBarra";
import { ListServices } from "@/components/servicios/ListServices";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Servicios y Tratamientos Urológicos | InSalud – Exámenes Médicos Especializados",
  description:
    "Conoce los servicios de InSalud: tratamientos médicos personalizados, exámenes urológicos especializados y procedimientos como vasectomía, cauterización láser y chequeos de próstata en Lima y Latinoamérica.",
  keywords: [
    "urólogo",
    "InSalud",
    "urología",
    "prostatitis",
    "vasectomía",
    "exámenes de urología",
    "tratamientos urológicos",
    "exámenes médicos especializados",
    "cauterización láser",
    "chequeo prostático",
    "clínica urológica Lima"
  ],
  alternates: {
    canonical: "https://www.insalud.pe/servicios"
  },
  openGraph: {
    title: "Servicios y Tratamientos Urológicos | InSalud",
    description:
      "Servicios médicos de urología: tratamientos personalizados, exámenes especializados y procedimientos avanzados como vasectomía y cauterización láser.",
    url: "https://www.insalud.pe/servicios",
    siteName: "InSalud",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "https://www.insalud.pe/og/servicios-1200x630.jpg",
        secureUrl: "https://www.insalud.pe/og/servicios-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "Servicios médicos de urología en InSalud: tratamientos personalizados y exámenes especializados"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios y Tratamientos Urológicos | InSalud",
    description:
      "Tratamientos médicos personalizados y exámenes de urología especializados en InSalud. Urólogos expertos en Lima y Latinoamérica.",
    images: ["https://www.insalud.pe/og/servicios-1200x630.jpg"],
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

export default function page() {
  return (
    <>
      <CintilloBarra />
      <HeaderDiagnosticos />
      <ListServices />
    </>
  );
}
