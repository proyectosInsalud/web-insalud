
import Link from "next/link"

export const CtaServicios = () => {
  return (
    <div className="space-y-4 font-in-poppins">
        <p className="text-white max-w-sm ">Diagnóstico, tratamiento y prevención de enfermedades del tracto urinario y salud sexual masculina.</p>
        <Link href="#servicios" className="bg-in-blue text-white rounded-full py-2 px-4 hover:bg-in-blue/80 transition-colors cursor-pointer">Explora nuestros servicios</Link>
    </div>
  )
}
