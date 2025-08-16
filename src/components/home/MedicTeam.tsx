'use client'

import { Button } from "@/components/ui/button";
import { useModalStore } from "@/store/modalStore";
import { cdn } from "@/utils/cdn";
import Image from "next/image";

export const MedicTeam = () => {
  const { openReservationModal } = useModalStore()

  return (
     <div className="container mx-auto max-w-6xl px-4 pt-16 md:pt-24">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-4 items-center">
        <div>
            <div className="space-y-4 md:space-y-6 flex flex-col items-center md:items-start">
                <h2 className="font-in-nunito font-bold text-2xl md:text-4xl lg:text-5xl text-in-blue-dark text-center md:text-left">Médicos  expertos en <span className="text-in-cyan"> salud sexual.</span> </h2>
                <p className="text-in-blue-title text-center md:text-left">Atiéndete con uno de nuestros +50 especialistas.</p>
                <Button onClick={() => openReservationModal()} className="bg-in-blue cursor-pointer hover:bg-in-blue-dark transition-all duration-300 rounded-full py-6 px-8 text-white">
                    Reservar cita
                </Button>
            </div>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <Image 
            src={cdn("/web/home/main/equipo-medicos-expertos.png")} 
            alt="Equipo médico de expertos de InSalud" 
            width={500} 
            height={500} 
            className="w-full h-full object-cover"
            priority={false}
            loading="lazy"
            quality={85}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>
    </div>
  );
};
