import { cdn } from "@/utils/cdn"
import Image from "next/image"
import Link from "next/link"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"
import { IoLogoLinkedin } from "react-icons/io"


export const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 container">
        <footer className="py-12 flex flex-col">
            <div className="flex order-1 flex-col sm:flex-row justify-between sm:items-center mb-16">
                <div>
                    <Image 
                        src={cdn("/shared/logos/logo-insalud.svg")} 
                        alt="logo insalud" 
                        width={160} 
                        height={160} 
                        className="mb-12"    
                    />
                </div>
                <div className="grid grid-cols-2 w-full sm:w-auto text-sm gap-2 md:gap-4 font-in-nunito h-full">
                    <article className="bg-in-blue pt-16 pb-4 px-6 rounded-2xl h-full flex items-end col-span-1 relative">
                        <p className="text-white font-medium">Empezar un tratamiento</p>
                        <Image 
                            src={cdn("/shared/otros/icon-circle.svg")} 
                            alt="arrow right" 
                            width={32} 
                            height={32} 
                            className="absolute right-4 top-4"
                        />  
                    </article>
                    <article className="bg-in-gray/10 pt-16 pb-4 px-6 rounded-2xl h-full flex items-end col-span-1 relative">
                        <p className="font-medium">Libro de reclamaciones</p>
                        <Image 
                            src={cdn("/shared/otros/icon-circle-light.svg")} 
                            alt="arrow right" 
                            width={32} 
                            height={32} 
                            className="absolute right-4 top-4"
                        />  
                    </article>
                </div>
            </div>
            <div className="grid order-3 md:order-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-12 xl:gap-x-6 gap-y-12 gap-x-4 mb-16">
                <article className="space-y-2 sm:col-span-2 md:col-span-1 xl:col-span-2">
                    <p className="font-in-nunito font-bold md:font-medium text-in-blue-dark md:text-in-gray-light">Nuestras Sedes</p>
                    <div className="flex flex-col gap-3 text-in-gray md:font-medium font-in-poppins">
                        <Link href="/">El Golf</Link>
                        <Link href="/">Sur</Link>
                        <Link href="/">Jesus Maria</Link>
                        <Link href="/">Guayaquil</Link>
                        <Link href="/">Panamá</Link>
                    </div>
                </article>
                <article className="space-y-2 sm:col-span-2 md:col-span-1 xl:col-span-2">
                    <p className="font-in-nunito font-bold md:font-medium text-in-blue-dark md:text-in-gray-light">Pacientes</p>
                    <div className="flex flex-col gap-3 text-in-gray md:font-medium font-in-poppins">
                        <Link href="/">¿Cómo me atiendo?</Link>
                        <Link href="/">Deberes y Derechos del paciente</Link>
                        <Link href="/">Términos y Condiciones</Link>
                    </div>
                </article>
                <article className="space-y-2 sm:col-span-2 md:col-span-1 xl:col-span-2">
                    <p className="font-in-nunito font-bold md:font-medium text-in-blue-dark md:text-in-gray-light">Sobre INSALUD</p>
                    <div className="flex flex-col gap-3 text-in-gray md:font-medium font-in-poppins">
                        <Link href="/">Nosotros</Link>
                        <Link href="/">Blog</Link>
                        <Link href="/">Prensa</Link>
                        <Link href="/">Trabaja con nosotros</Link>
                    </div>
                </article>
                <article className="space-y-2 sm:col-span-2 md:col-span-1 xl:col-span-3">
                    <p className="font-in-nunito font-bold md:font-medium text-in-blue-dark md:text-in-gray-light">Diagnósticos</p>
                    <div className="flex flex-col gap-3 text-in-gray md:font-medium font-in-poppins">
                        <Link href="/">Prostatitis Crónica</Link>
                        <Link href="/">Eyaculación Precoz</Link>
                        <Link href="/">Micosis Genital</Link>
                        <Link href="/">Enfermedad de Transmisión Sexual</Link>
                        <Link href="/">Disfunción Eréctil</Link>
                        <Link href="/">Herpes Genital</Link>
                        <Link href="/">Infertilidad</Link>
                        <Link href="/">Chequeo Prostático</Link>
                    </div>
                </article>
                <article className="space-y-2 sm:col-span-3 md:col-span-2 xl:col-span-3">
                    <p className="font-in-nunito font-bold md:font-medium text-in-blue-dark md:text-in-gray-light">Contacto</p>
                    <div className="flex gap-2">
                        <Input className="bg-[#999999]/10 rounded-full w-4/6 py-5" placeholder="Correo" />
                        <Button className="bg-in-gray text-white rounded-full w-2/6 py-5 cursor-pointer">Enviar</Button>
                    </div>    
                </article>
            </div>
            <div className="flex order-2 md:order-3 flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0 mb-16">
                <nav className="flex gap-4">
                    <Link href="https://www.instagram.com/insalud.oficial/?hl=es-la" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={24} />
                    </Link>
                    <Link href="https://x.com/AInsalud74017" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter size={24} />
                    </Link>
                    <Link href="https://www.linkedin.com/company/78627776/admin/page-posts/published/" target="_blank" rel="noopener noreferrer">
                        <IoLogoLinkedin size={24} />
                    </Link>
                    <Link href="https://www.tiktok.com/@insalud_oficial" target="_blank" rel="noopener noreferrer">
                        <FaTiktok size={24} />
                    </Link>
                    <Link href="https://www.youtube.com/@InSalud-latam" target="_blank" rel="noopener noreferrer">
                        <FaYoutube size={24} />
                    </Link>
                </nav>
                <p className="text-lg font-in-poppins">+20 especialistas disponibles en Lima, Perú y Latam.</p>
            </div>
            <div className="flex order-4 flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0 font-in-poppins">
                <p className="text-in-gray-light text-sm">© 2025 IN-SALUD CORP</p>
                <div className="flex flex-col md:flex-row gap-4 text-sm text-in-gray-light">
                    <Link href="/">
                    Terminos y condiciones
                    </Link>
                    <Link href="/">
                    Politica y privacidad
                    </Link>
                    <Link href="/">
                    Cookie settings
                    </Link>
                </div>
            </div>
        </footer>
    </div>
  )
}
