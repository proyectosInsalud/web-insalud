"use client";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import Image from "next/image";
// import Link from "next/link";
import { useModalStore } from "@/store/modalStore";
import { eventRegisterGtm } from "@/lib/utils";

export const FeaturedSpecialties = () => {
  const { openReservationModal } = useModalStore();

  const handleOpenReservationModal = () => {
    eventRegisterGtm("booking_start")
    openReservationModal()
  }

  return (
    <div
      id="servicios"
      className="max-w-7xl mx-auto px-4 container pt-16 md:pt-24 md:space-y-6 lg:space-y-8"
    >
      <div>
        <h2 className="text-center text-[28px] leading-9 md:text-5xl font-in-nunito font-bold text-in-blue-dark">
          Tratamientos para enfermedades <span className="text-in-cyan">urológicas</span>
        </h2>
        <p className="text-center font-in-poppins text-[13px] md:text-base text-in-blue-title py-4 px-2 mb-2">
          Tecnología avanzada y tratamientos personalizados, pensados para tu
          salud masculina.
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-3 flex flex-row md:flex-col gap-4 border items-center justify-center">
          <div className="p-0 w-5/12 md:w-full h-full grid">
            <Image
              src={"/images/tratamiento-disfuncion-erectil.png"}
              alt={"Disfunción Eréctil"}
              width={200}
              height={200}
              className="w-full h-full md:h-[240px] object-cover rounded-lg"
              quality={85}
              sizes="(max-width: 768px) 42vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="w-7/12 md:w-full pr-1 md:pr-0 md:space-y-4">
            <div className="p-0">
              <div className="py-1 md:px-2 md:py-4 space-y-2 text-in-blue-title md:h-[150px]">
                <CardTitle className="text-sm md:text-xl font-in-poppins font-semibold">
                  Tratamiento de Disfunción Eréctil
                </CardTitle>
                <p className="pb-1 md:pb-0 font-in-nunito leading-5 md:leading-relaxed text-xs md:text-base line-clamp-3">
                  Logra erecciones más firmes y seguras con diagnóstico
                  especializado y tratamientos innovadores.
                </p>
              </div>
            </div>
            <div className="p-0 mt-auto">
              <div className="flex items-center justify-start md:gap-6 gap-2 w-full md:mb-4">
                <Button
                  size={"personal"}
                  onClick={handleOpenReservationModal}
                  className="text-white font-in-poppins font-normal bg-in-blue border-in-blue border-2 md:px-4 md:py-2 rounded-full transition-all duration-150 hover:bg-in-blue/90 hover:text-white text-xs md:text-base cursor-pointer w-1/2 text-center md:w-auto h-auto"
                >
                  Reservar <span className="hidden xl:inline">ahora</span>
                </Button>
                {/* <Link
                  href={``}
                  className="text-in-blue-title font-in-poppins pointer-events-none font-medium transition-all duration-300 border-in-blue-title border-2 py-1.5 md:px-4 md:py-2 rounded-full hover:bg-in-blue-title hover:text-white text-xs md:text-base p-0.5 w-1/2 text-center md:w-auto"
                >
                  Conoce <span className="hidden xl:inline">más</span>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-3 flex flex-row md:flex-col gap-4 border items-center justify-center">
          <div className="p-0 w-5/12 md:w-full h-full grid">
            <Image
              src={"/images/tratamiento-vph.png"}
              alt={"Tratamiento del Virus del Papiloma Humano (VPH)"}
              width={200}
              height={200}
              className="w-full h-full md:h-[240px] object-cover rounded-lg"
              loading="lazy"
              quality={85}
              sizes="(max-width: 768px) 42vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="w-7/12 md:w-full pr-1 md:pr-0 md:space-y-4">
            <div className="p-0">
              <div className="py-1 md:px-2 md:py-4 space-y-2 text-in-blue-title md:h-[150px]">
                <CardTitle className="text-sm md:text-xl font-in-poppins font-semibold">
                  Tratamiento del Virus del Papiloma Humano (VPH)
                </CardTitle>
                <p className="pb-1 md:pb-0 font-in-nunito leading-5 md:leading-relaxed text-xs md:text-base line-clamp-3">
                  Diagnóstico y tratamiento del VPH con pruebas avanzadas,
                  incluyendo penescopia a precio accesible y atención por
                  urólogos expertos.
                </p>
              </div>
            </div>
            <div className="p-0 mt-auto">
              <div className="flex items-center justify-start md:gap-6 gap-2 w-full md:mb-4 ">
                <Button
                  size={"personal"}
                  onClick={handleOpenReservationModal}
                  className="text-white font-in-poppins font-normal bg-in-blue border-in-blue border-2 md:px-4 md:py-2 rounded-full transition-all duration-150 hover:bg-in-blue/90 hover:text-white text-xs md:text-base cursor-pointer w-1/2 text-center md:w-auto h-auto"
                >
                  Reservar <span className="hidden xl:inline">ahora</span>
                </Button>
                {/* <Link
                  href={``}
                  className="text-in-blue-title font-in-poppins pointer-events-none font-medium transition-all duration-300 border-in-blue-title border-2 py-1.5 md:px-4 md:py-2 rounded-full hover:bg-in-blue-title hover:text-white text-xs md:text-base p-0.5 w-1/2 text-center md:w-auto"
                >
                  Conoce <span className="hidden xl:inline">más</span>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-3 flex flex-row md:flex-col gap-4 border items-center justify-center">
          <div className="p-0 w-5/12 md:w-full h-full grid">
            <Image
              src={"/images/tratamiento-prostatitis.png"}
              alt={"Tratamiento de la Prostatitis"}
              width={200}
              height={200}
              className="w-full h-full md:h-[240px] object-cover rounded-lg"
              quality={95}
              sizes="(max-width: 768px) 42vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="w-7/12 md:w-full pr-1 md:pr-0 md:space-y-4">
            <div className="p-0">
              <div className="py-1 md:px-2 md:py-4 space-y-2 text-in-blue-title md:h-[150px]">
                <CardTitle className="text-sm md:text-xl font-in-poppins font-semibold">
                  Solución a la Prostatitis Crónica
                </CardTitle>
                <p className="pb-1 md:pb-0 font-in-nunito leading-5 md:leading-relaxed text-xs md:text-base line-clamp-3">
                  Tratamiento especializado para prostatitis y enfermedades
                  urológicas con urólogos certificados de InSalud.
                </p>
              </div>
            </div>
            <div className="p-0 mt-auto">
              <div className="flex items-center justify-start md:gap-6 gap-2 w-full md:mb-4 ">
                <Button
                  size={"personal"}
                  onClick={handleOpenReservationModal}
                  className="text-white font-in-poppins font-normal bg-in-blue border-in-blue border-2 md:px-4 md:py-2 rounded-full transition-all duration-150 hover:bg-in-blue/90 hover:text-white text-xs md:text-base cursor-pointer w-1/2 text-center md:w-auto h-auto"
                >
                  Reservar <span className="hidden xl:inline">ahora</span>
                </Button>
                {/* <Link
                  href={``}
                  className="text-in-blue-title font-in-poppins pointer-events-none font-medium transition-all duration-300 border-in-blue-title border-2 py-1.5 md:px-4 md:py-2 rounded-full hover:bg-in-blue-title hover:text-white text-xs md:text-base p-0.5 w-1/2 text-center md:w-auto"
                >
                  Conoce <span className="hidden xl:inline">más</span>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
