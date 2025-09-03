import { TypeDiagnostico } from "@/types";
import Image from "next/image";

type EquipoMedicoSectionProps = {
  equipo: TypeDiagnostico["equipo"];
};

export const EquipoMedicoSection = ({ equipo }: EquipoMedicoSectionProps) => {
  const equipoTitle = equipo.title.split(" ").map((word, index) => (
    <span
      key={index}
      className={(index + 1) % 2 === 0 ? "text-in-cyan" : "text-in-blue-title"}
    >
      {word}
      {` `}
    </span>
  ));

  return (
    <section className="relative">
      <Image
        src="/svg/onda-degradado.svg"
        alt={equipo.title}
        width={1438}
        height={572}
        className="absolute w-full inset-0 -z-10 left-0 right-0"
      />
      <div className="max-w-7xl mx-auto px-4 font-in-poppins">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16 md:pt-24 lg:pt-32 items-center">
            <Image
              src={equipo.image.src}
              alt={equipo.image.alt}
              width={500}
              height={300}
              className="object-cover w-full mx-auto max-w-[400px]"
            />
            <div className="space-y-4 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-in-nunito text-in-blue-title">
                    {equipoTitle}
                </h2>
                <p className="text-sm md:text-base">{equipo.description}</p>
            </div>
        </div>

      </div>
    </section>
  );
};
