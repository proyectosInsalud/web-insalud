"use client"
import { Button } from "@/components/ui/button"
import { cdn } from "@/utils/cdn"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";    
import { HamburguerMenu } from "./HamburguerMenu";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  console.log(isOpen);

  return (
    <div className="md:bg-white/10">
        <section className="max-w-7xl mx-auto px-4 container py-4 font-in-nunito">
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
                <div className="flex md:hidden flex-col items-end gap-1.5 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    <div className="w-12 h-1 rounded-full bg-white"></div>
                    <div className="w-10 h-1 rounded-full bg-white"></div>
                    <div className="w-8 h-1 rounded-full bg-white"></div>
                </div>
                <nav className="hidden lg:flex items-center gap-6 text-white font-medium">
                    <Link href="/">Nosotros</Link>
                    <Link href="/">Diagnósticos</Link>
                    <Link href="/">Servicios</Link>
                    <Link href="/">Sedes</Link>
                    <Link href="/">Blog</Link>
                    <Link href="/">Contacto</Link>
                </nav>
                <div className="hidden md:block relative font-in-poppins">
                    <Button className="bg-transparent border border-in-orange hover:bg-in-orange hover:text-white cursor-pointer text-white px-12 py-5 rounded-full">
                        <Link href="https://experience.insalud.pe/auth" target="_blank" rel="noopener noreferrer">
                            <p className="font-semibold">Intranet</p>
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
        
        {/* Renderizar el menú hamburguesa aquí */}
        <HamburguerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}
