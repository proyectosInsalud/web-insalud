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

// app/(root)/page.tsx o app/layout.tsx
export const metadata:Metadata = {
  title: "Los Mejores Urólogos en Lima | InSalud – Especialistas en Salud Sexual Masculina",
  description:
    "InSalud: urólogos en Lima expertos en disfunción eréctil, VPH y prostatitis crónica. Diagnóstico, prevención y tratamientos avanzados. ¡Reserva tu cita hoy!",
  keywords: [
    "urólogos en Lima",
    "mejores urólogos Lima",
    "disfunción eréctil",
    "VPH tratamiento",
    "prostatitis crónica",
    "salud sexual masculina",
    "clínica urológica Lima",
    "tratamientos urológicos",
    "reserva de citas",
    "InSalud Perú",
    "sedes en Lima y Latinoamérica"
  ],
  alternates: {
    canonical: "https://insalud.pe/"
  },
  openGraph: {
    title: "Los Mejores Urólogos en Lima | InSalud",
    description:
      "Especialistas en urología y salud sexual masculina: disfunción eréctil, VPH y prostatitis crónica. Tecnología avanzada y atención personalizada.",
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
    title: "Los Mejores Urólogos en Lima | InSalud",
    description:
      "Urólogos expertos en Lima para disfunción eréctil, VPH y prostatitis crónica. Atención confiable y resultados reales.",
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

      {/* Modal de reserva */}
      <ReservationModal />
    </div>
  );
}
  