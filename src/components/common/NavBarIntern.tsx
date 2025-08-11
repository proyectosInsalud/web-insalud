import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"

export const NavBarIntern = () => {
  return (
    <header className="max-w-7xl mx-auto">
        <div className="flex py-6 justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
                <Image src="/svg/logo-insalud-color.svg" alt="Logo" width={100} height={100} />
            </Link>
            <div className="flex gap-4">
                <Link href="/nosotros">Nosotros</Link>
                <Link href="/diagnosticos">Diagnosticos</Link>
                <Link href="/servicios">Servicios</Link>
                <Link href="/sedes">Sedes</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contacto">Contacto</Link>
            </div>
            <Button size={"personal"}>Intranet</Button>
        </div>
    </header>
  )
}
