import { cdn } from "@/utils/cdn"
import Image from "next/image"

/**
 * Solo diferenciales cualitativos: las cifras (+procedimientos, especialistas,
 * sedes) viven en <CountClients /> para no repetir el mismo dato dos veces
 * en dos formatos distintos.
 */
const RAZONES = [
    "Especialistas certificados en urología y salud sexual masculina",
    "Certificaciones internacionales en calidad médica",
    "Atención especializada en disfunción eréctil y salud prostática",
    "Líderes en tratamientos contra el Virus del Papiloma Humano (VPH)",
]

export const WhyChooseInSalud = () => {
    return (
        <section id="nosotros" className="max-w-7xl mx-auto px-4 container pt-16 md:pt-24">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4">
                <article className="w-full md:w-1/2">
                    <h2 className="font-in-nunito text-in-blue-dark text-3xl md:text-4xl font-bold pb-4 md:pb-0">¿Por qué <br />
                    elegir {" "}
                    <span className="text-in-cyan">InSalud?</span>
                    </h2>
                    <div className="space-y-6">
                        <ul className="space-y-2 mt-6">
                            {RAZONES.map((razon) => (
                                <li key={razon} className="flex items-start">
                                    <span className="text-in-blue-dark mr-3">•</span>
                                    <span className="text-in-gray text-[13px] md:text-base">{razon}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="flex items-center gap-4">
                            <Image 
                                src={cdn("/shared/otros/certificado-seguridad.png")}
                                alt="Certificado de seguridad y calidad" 
                                width={80} 
                                height={80} 
                                className="rounded-lg"
                                quality={90}
                                loading="lazy"
                            />
                            <div>
                                <p className="text-in-cyan font-semibold leading-6 text-lg">Certificado de 
                                    <span className="block text-in-blue-dark">seguridad y calidad</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
                <Image 
                    src={cdn("/web/home/main/doctores-por-que-elegir.png")}
                    alt="Doctores especialistas de InSalud" 
                    width={500} 
                    height={500} 
                    className="rounded-lg max-w-md md:max-w-none w-full md:w-1/2"
                    quality={85}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
        </section>
    )
}
