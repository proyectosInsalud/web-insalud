import { CtaServicios } from "./CtaServicios"
import { BtnReservar } from "@/components/ui/BtnReservar"

export const HeroContent = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 container">
        <div className="font-in-nunito py-36 space-y-4">
          <div className="space-y-6">
            <p className="text-4xl md:text-6xl font-medium text-center text-white">Bienvenido a InSalud</p>
            <h1 className="text-center text-white px-4">Atención especializada en Salud Urológica con enfoque personalizado. </h1>
          </div>
        </div>
        <div className="hidden md:flex items-end justify-between absolute bottom-[42px] left-4 right-4 mx-auto max-w-7xl px-4">
            <CtaServicios />
            <BtnReservar />
        </div>
    </section>
  )
}
