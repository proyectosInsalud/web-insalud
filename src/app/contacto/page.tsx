import { FormContactSection } from "@/components/contacto/FormContactSection";
import { HeroContacto } from "@/components/contacto/HeroContacto";
import { CintilloBarra } from "@/components/home/CintilloBarra";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Contacto y Citas | InSalud – Urólogo en Lima",
  description:
    "Confirma tu cita en InSalud. Atención rápida y personalizada por urólogos certificados. Contáctanos por WhatsApp, teléfono o formulario y visita nuestras sedes en Lima.",
  keywords: [
    "contacto",
    "agenda tu cita",
    "urólogo en Lima",
    "InSalud",
    "whatsapp insalud",
    "teléfono insalud",
    "clínicas de urología",
    "sedes InSalud",
    "formulario de contacto",
    "urología"
  ],
  alternates: {
    canonical: "/contacto"
  },
  openGraph: {
    title: "Contacto y Citas | InSalud",
    description:
      "Agenda tu consulta urológica en nuestras clínicas. Escríbenos o llama y recibe atención clara y personalizada.",
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
    title: "Contacto y Citas | InSalud",
    description:
      "Agenda tu cita con nuestros urólogos en Lima. Contáctanos por WhatsApp, teléfono o formulario.",
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
