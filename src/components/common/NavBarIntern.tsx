"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { HamburguerMenu } from "../home/HamburguerMenu";
import { useEffect, useState } from "react";
import { eventRegisterGtm } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const NavBarIntern = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBlog, setIsBlog] = useState(false);

  const pathName = usePathname();

  useEffect(() => {
    if (pathName.includes("/blog/")) {
      setIsBlog(true);
    } else {
      setIsBlog(false);
    }
  }, [pathName]);

  return (
    <header className="max-w-7xl mx-auto">
      <div className={`flex py-4 justify-between items-center md:from-transparent md:to-transparent ${isBlog? "bg-in-blue-title md:bg-transparent" : "bg-gradient-to-b from-black/40 to-black/0"}  px-4`}>
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/svg/logo-insalud-color.svg"
            alt="Logo Insalud"
            width={160}
            height={24}
            className="hidden md:block"
          />
          <Image
            src="/svg/logo-insalud-white.svg"
            alt="Logo Insalud"
            width={107}
            height={19}
            className="md:hidden"
          />
        </Link>
        <div className="gap-6 font-medium font-in-nunito hidden lg:flex">
          <Link
            className="hover:text-in-cyan transition-all duration-150"
            href="https://insalud.pe/#nosotros"
          >
            Nosotros
          </Link>
          <Link
            className="hover:text-in-cyan transition-all duration-150"
            href="/diagnosticos"
          >
            Diagnosticos
          </Link>
          <Link
            className="hover:text-in-cyan transition-all duration-150"
            href="/servicios"
          >
            Servicios
          </Link>
          <Link
            className="hover:text-in-cyan transition-all duration-150"
            href="/https://insalud.pe/#sedes"
          >
            Sedes
          </Link>
          <Link
            className="hover:text-in-cyan transition-all duration-150"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="hover:text-in-cyan transition-all duration-150"
            href="/contacto"
          >
            Contacto
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Link
            className="cursor-pointer"
            href={"https://experience.insalud.pe/auth"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => eventRegisterGtm("btn-intranet")}
          >
            <Button
              className="bg-in-orange hover:bg-in-orange/90 cursor-pointer font-in-poppins text-white rounded-full font-semibold py-1 md:py-2 text-sm px-6 md:px-12"
            >
              Intranet
            </Button>
          </Link>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden flex-col items-end gap-1 cursor-pointer"
          >
            <div className="w-10 h-1 rounded-full bg-white"></div>
            <div className="w-8 h-1 rounded-full bg-white"></div>
            <div className="w-6 h-1 rounded-full bg-white"></div>
          </div>
        </div>
        <HamburguerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};
