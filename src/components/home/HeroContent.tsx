import { CtaServicios } from "./CtaServicios"
import { BtnReservar } from "@/components/ui/BtnReservar"

export const HeroContent = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 container">
        <div className="font-in-nunito py-36 space-y-4">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-medium text-center text-white">Los mejores urólogos en Lima </h1>
            <p className="text-center text-white px-4">Especialistas en diagnósticos y tratamientos de prostatitis, disfunción eréctil y enfermedades urológicas.</p>
          </div>
        </div>
        <div className="hidden md:flex items-end justify-between absolute bottom-[42px] left-4 right-4 mx-auto max-w-7xl px-4">
            <CtaServicios />
            <BtnReservar />
        </div>
    </section>
  )
}
