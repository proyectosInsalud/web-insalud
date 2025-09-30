import { HeaderBannerPage } from "@/components/enfermedades/HeaderBannerPage";
import { ListDiagnostico } from "@/components/enfermedades/ListDiagnostico";
import { CintilloBarra } from "@/components/home/CintilloBarra";


// app/enfermedades/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enfermedades Urológicas y de Salud Sexual | InSalud",
  description:
    "Conoce las principales enfermedades urológicas y sexuales: infecciones urinarias, cistitis, próstata inflamada, eyaculación precoz y disfunción eréctil.",
  keywords: [
    "infecciones urinarias", "cistitis", "inflamación de la próstata", "eyaculación", "eyaculación retardada", "eyaculación precoz", "problemas de próstata", "próstata del hombre", "infeccion de orina", "cistitis tratamiento", "urólogo en Lima", "ardor después de orinar", "infeccion de riñon", "cistitis mujer", "eyaculación femenina"
  ],
  alternates: {
    canonical: "/enfermedades"
  },
  openGraph: {
    title: "Enfermedades Urológicas y de Salud Sexual | InSalud",
    description:
      "Conoce las principales enfermedades urológicas y sexuales: infecciones urinarias, cistitis, próstata inflamada, eyaculación precoz y disfunción eréctil.",
    url: "https://insalud.pe/enfermedades",
    siteName: "InSalud",
    locale: "es_PE",
    type: "website",
    // images: [
    //   {
    //     url: "https://insalud.pe/og/enfermedades-1200x630.jpg",
    //     secureUrl: "https://insalud.pe/og/enfermedades-1200x630.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt:
    //       "InSalud Enfermedades de Urología en Lima: disfunción eréctil, eyaculación precoz y prostatitis crónica"
    //   }
    // ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Enfermedades Urológicas y de Salud Sexual | InSalud",
    description:
      "Conoce las principales enfermedades urológicas y sexuales: infecciones urinarias, cistitis, próstata inflamada, eyaculación precoz y disfunción eréctil.",
    // images: ["https://insalud.pe/og/enfermedades-1200x630.jpg"],
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
        image="/images/banner-enfermedades.png"
         title1="Enfermedades Urológicas:"
         title2="Diagnóstico y Tratamientos"
         paragraph="Especialistas en urología, ITS y disfunciones"
         paragraph2="sexuales con atención cercana y soluciones claras"
      />
      <ListDiagnostico />
    </>
  );
}