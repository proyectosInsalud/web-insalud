
"use client";
import Image from "next/image";
import { NavBar } from "../common/NavBar";
import { CintilloBarra } from "../home/CintilloBarra";

export const HeaderNosotros = () => {
  
  return (
    <div className="h-[480px] lg:h-screen header-section">
      <CintilloBarra />
      <section className="relative">
        <NavBar />
        <Image
            src="/images/nosotros/fondo-nosotros.png"
            alt="Doctores en Insalud"
            width={1920}
            height={1080}
            priority
            className="absolute top-0 left-0 -z-10 h-[480px] lg:h-screen w-screen object-cover"
        />

        <div className="space-y-4 max-w-2xl lg:max-w-5xl text-white mx-auto pt-24 md:pt-32 lg:pt-48 px-4">
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-in-nunito font-bold  ">Clínica líder en urología y medicina regenerativa en LATAM</h1>
            <p className="text-center font-in-poppins text-sm lg:text-lg">Integramos salud sexual, urología y medicina regenerativa con tratamientos estéticos y nutricionales, garantizando resultados reales.</p>
        </div>
      </section>
      
    </div>
  );
};
