import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito, Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/common/Footer";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "InSalud - Centro Médico Especializado",
  description: "Centro médico especializado en salud sexual integral. Ofrecemos servicios de urología, ginecología, etc. Con tecnología avanzada y profesionales altamente calificados",
  keywords: "clínica de salud sexual, urología, ginecología, dermatología, cirugía plástica, medicina general, nutrición, endocrinología, gastroenterología, estética, laboratorio clínico, clínica en Lima, clínica en Jesús María, urologo Lima, ginecólogo Lima, salud íntima, vasectomía sin bisturí, disfunción eréctil, infecciones urinarias, control hormonal, estética íntima, clínica Guayaquil, clínica Quito, clínica Panamá, salud sexual masculina, salud sexual femenina, citas médicas, médicos especialistas",
  authors: [{ name: "InSalud" }],
  creator: "InSalud",
  publisher: "InSalud",
  robots: "index, follow",
  openGraph: {
    title: "InSalud - Centro Médico Especializado",
    description: "Servicios médicos especializados con los mejores profesionales",
    type: "website",
    locale: "es_ES",
    siteName: "InSalud",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "InSalud - Centro Médico",
    description: "Servicios médicos especializados",
  },
  themeColor: "#00BEB4", // Color cyan de tu marca
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Preconnect hints para mejorar la carga de recursos del CDN */}
        <link rel="preconnect" href="https://cdn.insalud.pe" />
        <link rel="preconnect" href="https://prensa.insalud.pe" />
        <link rel="dns-prefetch" href="https://cdn.insalud.pe" />
        <link rel="dns-prefetch" href="https://prensa.insalud.pe" />
        
        {/* Preload de fuentes críticas */}
        <link
          rel="preload"
          href="/fonts/nunito-v25-latin-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/poppins-v20-latin-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} ${poppins.variable} antialiased`}
      >
        {children}

        <Footer />
        
        {/* Botón de WhatsApp flotante */}
        <WhatsAppButton 
          phoneNumber="+51957016010"
          message="Vi su página web y me gustaría agendar una cita"
        />
      </body>
    </html>
  );
}
