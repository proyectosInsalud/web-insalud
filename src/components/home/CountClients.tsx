import { cdn } from "@/utils/cdn"
import { STATS_LABEL } from "@/data/stats"
import Image from "next/image"

const KPIS = [
    {
        icon: cdn("/shared/iconos/u-pacientes-atendidos.svg"),
        alt: "Procedimientos realizados en InSalud",
        value: STATS_LABEL.procedimientos,
        label: "Procedimientos realizados",
    },
    {
        icon: cdn("/shared/iconos/u-procedimientos-realizados.svg"),
        alt: "Tratamientos exitosos en InSalud",
        value: STATS_LABEL.tratamientosExitosos,
        label: "Tratamientos exitosos",
    },
    {
        icon: "/svg/doctor-problema.svg",
        alt: "Especialistas certificados de InSalud",
        value: STATS_LABEL.especialistas,
        label: "Especialistas certificados",
    },
    {
        icon: cdn("/shared/iconos/u-sedes-latam.svg"),
        alt: "Sedes de InSalud en Latinoamérica",
        value: STATS_LABEL.sedes,
        label: "Sedes especializadas",
    },
]

export const CountClients = () => {
    return (
        <div className="relative pt-16 md:pt-24">
            <div className="hidden z-20 md:block w-32 h-32 bg-in-cyan/30 rounded-full blur-xl shadow-2xl scale-150 absolute top-1/2 -translate-y-1/2 -left-16"></div>
            <div className="hidden md:block w-32 h-32 bg-in-cyan/30 rounded-full blur-xl shadow-2xl scale-150 absolute top-1/2 -translate-y-1/2 -right-16"></div>
            <section className="container mx-auto max-w-5xl px-4 py-2">
                <div className="grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-4">
                    {KPIS.map((kpi) => (
                        <article
                            key={kpi.label}
                            className="border border-in-cyan rounded-xl flex flex-col items-center justify-center gap-1 py-5 px-2"
                        >
                            <Image
                                src={kpi.icon}
                                alt={kpi.alt}
                                width={36}
                                height={36}
                                className="w-9 h-9"
                            />
                            <h3 className="text-2xl md:text-3xl font-bold text-in-blue font-in-nunito text-center">
                                {kpi.value}
                            </h3>
                            <p className="text-xs md:text-sm text-gray-500 font-in-poppins text-center leading-tight">
                                {kpi.label}
                            </p>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    )
}
