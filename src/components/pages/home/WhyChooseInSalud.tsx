import { cdn } from "@/utils/cdn"
import Image from "next/image"

export const WhyChooseInSalud = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 container">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4">
                <article className="w-full md:w-1/2">
                    <h2 className="font-in-nunito text-in-blue-dark text-3xl md:text-4xl font-bold">¿Por qué <br />
                    elegir {" "}
                    <span className="text-in-cyan">InSalud?</span>
                    </h2>
                    <div className="space-y-6">
                        <ul className="space-y-2 mt-6">
                            <li className="flex items-start">
                                <span className="text-in-blue-dark mr-3">•</span>
                                <span className="text-in-gray">Más de 120,000 consultas atendidas.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-in-blue-dark mr-3">•</span>
                                <span className="text-in-gray">+20 especialistas disponibles en Lima, Perú y Latam.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-in-blue-dark mr-3">•</span>
                                <span className="text-in-gray">Certificaciones internacionales en calidad médica.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-in-blue-dark mr-3">•</span>
                                <span className="text-in-gray">Atención especializada en disfunción eréctil y salud prostática.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-in-blue-dark mr-3">•</span>
                                <span className="text-in-gray">Líderes en tratamientos contra el Virus del Papiloma Humano (VPH).</span>
                            </li>
                        </ul>
                        <div className="flex items-center gap-4">
                            <Image 
                                src={cdn("/shared/otros/certificado-seguridad.png")}
                                alt="Why Choose InSalud" 
                                width={80} 
                                height={80} 
                                className="rounded-lg"
                                quality={100}
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
                    src="/imagen-video-ejemplo.png"
                    alt="Why Choose InSalud" 
                    width={500} 
                    height={500} 
                    className="rounded-lg max-w-md md:max-w-none w-full md:w-1/2"
                    quality={100}
                />
            </div>
        </section>
    )
}
