'use client'
import { Button } from "@/components/ui/button";
import { useOpenForm } from "@/hooks/useOpenForm";
import { TypeDiagnostico } from "@/types";
import Image from "next/image";



type HeroDiagnosticoProps = {
  tratamiento: TypeDiagnostico;
};

export const HeroService = ({ tratamiento }: HeroDiagnosticoProps) => {

  const { handleTrackReservation } = useOpenForm();

  return (
    <section className="max-w-7xl mx-auto px-4 md:py-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <Image  
          src={tratamiento.hero.image?.src}
          alt={tratamiento.hero.image?.alt}
          width={500}
          height={300}
          className="hidden md:block w-full h-full object-cover md:rounded-2xl md:col-span-5"
        />
        <div className="space-y-6 md:space-y-4 flex flex-col py-2 md:col-span-7">
          <div className="space-y-2">
            <h1 className="text-2xl lg:text-3xl font-semibold font-in-nunito">
              {tratamiento.hero.heading}
            </h1>
            <p className="font-in-poppins text-in-gray-base text-sm lg:text-lg">
              {tratamiento.hero.subheading}
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-in-nunito">Proceso del Tratamiento</p>
            <ol className="space-y-2 pl-4">
              {tratamiento.proceso.items.map((paso, index) => (
                <li
                  key={index}
                  className="font-in-poppins text-xs lg:text-sm text-in-gray-base list-decimal"
                >
                  {paso}
                </li>
              ))}
            </ol>
          </div>
          <div className="space-y-2">
            <p className="font-in-nunito">Duración:</p>
            <p className="font-in-poppins text-xs lg:text-sm text-in-gray-base">
              {tratamiento.proceso.duration}
            </p>
          </div>
            <Button
              onClick={handleTrackReservation}
              className="cursor-pointer bg-in-blue hover:bg-in-blue-dark rounded-2xl mt-auto block w-full md:w-auto md:inline-block self-start text-base py-4 px-12 font-in-poppins"
              size={"personal"}
            >
              {tratamiento.hero.cta.text}
            </Button>
        </div>
      </div>
    </section>
  );
};
