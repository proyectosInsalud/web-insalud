import { Button } from "@/components/ui/button";
import { cdn } from "@/utils/cdn";
import Image from "next/image";
import Link from "next/link";

export const MedicTeam = () => {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 items-center">
        <div>
            <div className="space-y-4 md:space-y-6 flex flex-col items-center md:items-start">
                <h2 className="font-in-nunito font-bold text-2xl md:text-4xl lg:text-5xl text-in-blue-dark text-center md:text-left">Un equipo médico de expertos, <span className="text-in-cyan">listos para atenderte.</span> </h2>
                <p className="text-in-blue-title text-center md:text-left">Atiéndete con uno de nuestros +300 especialistas.</p>
                <Button className="bg-in-blue cursor-pointer hover:bg-in-blue-dark transition-all duration-300 rounded-full py-6 px-8 text-white">
                    <Link href="/medicos">
                    Reservar cita
                    </Link>
                </Button>
            </div>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <Image src={cdn("/web/home/main/equipo-medicos-expertos.png")} unoptimized alt="Medic Team" width={500} height={500} className="w-full h-full object-cover"/>
        </div>
      </section>
    </div>
  );
};
