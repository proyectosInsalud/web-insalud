import Image from "next/image"
import { NavBar } from "../common/NavBar"

export const HeroContacto = () => {
  return (
    <div className="relative">
        <Image
          src="/images/banner-contacto.png"
          alt="banner de diagnósticos"
          width={300}
          height={300}
          className="w-full h-full hidden md:block absolute -z-10 object-cover"
          priority
          unoptimized
        />
        <Image
          src="/images/banner-contacto-mobile.png"
          alt="banner de diagnósticos"
          width={300}
          height={300}
          className="w-full h-full md:hidden absolute -z-10 object-cover"
          priority
          unoptimized
        />
        <NavBar/>
        <div className="text-center pt-6 md:pt-20 pb-16 space-y-4 text-white px-4">
            <h1 className="font-in-nunito text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-8">Confirma tu cita en una de nuestras clínicas</h1>
        </div>
    </div>
  )
}
