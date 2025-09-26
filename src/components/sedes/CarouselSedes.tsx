"use client";
import { sedesAccordion } from "@/data/sedesAccordion";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "../ui/carousel";
import { useEffect, useState } from "react";
import Image from "next/image";
import { cdn } from "@/utils/cdn";
import Link from "next/link";
import {
  Dialog, 
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { CarouselGallery } from "./CarouselGallery";
import { eventRegisterGtm } from "@/lib/utils";

export const CarouselSedes = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);




  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel setApi={setApi} className="-mt-16 md:-mt-20">
        {" "}
        {/* Carousel a ancho completo */}
        <CarouselContent>
          {sedesAccordion.map((sede, index) => (
            <Dialog key={sede.id}>
              <CarouselItem
                className={`basis-[84%] md:basis-[70%] lg:basis-[60%] xl:basis-[36%]  ${index === 0 ? "ml-4" : ""} ${index === sedesAccordion.length - 1 ? "mr-4" : ""}`}
              >
                {" "}
                {/* ml-4 en primer slide, mr-4 en último para espacio desde bordes */}
                <article className="relative">
                  <Image
                    src={cdn(`web/home/main/sede-accordion-${sede.id}.png`)}
                    alt={`Sede ${sede.name} de InSalud`}
                    width={500}
                    height={300}
                    className="w-full h-[480px] md:h-full object-cover rounded-3xl"
                    quality={85}
                    sizes="(max-width: 768px) 0px, 66vw"
                  />
                  <DialogTrigger className="w-6 h-6 hidden absolute top-6 right-6 z-20">
                    <Image
                      src={`./svg/sedes/gallery-icon.svg`}
                      alt={`Sede ${sede.name} de InSalud`}
                      width={24}
                      height={24}
                      className="w-full h-full"
                    />
                  </DialogTrigger>

                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{sede.name}</DialogTitle>
                      <CarouselGallery />
                    </DialogHeader>
                  </DialogContent>

                  <div className="absolute inset-0 opacity-70 bg-gradient-to-t from-[#0C0F1E] to-[rgba(63,76,146,0.15)] rounded-3xl"></div>
                  <div className="absolute bottom-0 flex flex-col md:flex-row right-0 left-0 text-white p-6 justify-between gap-2">
                    <div className="font-in-poppins font-semibold text-2xl md:font-semibold lg:text-3xl lg:max-w-[240px]">
                      {sede.name}
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="font-in-poppins text-sm md:max-w-[240px]">
                        {sede.description}
                      </div>
                      {(() => {
                        const whatsappMessage = `Hola, vi su web de Insalud y estoy interesado en atenderme en la sede de: ${sede.name}`;
                        const encodedMessage = encodeURIComponent(whatsappMessage);
                        return (
                          <Link
                            href={`https://wa.me/51957016010?text=${encodedMessage}`}
                            target="_blank"
                            onClick={() => eventRegisterGtm("whatsapp_click")}
                            className="text-sm border border-[rgba(255, 255, 255, 0.10)] py-1 px-6 rounded-full bg-gradient-to-b from-[rgba(255,255,255,0.02)] to-[rgba(255,255,255,0.10)] hover:bg-gradient-to-b hover:from-[rgba(255,255,255,0.10)] hover:to-[rgba(255,255,255,0.20)] transition-colors duration-300 self-start"
                          >
                            Agendar
                          </Link>
                        );
                      })()}
                    </div>
                  </div>
                </article>
              </CarouselItem>
            </Dialog>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-8">
          {Array.from({ length: count }, (_, i) => (
            <button
              key={i}
              className={`w-4 h-4 cursor-pointer rounded-full mx-1 ${i + 1 === current ? 'bg-blue-500' : 'bg-gray-300'}`}
              onClick={() => api?.scrollTo(i)}
            />
          ))}
        </div>
      </Carousel>
    </>
  );
};
