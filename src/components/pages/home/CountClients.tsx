import { cdn } from "@/utils/cdn"
import Image from "next/image"

export const CountClients = () => {
  return (
    <div className="relative">
        <div className="w-32 h-32 bg-in-cyan/30 rounded-full blur-xl shadow-2xl scale-150 absolute top-1/2 -translate-y-1/2 -left-16"></div>
        <div className="w-32 h-32 bg-in-cyan/30 rounded-full blur-xl shadow-2xl scale-150 absolute top-1/2 -translate-y-1/2 -right-16"></div>
        <section className="container mx-auto max-w-5xl px-4 py-12">
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 gap-24">
                <article className="border border-in-cyan rounded-xl flex-col items-center md:items-start justify-center gap-4 py-5 shadow-lg shadow-in-cyan/40">
                    <div className="space-y-2">
                        <div className="flex items-center justify-center gap-4">
                            <Image src={cdn("/shared/iconos/pacientes-atendidos.svg")} alt="Pacientes atendidos" width={42} height={42} className="w-[42px] h-[42px]" />
                            <h3 className="text-3xl font-bold text-in-blue font-in-nunito text-center md:text-left">+6000</h3>
                        </div>
                        <p className="text-sm text-gray-500 font-in-poppins text-center w-full">Pacientes atendidos</p>
                    </div>
                </article>
                <article className="border border-in-cyan rounded-xl flex-col items-center md:items-start justify-center gap-4 py-5 shadow-lg shadow-in-cyan/40">
                    <div className="space-y-2">
                        <div className="flex items-center justify-center gap-4">
                            <Image src={cdn("/shared/iconos/procedimientos-realizados.svg")} alt="Procedimientos realizados" width={42} height={42} />
                            <h3 className="text-3xl font-bold text-in-blue font-in-nunito text-center md:text-left">+3200</h3>
                        </div>
                        <p className="text-sm text-gray-500 font-in-poppins text-center w-full">Procedimientos realizados</p>
                    </div>
                </article>
                <article className="border border-in-cyan rounded-xl flex-col items-center md:items-start justify-center gap-4 py-5 shadow-lg shadow-in-cyan/40">
                        <div className="space-y-2">
                        <div className="flex items-center justify-center gap-4">
                            <Image src={cdn("/shared/iconos/sedes-latam.svg")} alt="Sedes en latam" width={42} height={42} className="w-[42px] h-[42px]" />
                            <h3 className="text-3xl font-bold text-in-blue font-in-nunito text-center md:text-left">+6</h3>
                        </div>
                        <p className="text-sm text-gray-500 font-in-poppins text-center w-full">Sedes en latam</p>
                    </div>
                </article>
            </div>
        </section>
    </div>
  )
}

