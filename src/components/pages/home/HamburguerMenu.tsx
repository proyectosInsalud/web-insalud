"use client"

import { cdn } from "@/utils/cdn";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

interface HamburguerMenuProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export const HamburguerMenu = ({ isOpen, setIsOpen }: HamburguerMenuProps) => {

    useEffect(() => {
        const isMobile = () => window.innerWidth < 768;
        
        if (isMobile() && isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
      }, [isOpen]);

  return (
    <>
    {/* Overlay de fondo */}
    {isOpen && (
      <div 
        className="block md:hidden fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-40"
        onClick={() => setIsOpen(false)}
      />
    )}
    
    {/* Menú que se desliza desde la derecha */}
    <div className={`block md:hidden fixed top-0 right-0 h-full w-full bg-in-cyan/40 backdrop-blur-sm z-50 transform transition-transform duration-300 ease-in-out ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    }`}>
      <div className="flex flex-col h-full p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-gray-800 text-xl font-semibold" aria-label="Menú">
            <Image src={cdn("/shared/logos/insalud-white.svg")} alt="logo" width={120} height={28} />
          </h2>
          <div className="flex items-center gap-4">
            <div className="mt-auto">
                <button className="w-full bg-in-orange hover:bg-in-orange/90 text-white px-6 py-2 rounded-full transition-colors cursor-pointer">
                    <span className="font-semibold">Intranet</span>
                </button>
            </div>
                <button 
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-white/10 cursor-pointer rounded-full transition-colors duration-200 "
                    aria-label="Cerrar menú"
                >
                    <div className="relative w-6 h-6">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-6 h-0.5 bg-white rotate-45 absolute"></div>
                        <div className="w-6 h-0.5 bg-white -rotate-45 absolute"></div>
                    </div>
                    </div>
          </button>
          </div>
            {/* Botón Intranet */}
            
        </div>
        
        {/* Navegación */}
        <div className="flex justify-between items-start gap-8">
            <nav className="flex flex-col space-y-4 font-in-poppins">
            <Link 
                href="/" 
                className="text-white text-base hover:text-in-orange transition-colors"
                onClick={() => setIsOpen(false)}
            >
                Nosotros
            </Link>
            <Link 
                href="/" 
                className="text-white text-base hover:text-in-orange transition-colors"
                onClick={() => setIsOpen(false)}
            >
                Diagnósticos
            </Link>
            <Link 
                href="/" 
                className="text-white text-base hover:text-in-orange transition-colors"
                onClick={() => setIsOpen(false)}
            >
                Servicios
            </Link>
            <Link 
                href="/" 
                className="text-white text-base hover:text-in-orange transition-colors"
                onClick={() => setIsOpen(false)}
            >
                Sedes
            </Link>
            <Link 
                href="/" 
                className="text-white text-base hover:text-in-orange transition-colors"
                onClick={() => setIsOpen(false)}
            >
                Blog
            </Link>
            <Link 
                href="/" 
                className="text-white text-base hover:text-in-orange transition-colors"
                onClick={() => setIsOpen(false)}
            >
                Contacto
            </Link>
            </nav>
            <Image src={cdn("/web/home/header/provisional-menu.png")} alt="logo" width={300} height={300}  unoptimized  className="object-cover" />
        </div>
        
        <div className="mt-12 flex justify-between items-center">
            <div>
                <Link href="/" className="text-white text-lg hover:text-in-orange transition-colors">Blog</Link>
            </div>
            <nav className="flex items-center gap-6">
                    <Link href="/">
                        <Image src={cdn("/shared/iconos/facebook-white.svg")} alt="logo" width={24} height={24} />
                    </Link>
                    <Link href="/">
                        <Image src={cdn("/shared/iconos/tiktok-white.svg")} alt="logo" width={24} height={24} />
                    </Link>
                    <Link href="/">
                        <Image src={cdn("/shared/iconos/instagram-white.svg")} alt="logo" width={24} height={24} />
                    </Link>
                    <Link href="/">
                        <Image src={cdn("/shared/iconos/youtube-white.svg")} alt="logo" width={24} height={24} />
                    </Link>
                </nav>
        </div>
      </div>
    </div>
  </>
  )
}
