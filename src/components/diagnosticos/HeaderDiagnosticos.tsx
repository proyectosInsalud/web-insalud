import Image from "next/image";
import { NavBar } from "../common/NavBar";

export const HeaderDiagnosticos = () => {
  return (
    <>
      <div className="relative">
        <Image
          src="/images/banner-diagnosticos.png"
          alt="banner de diagnósticos"
          width={300}
          height={300}
          className="w-full h-full absolute -z-10 object-cover"
          loading="lazy"
          unoptimized
        />
        <NavBar />
        <div className="text-center pt-12 md:pt-20 py-20 space-y-4 text-white px-4">
            <h1 className="font-in-nunito text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">Diagnósticos confiables para tu salud íntima</h1>
            <p className="font-in-poppins">Evaluación precisa, trato cercano y opciones de tratamiento claras.</p>
        </div>
      </div>
    </>
  );
};
