import { HeaderBannerPage } from "@/components/enfermedades/HeaderBannerPage";
import { CintilloBarra } from "@/components/home/CintilloBarra";
import { ListServices } from "@/components/tratamientos/ListServices";
import type { Metadata } from "next";
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Tratamientos Urológicos y de Salud Sexual | InSalud",
  description:
    "Urólogos expertos en tratamientos de disfunción eréctil, VPH y prostatitis crónica. Diagnóstico, prevención y tratamientos avanzados. ¡Reserva tu cita hoy!",
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
    canonical: "/tratamientos",
  },
  openGraph: {
    title: "Tratamientos Urológicos y de Salud Sexual | InSalud",
    description:
      "Urólogos expertos en tratamientos de disfunción eréctil, VPH y prostatitis crónica. Diagnóstico, prevención y tratamientos avanzados. ¡Reserva tu cita hoy!",
    url: "https://insalud.pe/tratamientos",
    siteName: "InSalud",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "https://insalud.pe/og/tratamientos-1200x630.jpg",
        secureUrl: "https://insalud.pe/og/tratamientos-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "Servicios médicos de urología en InSalud: tratamientos personalizados y exámenes especializados"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Tratamientos Urológicos y de Salud Sexual | InSalud",
    description:
      "Tratamientos médicos personalizados y exámenes de urología especializados en InSalud. Urólogos expertos en Lima y Latinoamérica.",
    images: ["https://insalud.pe/og/tratamientos-1200x630.jpg"],
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
      <HeaderBannerPage 
        image="/images/banner-servicios.png"
        title1="Tratamientos de urología" 
        title2="y salud sexual en Lima"
        paragraph="Soluciones médicas seguras "
        paragraph2="en urología y salud sexual."
        />
      <ListServices />
    </>
  );
}
