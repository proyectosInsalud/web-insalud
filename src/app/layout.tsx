import type { Metadata, Viewport } from "next";
import { Toaster } from "@/components/ui/sonner";
import { Geist, Geist_Mono, Nunito, Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/common/Footer";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { PopUpTienda } from "@/components/ui/PopUpTienda";
import { CookieConsent } from "@/components/common/CookieConsent";
import { TrackingScripts } from "@/components/common/TrackingScripts";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: true,
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: "#00BEB4",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "InSalud - Centro Médico Especializado",
  description:
    "Centro médico especializado en salud sexual integral. Ofrecemos servicios de urología, ginecología, etc. Con tecnología avanzada y profesionales altamente calificados",
  keywords:
    "clínica de salud sexual, urología, ginecología, dermatología, cirugía plástica, medicina general, nutrición, endocrinología, gastroenterología, estética, laboratorio clínico, clínica en Lima, clínica en Jesús María, urologo Lima, ginecólogo Lima, salud íntima, vasectomía sin bisturí, disfunción eréctil, infecciones urinarias, control hormonal, estética íntima, clínica Guayaquil, clínica Quito, clínica Panamá, salud sexual masculina, salud sexual femenina, citas médicas, médicos especialistas",
  authors: [{ name: "InSalud" }],
  publisher: "InSalud",
  metadataBase: new URL("https://insalud.pe"),
  alternates: { canonical: "/" },
  robots: "index, follow",
  openGraph: {
    title: "InSalud - Centro Médico Especializado",
    description:
      "Servicios médicos especializados con los mejores profesionales",
    type: "website",
    locale: "es_ES",
    siteName: "InSalud",
  },
  twitter: {
    card: "summary_large_image",
    title: "InSalud - Centro Médico",
    description: "Tratamientos médicos especializados",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "1404063285054270";
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Preconnect hints para mejorar la carga de recursos del CDN */}
        <link rel="preconnect" href="https://cdn.insalud.pe" />
        <link rel="preconnect" href="https://prensa.insalud.pe" />
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <link rel="dns-prefetch" href="https://cdn.insalud.pe" />
        <link rel="dns-prefetch" href="https://prensa.insalud.pe" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
      </head>
      <body
        suppressHydrationWarning
        className={`${nunito.variable} ${poppins.variable} antialiased`}
      >
        {/* GTM, Meta Pixel, Metricool y Clarity solo se cargan si el usuario acepta cookies */}
        <TrackingScripts pixelId={PIXEL_ID} />
        <Toaster />
        {children}

        <Footer />

        {/* Popup de tienda virtual */}
        <PopUpTienda />

        {/* Botón de WhatsApp flotante */}
        <WhatsAppButton
          phoneNumber="+51957016010"
          message="Vi su página web y me gustaría agendar una cita"
        />

        {/* Banner de consentimiento de cookies */}
        <CookieConsent />
      </body>
    </html>
  );
}
