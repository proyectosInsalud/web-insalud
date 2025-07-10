import { cdn } from "@/utils/cdn"
import Image from "next/image"
import Link from "next/link"

export const CintilloBarra = () => {
  return (
    <div className="bg-white/30">
        <div className="container mx-auto max-w-7xl px-4">
            <section className="flex justify-between items-center py-2 ">
                <nav className="flex items-center gap-3 font-in-nunito text-white">
                <Link href="#">Latam</Link>
                </nav>
                <nav className="flex items-center gap-6">
                    <Link href="https://www.facebook.com/insalud.medicinaespecializada?locale=es_LA" target="_blank" rel="noopener noreferrer">
                        <Image src={cdn("/shared/iconos/facebook-white.svg")} alt="logo" width={24} height={24} />
                    </Link>
                    <Link href="https://www.tiktok.com/@insalud_oficial" target="_blank" rel="noopener noreferrer">
                        <Image src={cdn("/shared/iconos/tiktok-white.svg")} alt="logo" width={24} height={24} />
                    </Link>
                    <Link href="https://www.instagram.com/insalud.oficial/?hl=es-la" target="_blank" rel="noopener noreferrer">
                        <Image src={cdn("/shared/iconos/instagram-white.svg")} alt="logo" width={24} height={24} />
                    </Link>
                    <Link href="https://www.youtube.com/@InSalud-latam" target="_blank" rel="noopener noreferrer">
                        <Image src={cdn("/shared/iconos/youtube-white.svg")} alt="logo" width={24} height={24} />
                    </Link>
                </nav>
            </section>
        </div>
    </div>
  )
}
