import Image from "next/image";
import { CintilloBarra } from "../home/CintilloBarra";
import { NavBar } from "../common/NavBar";

export const HeaderDiagnosticos = () => {
  return (
    <>
      <CintilloBarra />
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
        <div className="text-center py-20 space-y-4 text-white px-4">
            <h1 className="font-in-nunito text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-semibold">Prevencion Inteligente</h1>
            <p className="font-in-poppins">Diagnósticos que te ayudan a tomar decisiones con anticipación.</p>
        </div>
      </div>
    </>
  );
};
