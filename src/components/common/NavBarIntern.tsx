'use client'
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { HamburguerMenu } from "../home/HamburguerMenu"
import { useState } from "react"

export const NavBarIntern = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="max-w-7xl mx-auto px-4">
        <div className="flex py-4 justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
                <Image src="/svg/logo-insalud-color.svg" alt="Logo" width={160} height={160} />
            </Link>
            <div className="gap-6 font-medium font-in-nunito hidden lg:flex">
                <Link className="hover:text-in-cyan transition-all duration-150" href="/nosotros">Nosotros</Link>
                <Link className="hover:text-in-cyan transition-all duration-150" href="/diagnosticos">Diagnosticos</Link>
                <Link className="hover:text-in-cyan transition-all duration-150" href="/servicios">Servicios</Link>
                <Link className="hover:text-in-cyan transition-all duration-150" href="/sedes">Sedes</Link>
                <Link className="hover:text-in-cyan transition-all duration-150" href="/blog">Blog</Link>
                <Link className="hover:text-in-cyan transition-all duration-150" href="/contacto">Contacto</Link>
            </div>
            <div className="flex items-center gap-2">
                <Link className="cursor-pointer" href={"https://experience.insalud.pe/auth"} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-in-orange hover:bg-in-orange/90 cursor-pointer font-in-poppins text-black rounded-full font-semibold py-2 text-sm px-12" size={"personal"}>Intranet</Button>
                </Link>
                <div 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="flex md:hidden flex-col items-end gap-1 cursor-pointer">
                    <div className="w-10 h-1 rounded-full bg-black"></div>
                    <div className="w-8 h-1 rounded-full bg-black"></div>
                    <div className="w-6 h-1 rounded-full bg-black"></div>
                </div>
            </div>
            <HamburguerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    </header>
  )
}
