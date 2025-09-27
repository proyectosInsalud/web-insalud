import { ReservationModal } from "@/components/common/ReservationModal";
import { CintilloBarra } from "@/components/home/CintilloBarra";
import { CarouselSedes } from "@/components/sedes/CarouselSedes";
import { HeroSedes } from "@/components/sedes/HeroSedes";
import { WhatsAppSection } from "@/components/ui/WhatsAppSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sedes de InSalud en Perú y Latinoamérica | Ubicaciones y Citas Médicas",
  description:
    "Encuentra la sede de InSalud más cercana en Lima, Guayaquil o Panamá. Agenda tu cita online y accede a atención médica especializada con tecnología de vanguardia.",
  keywords: [
    "sedes InSalud",
    "ubicaciones InSalud",
    "clínicas InSalud Lima",
    "InSalud Guayaquil",
    "InSalud Panamá",
    "citas médicas online",
    "atención médica especializada",
    "tecnología médica vanguardia",
    "InSalud Perú",
    "InSalud Latinoamérica",
    "reservar cita médica",
    "salud sexual masculina sedes"
  ],
  alternates: {
    canonical: "https://insalud.pe/sedes"
  },
  openGraph: {
    title: "Sedes de InSalud en Perú y Latinoamérica | Ubicaciones y Citas Médicas",
    description:
      "Descubre las sedes de InSalud en Lima, Guayaquil y Panamá. Reserva tu cita online para atención médica especializada con tecnología avanzada.",
    url: "https://insalud.pe/sedes",
    siteName: "InSalud",
    locale: "es_PE",
    type: "website",
    // Uncomment and add image if available
    // images: [
    //   {
    //     url: "https://insalud.pe/og/insalud-sedes-1200x630.jpg",
    //     secureUrl: "https://insalud.pe/og/insalud-sedes-1200x630.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Sedes de InSalud en Perú y Latinoamérica - Atención médica especializada"
    //   }
    // ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sedes de InSalud en Perú y Latinoamérica | Ubicaciones y Citas Médicas",
    description:
      "Encuentra tu sede InSalud más cercana en Lima, Guayaquil o Panamá. Agenda citas online para tratamientos especializados.",
    // Uncomment and add image if available
    // images: [
    //   "https://insalud.pe/og/insalud-sedes-1200x630.jpg"
    // ],
    creator: "@insalud_pe"
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  category: "salud"
};

export default function Sedes() {
    return (
        <>
        <header className='bg-gradient-to-b from-[#012436] to-[#070910]'>
            <CintilloBarra />    
            <HeroSedes />
        </header>
            <main>
                <CarouselSedes />
            </main>
            <WhatsAppSection title="Nuestras sedes en Perú y Latam" subtext="Encuentra la sede de Insalud más cercana en Lima, Guayaquil o Panamá. Agenda tu cita online y accede a atención médica especializada con tecnología de vanguardia."/>
            <ReservationModal /> 
        </>
    )
}