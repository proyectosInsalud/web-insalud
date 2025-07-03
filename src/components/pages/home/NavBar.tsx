import { Input } from "@/components/ui/input"
import { cdn } from "@/utils/cdn"
import Image from "next/image"
import Link from "next/link"

export const NavBar = () => {
  return (
    <div className="md:bg-white/10">
        <section className="max-w-7xl mx-auto px-4 container py-8 font-in-nunito">
            <div className="flex justify-between items-center">
                <Link href="/">
                    <Image 
                        src={cdn("/shared/logos/insalud-white.svg")} 
                        alt="logo" 
                        width={150} 
                        height={28} 
                        className="w-full h-full"
                    />  
                </Link>
                <nav className="hidden lg:flex items-center gap-6 text-white font-medium">
                    <Link href="/">Nosotros</Link>
                    <Link href="/">Diagnósticos</Link>
                    <Link href="/">Servicios</Link>
                    <Link href="/">Sedes</Link>
                    <Link href="/">Blog</Link>
                    <Link href="/">Contacto</Link>
                </nav>
                <div className="hidden md:block relative">
                    <Input 
                        placeholder="Buscar..."
                        className="w-full max-w-[180px] border-in-orange placeholder:text-white text-white pr-8 py-5 rounded-full"
                    />
                    <Image 
                        src={cdn("/shared/iconos/icon-search.svg")} 
                        alt="search" 
                        width={24} 
                        height={24} 
                        className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
                    />
                </div>
            </div>
        </section>
    </div>
  )
}
