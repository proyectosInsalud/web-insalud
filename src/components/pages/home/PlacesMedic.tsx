"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { sedesAccordion } from "@/data/sedesAccordion";
import { cdn } from "@/utils/cdn";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const PlacesMedic = () => {
  const [selectedSede, setSelectedSede] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const selectedSedeInfo = selectedSede 
    ? sedesAccordion.find(sede => sede.id.toString() === selectedSede)
    : undefined;

  const getWhatsAppLink = (sedeName: string) => {
    const message = encodeURIComponent(
      `¡Hola! vi su pagina web y me gustaría agendar una cita en la sede ${sedeName}. ¿Podrían brindarme más información?`
    );
    return `https://wa.me/51957016010?text=${message}`;
  };

  return (
    <div id="sedes" className="container px-4 mx-auto max-w-7xl py-12">
      <section className="flex flex-col gap-4">
        <div className="space-y-4 mb-8">
          <h2 className="text-in-blue-dark text-center font-in-nunito font-bold text-2xl md:text-4xl lg:text-5xl">
          ¿Dónde se ubican las  {` `}
            <span className="text-in-cyan">sedes Insalud?</span>
          </h2>
          <p className="text-in-blue-dark text-center font-in-poppins">
          Contamos con equipos innovadores, modernos y atención especializada en cada sede.
          </p>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="col-span-1 md:col-span-4 font-in-poppins">
            <Accordion 
              type="single" 
              collapsible
              value={selectedSede}
              onValueChange={setSelectedSede}
            >
              {sedesAccordion.map((sede) => (
                <AccordionItem key={sede.id} value={sede.id.toString()}>
                  <AccordionTrigger 
                    className="hover:no-underline lg:text-lg text-in-blue-dark cursor-pointer py-6
                    data-[state=open]:text-in-cyan transition-colors duration-300"
                  >
                    {sede.name}
                  </AccordionTrigger>
                  <AccordionContent className="text-in-gray space-y-4 -mt-1">
                    <p>{sede.description}</p>
                    <Link
                      href={getWhatsAppLink(sede.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-in-blue-dark font-in-poppins inline-flex items-center hover:text-in-cyan transition-colors duration-300"
                    >
                      Consultar ahora
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="hidden md:block col-span-12 md:col-span-8">
            <div className="relative w-full h-[500px] bg-gray-100 rounded-lg overflow-hidden">
              {isLoading && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              )}
              {selectedSedeInfo ? (
                <Image 
                  src={cdn(`web/home/main/sede-accordion-${selectedSede}.png`)}
                  alt={`Sede ${selectedSedeInfo.name}`} 
                  width={500} 
                  height={500}
                  onLoadingComplete={() => setIsLoading(false)}
                  onLoad={() => setIsLoading(false)}
                  className={`w-full h-full object-cover transition-all duration-500
                    ${isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
                  `}
                  priority
                />
              ) : (
                <Image 
                  src={cdn("web/home/main/sede-accordion-0.png")}
                  alt="Sede General" 
                  width={500} 
                  height={500}
                  onLoadingComplete={() => setIsLoading(false)}
                  onLoad={() => setIsLoading(false)}
                  className={`w-full h-full object-cover transition-all duration-500
                    ${isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
                  `}
                  priority
                />
              )}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};
