"use client"
import { Button } from "@/components/ui/button"
import { cdn } from "@/utils/cdn"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { HamburguerMenu } from "./HamburguerMenu";

export const NavBar = () => {

  gsap.registerPlugin(useGSAP);
  const [isOpen, setIsOpen] = useState(false);
  
  const lineRef = useRef<HTMLDivElement>(null);
  const lineRef2 = useRef<HTMLDivElement>(null);
  const lineRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    if(isOpen) {
        // Animación cuando se abre (X)
        tl.to(lineRef.current, {
            duration: 0.3,
            rotate: 45,
            ease: "power2.inOut",
            y: 10,
        })
        .to(lineRef2.current, {
            duration: 0.3,
            ease: "power2.inOut",
            opacity: 0,
        }, "-=0.3")
        .to(lineRef3.current, {
            duration: 0.3,
            rotate: -45,
            ease: "power2.inOut",
            y: -10,
        }, "-=0.3");
    } else {
        // Animación cuando se cierra (hamburguesa)
        tl.to(lineRef.current, {
            duration: 0.3,
            rotate: 0,
            ease: "power2.inOut",
            y: 0,
        })
        .to(lineRef2.current, {
            duration: 0.3,
            ease: "power2.inOut",
            opacity: 1,
        }, "-=0.3")
        .to(lineRef3.current, {
            duration: 0.3,
            rotate: 0,
            ease: "power2.inOut",
            y: 0,
        }, "-=0.3");
    }
  }, [isOpen]);
  
  console.log(isOpen);

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
                <div className="flex md:hidden flex-col items-end gap-1.5 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    <div ref={lineRef} className="w-12 h-1 rounded-full bg-white"></div>
                    <div ref={lineRef2} className="w-10 h-1 rounded-full bg-white"></div>
                    <div ref={lineRef3} className="w-8 h-1 rounded-full bg-white"></div>
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
                        <Link href="/">
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
