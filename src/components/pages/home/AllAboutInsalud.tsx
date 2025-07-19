import { Tabs, TabsContent } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"

export const AllAboutInsalud = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4">
      <section>
        <div className="text-center space-y-4 mb-10">
          <h2 className="font-in-lato text-in-blue-title text-center text-3xl md:text-4xl lg:text-5xl font-semibold">Todo sobre <span className="text-in-cyan">salud</span></h2>
          <p className="font-in-poppins text-base">Lo que necesitas saber para cuidar de ti y de tu familia.</p>
        </div>

        <Tabs className="font-in-poppins space-y-4" defaultValue="all">
          {/* <TabsList className="bg-white mx-auto space-x-4">
            <TabsTrigger className='data-[state=active]:bg-in-cyan cursor-pointer data-[state=active]:text-white py-5 px-4 rounded-full border border-in-cyan text-in-blue' value="all">Blog</TabsTrigger>
            <TabsTrigger className='data-[state=active]:bg-in-cyan cursor-pointer data-[state=active]:text-white py-5 px-4 rounded-full border border-in-cyan text-in-blue' value="prensa">Notas de prensa</TabsTrigger>
          </TabsList> */}
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <article className="space-y-4 bg-white shadow-xl p-8 rounded-2xl">
                <Image 
                  src={"https://prensa.insalud.pe/images/noticias/noticia-5.png"} 
                  alt="Síntomas y enfermedades" 
                  width={100} 
                  height={100} 
                  className="w-full h-[200px] object-cover rounded-[10px]"
                  unoptimized
                />
                <p className="py-2 px-4 text-in-cyan bg-in-bg-testimonials inline-block">Lifestyle</p>
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg text-in-blue-title">In-Aesthetics: Descubre tu belleza y libera tu mejor versión
                  </h3>
                  <p>Conoce el nuevo centro de Medicina Estética y Regenerativa. </p>
                </div>
                <Link href="https://prensa.insalud.pe/noticias/in-aesthetics-descubre-tu-belleza" className="text-in-cyan">Leer más</Link>
              </article>
              <article className="space-y-4 bg-white shadow-xl p-8 rounded-2xl">
                <Image 
                  src={"https://prensa.insalud.pe/images/noticias/noticia-4.png"} 
                  alt="Síntomas y enfermedades" 
                  width={100} 
                  height={100} 
                  className="w-full h-[200px] object-cover rounded-[10px]"
                  unoptimized
                />
                <p className="py-2 px-4 text-in-cyan bg-in-bg-testimonials inline-block">Salud</p>
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg text-in-blue-title">INSALUD - Centro Médico Especializado

                  </h3>
                  <p>Centro Médico Especializado con presencia en Perú y expansión en Latinoamérica. </p>
                </div>
                <Link href="https://prensa.insalud.pe/noticias/centro-medico-especializado" className="text-in-cyan">Leer más</Link>
              </article>

              <article className="space-y-4 bg-white shadow-xl p-8 rounded-2xl">
                <Image 
                  src={"https://prensa.insalud.pe/images/noticias/noticia-1.png"} 
                  alt="Síntomas y enfermedades" 
                  width={100} 
                  height={100} 
                  className="w-full h-[200px] object-cover rounded-[10px]"
                  unoptimized
                />
                <p className="py-2 px-4 text-in-cyan bg-in-bg-testimonials inline-block">Salud</p>
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg text-in-blue-title">Hombres jóvenes, en riesgo por VPH: campaña de detección
                  </h3>
                  <p>Insalud lanza campaña hasta el 15 de junio con pruebas. </p>
                </div>
                <Link href="https://prensa.insalud.pe/noticias/hombres-jovenes-riesgo-vph" className="text-in-cyan">Leer más</Link>
              </article>

            </div>
          </TabsContent>
          <TabsContent value="prensa">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <article className="space-y-4 bg-white shadow-xl p-8 rounded-2xl">
                <p className="py-2 px-4 text-in-cyan bg-in-bg-testimonials inline-block">Salud</p>
                <div className="space-y-1">
                  <h3>¿Cómo tomar la temperatura?</h3>
                  <p>18/06/2025 | 3 min lectura</p>
                </div>
                <Link href="/blog/como-tomar-la-temperatura" className="text-in-cyan">Leer más</Link>
              </article>
              <article className="space-y-4 bg-white shadow-xl p-8 rounded-2xl">
                <p className="py-2 px-4 text-in-cyan bg-in-bg-testimonials inline-block">Síntomas y enfermedades</p>
                <div className="space-y-1">
                  <h3>¿Cómo tomar la temperatura?</h3>
                  <p>18/06/2025 | 3 min lectura</p>
                </div>
                <Link href="/blog/como-tomar-la-temperatura" className="text-in-cyan">Leer más</Link>
              </article>
              <article className="space-y-4 bg-white shadow-xl p-8 rounded-2xl">
                <p className="py-2 px-4 text-in-cyan bg-in-bg-testimonials inline-block">Síntomas y enfermedades</p>
                <div className="space-y-1">
                  <h3>¿Cómo tomar la temperatura?</h3>
                  <p>18/06/2025 | 3 min lectura</p>
                </div>
                <Link href="/blog/como-tomar-la-temperatura" className="text-in-cyan">Leer más</Link>
              </article>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}
