
import Link from "next/link"

export const CtaTratamientos = () => {
  return (
    <div className="font-in-poppins flex flex-col gap-4 items-start">
        <p className="text-white max-w-sm ">Diagnóstico, tratamiento y prevención de enfermedades del tracto urinario y salud sexual masculina.</p>
        <Link href="#tratamientos" className="bg-in-blue text-sm text-center text-white rounded-full py-3 hover:bg-in-blue/80 transition-colors cursor-pointer px-8">Explora nuestros tratamientos</Link>
    </div>
  )
}
