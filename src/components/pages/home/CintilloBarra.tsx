import { cdn } from "@/utils/cdn"
import Image from "next/image"
import Link from "next/link"

export const CintilloBarra = () => {
  return (
    <div className="bg-white/30 hidden md:block">
        <div className="container mx-auto max-w-7xl px-4">
            <section className="flex justify-between items-center py-2 ">
                <nav className="flex items-center gap-3 font-in-nunito text-white">
                    <Link href="/prensa">Prensa</Link>
                    <div className="text-sm">|</div>
                    <Link href="#">Latam</Link>
                </nav>
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
            </section>
        </div>
    </div>
  )
}
