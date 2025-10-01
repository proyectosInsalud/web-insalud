import { HeroHome } from "@/components/home/HeroHome";
import { FeaturedSpecialties } from "@/components/home/FeaturedSpecialties";
import { WhyChooseInSalud } from "@/components/home/WhyChooseInSalud";
import { ReserveDate } from "@/components/home/ReserveDate";
import { CountClients } from "@/components/home/CountClients";
import { Testimonials } from "@/components/home/Testimonials";
import { MedicTeam } from "@/components/home/MedicTeam";
import { PlacesMedic } from "@/components/home/PlacesMedic";
import { AllAboutInsalud } from "@/components/home/AllAboutInsalud";
import { ReservationModal } from "@/components/common/ReservationModal";
import { testimonials } from "@/data/testimonials";
import { Metadata } from "next";
import { PopUp } from "@/components/ui/PopUp";

// app/(root)/page.tsx o app/layout.tsx
export const metadata:Metadata = {
  title: " InSalud - Clínica de Urología y Salud Sexual en Lima",
  description:
    "Clínica en Lima especializada en urología, salud sexual masculina y femenina, ginecología y medicina integral. Agenda tu cita con especialistas certificados en InSalud.",
  keywords: [
    "infecciones urinarias", "cistitis", "cistitis tratamiento", "salud sexual", "urologia en Lima", "sexualidad masculina", "sexualidad hombre", "infeccion de orina", "cistitis mujer", "chequeo prostático", "control hormonal", "mal de orin", "mal de orina", "ardor después de orinar", "infeccion de riñon", "infeccion urinaria fuerte"
  ],
  alternates: {
    canonical: "https://insalud.pe/"
  },
  openGraph: {
    title: "InSalud - Clínica de Urología y Salud Sexual en Lima",
    description:
      "Clínica en Lima especializada en urología, salud sexual masculina y femenina, ginecología y medicina integral. Agenda tu cita con especialistas certificados en InSalud.",
    url: "https://insalud.pe/",
    siteName: "InSalud",
    locale: "es_PE",
    type: "website",
    // images: [
    //   {
    //     url: "https://insalud.pe/og/insalud-home-1200x630.jpg",
    //     secureUrl: "https://insalud.pe/og/insalud-home-1200x630.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "InSalud - Urólogos en Lima, tratamientos de disfunción eréctil, VPH y prostatitis crónica"
    //   }
    // ]
  },
  twitter: {
    card: "summary_large_image",
    title: "InSalud - Clínica de Urología y Salud Sexual en Lima",
    description:
      "Clínica en Lima especializada en urología, salud sexual masculina y femenina, ginecología y medicina integral. Agenda tu cita con especialistas certificados en InSalud.",
    // images: [
    //   "https://insalud.pe/og/insalud-home-1200x630.jpg"
    // ],
    creator: "@insalud_pe" // opcional si tienen cuenta
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


export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <header className="relative">
        <HeroHome />
      </header>

      <main>
        <ReserveDate/>
        <FeaturedSpecialties/>
        <CountClients />
        <WhyChooseInSalud />
        <MedicTeam />
        <PlacesMedic />
        <AllAboutInsalud />
        <Testimonials testimonials={testimonials} />
      </main>
      <PopUp />

      {/* Modal de reserva */}
      <ReservationModal />
    </div>
  );
}
  