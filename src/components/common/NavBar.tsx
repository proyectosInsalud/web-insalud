"use client";
import { Button } from "@/components/ui/button";
import { cdn } from "@/utils/cdn";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HamburguerMenu } from "../home/HamburguerMenu";
import { usePathname } from "next/navigation";
// import { usePathname } from "next/navigation";

export const NavBar = () => {

  
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  

  return (
    <div className="md:bg-white/10 text-black">
      <section className="max-w-7xl mx-auto px-4 container py-4 font-in-nunito">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src={cdn("/shared/logos/u-insalud-white.svg")}
              alt="logo"
              width={150}
              height={28}
              className="w-full h-full"
            />
          </Link>
          <div
            className="flex md:hidden flex-col"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex items-center gap-3">
              <Link
                href="https://experience.insalud.pe/auth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-in-orange hover:bg-in-orange/80 cursor-pointer text-black px-6 py-3 rounded-full">
                  <p className="font-semibold">Intranet</p>
                </Button>
              </Link>
              <div className="flex md:hidden flex-col items-end gap-1 cursor-pointer">
                <div className="w-10 h-1 rounded-full bg-white"></div>
                <div className="w-8 h-1 rounded-full bg-white"></div>
                <div className="w-6 h-1 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-6 text-white font-medium">
            
            <Link className={`${pathName === '/nosotros' ? 'text-in-cyan': ''} hover:text-in-cyan transition-all duration-150` } href="#nosotros">Nosotros</Link>
            <Link className={`${pathName === '/diagnosticos' ? 'text-in-cyan': ''} hover:text-in-cyan transition-all duration-150`} href="/diagnosticos">Diagnósticos</Link>
            <Link className={`${pathName === '/servicios' ? 'text-in-cyan': ''} hover:text-in-cyan transition-all duration-150`} href="/servicios">Servicios</Link>
            <Link className={`${pathName === '/sedes' ? 'text-in-cyan': ''} hover:text-in-cyan transition-all duration-150`} href="#sedes">Sedes</Link>
            <Link className={`${pathName === '/blog' ? 'text-in-cyan': ''} hover:text-in-cyan transition-all duration-150`} href="#blog">Blog</Link>
            <Link className={`${pathName === '/contacto' ? 'text-in-cyan': ''} hover:text-in-cyan transition-all duration-150`}  href="#contacto">Contacto</Link>
          </nav>
          <div className="hidden md:block relative font-in-poppins">
            <Link
              href="https://experience.insalud.pe/auth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-in-orange hover:bg-in-orange/80 cursor-pointer text-black px-12 py-5 rounded-full">
                <p className="font-semibold">Intranet</p>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Renderizar el menú hamburguesa aquí */}
      <HamburguerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};
