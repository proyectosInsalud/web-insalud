import { CtaServicios } from "./CtaServicios"
import { BtnReservar } from "@/components/ui/BtnReservar"

export const HeroContent = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 container">
        <div className="font-in-nunito py-36 space-y-4">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-medium text-center text-white">Bienvenido a InSalud</h1>
            <p className="text-center text-white">Tu clínica especializada en Urología, VPH, Prostatitis Crónica y Disfunción Eréctil</p>
          </div>
            <BtnReservar className="md:hidden mx-auto" />
        </div>
        <div className="hidden md:flex items-end justify-between absolute bottom-8 left-4 right-4 mx-auto max-w-7xl px-4">
            <CtaServicios />
            <BtnReservar />
        </div>
    </section>
  )
}
