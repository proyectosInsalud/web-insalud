import { NavBar } from "@/components/common/NavBar";
import { CintilloBarra } from "@/components/home/CintilloBarra";
import { Button } from "@/components/ui/button";
import { cdn } from "@/utils/cdn";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
        <CintilloBarra />
        <div className="relative bg-transparent font-in-poppins">
            <NavBar />
            <Image 
                src="/images/banner-not-found.png" 
                alt="Not Found" 
                width={500}
                height={300}
                quality={95}
                priority
                className="absolute top-0 w-full h-full -z-10 object-cover"
            />
            <div className="py-16 md:py-32 flex flex-col items-center justify-center space-y-4 px-4">
                <Image 
                    src={cdn("/shared/iconos/error404.svg")}
                    alt="Not Found"
                    width={300}
                    height={300}
                    className="w-[140px] md:w-[200px] lg:w-[400px]"
                />
                <p className="text-center max-w-xl text-sm md:text-lg text-white">Lo sentimos, la página que busca no existe o ha sido movida. Le sugerimos volver a la página principal.</p>
                <Link href={"/"}>
                    <Button size={"personal"} className="text-sm py-3 px-4 md:py-4 md:px-6 md:text-base rounded-4xl bg-in-blue hover:bg-in-blue-dark cursor-pointer">
                        Volver a la página principal
                    </Button>
                </Link>
            </div>
        </div>
    </>
  )
}
