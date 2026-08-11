import { BtnReservar } from "@/components/ui/BtnReservar"
import { CtaTratamientos } from "./CtaServicios"

export const HeroContent = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 container">
        <div className="font-in-nunito pt-36 pb-44 md:py-36 space-y-4">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-center text-white">Los mejores urólogos en Lima </h1>
            <p className="text-center text-white px-4">Especialistas en diagnósticos y tratamientos de prostatitis, disfunción eréctil y enfermedades urológicas.</p>
            {/* CTA mobile: en desktop vive anclado al fondo del hero (bloque de abajo) */}
            <div className="flex md:hidden justify-center">
              <BtnReservar
                source="hero_mobile"
                label="Agenda tu cita"
                className="bg-in-blue hover:bg-in-blue-dark w-full max-w-xs justify-center py-6"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-end justify-between absolute bottom-[42px] left-4 right-4 mx-auto max-w-7xl px-4">
            <CtaTratamientos />
            <BtnReservar source="hero_desktop" />
        </div>
    </section>
  )
}
