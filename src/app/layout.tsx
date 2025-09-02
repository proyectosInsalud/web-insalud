/* eslint-disable @next/next/no-img-element */
import type { Metadata, Viewport } from "next";
import { Toaster } from "@/components/ui/sonner";
import { Geist, Geist_Mono, Nunito, Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/common/Footer";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import Script from "next/script";

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
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
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
    description: "Servicios médicos especializados",
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
        <link rel="dns-prefetch" href="https://cdn.insalud.pe" />
        <link rel="dns-prefetch" href="https://prensa.insalud.pe" />

        {/* Meta Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${PIXEL_ID}');
        fbq('track', 'PageView');
      `}
        </Script>

        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=GTM-PR66DQ7B'+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PR66DQ7B');
          `}
        </Script>

        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "sygd6wo4ge");
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} ${poppins.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PR66DQ7B"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        <Toaster />
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
