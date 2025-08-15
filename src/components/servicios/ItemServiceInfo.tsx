import Image from "next/image"
import { Button } from "../ui/button"

export const ItemServiceInfo = () => {
  return (
    <div className="space-y-2">
          <div className="flex gap-4">
            <Image
              src="/svg/icon-location.svg"
              alt="Icono ubicación insalud"
              width={64}
              height={64}
              className="w-4"
            />
            <p>Golf los Incas 206, Surco, Lima</p>
          </div>
          <div className="flex gap-4 mb-6">
            <Image
              src="/svg/icon-phone.svg"
              alt="Icono telefono insalud"
              width={64}
              height={64}
              className="w-4"
            />
            <p>967 798 974</p>
          </div>
          <Button
            className="w-full bg-in-cyan text-sm font-in-nunito rounded-full hover:bg-in-cyan/80 cursor-pointer"
            size={"personal"}
          >
            Solicitar Cita
          </Button>
        </div>
  )
}
