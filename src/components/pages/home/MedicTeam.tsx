import { Button } from "@/components/ui/button";
import Link from "next/link";

export const MedicTeam = () => {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 items-center">
        <div>
            <div className="space-y-6">
                <h2 className="font-in-nunito font-bold text-5xl text-in-blue-dark">Un equipo médico de expertos, <span className="text-in-cyan">listos para atenderte.</span> </h2>
                <p className="text-in-blue-title">Atiéndete con uno de nuestros +300 especialistas.</p>
                <Button className="bg-in-blue rounded-full py-6 px-8 text-white">
                    <Link href="/medicos">
                    Ver Staff Médico
                    </Link>
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
};
