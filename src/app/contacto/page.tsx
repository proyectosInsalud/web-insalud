import { FormContactSection } from "@/components/contacto/FormContactSection";
import { HeroContacto } from "@/components/contacto/HeroContacto";
import { CintilloBarra } from "@/components/home/CintilloBarra";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Contacto y Citas Médicas | InSalud en Lima",
  description:
    "Agenda tu cita. Saca tu cita médica por WhatsApp o formulario web. Tu clínica urológica de confianza. Horario de atención: Lunes a Sábado: 9 am a 7 pm.",
  keywords: [
    "contacto InSalud", "citas médicas Lima", "agenda urólogo", "WhatsApp InSalud", "clínica urológica Lima", "agendar cita médica", "especialistas urología", "clinicas urologicas", "cita medica", "cita medico", "hora médica", "cita medica online", "sacar cita medica", "essalud cita", "cita medica essalud", "salud cita", "citasmedicas"
  ],
  alternates: {
    canonical: "/contacto"
  },
  openGraph: {
    title: "Contacto y Citas Médicas | InSalud en Lima",
    description:
      "Agenda tu cita. Saca tu cita médica por WhatsApp o formulario web. Tu clínica urológica de confianza. Horario de atención: Lunes a Sábado: 9 am a 7 pm.",
    url: "https://insalud.pe/contacto",
    siteName: "InSalud",
    locale: "es_PE",
    type: "website",
    // images: [
    //   {
    //     url: "https://insalud.pe/og/contacto-1200x630.jpg",
    //     secureUrl: "https://insalud.pe/og/contacto-1200x630.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Contacto InSalud: agenda tu cita en nuestras clínicas de urología en Lima"
    //   }
    // ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto y Citas Médicas | InSalud en Lima",
    description:
      "Agenda tu cita. Saca tu cita médica por WhatsApp o formulario web. Tu clínica urológica de confianza. Horario de atención: Lunes a Sábado: 9 am a 7 pm.",
    // images: ["https://insalud.pe/og/contacto-1200x630.jpg"],
    creator: "@insalud_pe"
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
    email: true,
    address: true,
    telephone: true
  }
}


export default function page() {
  return (
    <>
      <CintilloBarra/>
      <HeroContacto />
      <FormContactSection />
    </>
  )
}
