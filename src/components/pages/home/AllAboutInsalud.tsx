import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const AllAboutInsalud = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4">
      <section>
        <div className="text-center space-y-4 mb-10">
          <h2 className="font-in-lato text-in-blue-title text-5xl font-semibold">Todo sobre <span className="text-in-cyan">salud</span></h2>
          <p className="font-in-poppins text-base">Lo que necesitas saber para cuidar de ti y de tu familia.</p>
        </div>

        <Tabs className="font-in-poppins space-y-4" defaultValue="all">
          <TabsList className="bg-white mx-auto space-x-4">
            <TabsTrigger className='data-[state=active]:bg-in-cyan cursor-pointer data-[state=active]:text-white py-5 px-4 rounded-full border border-in-cyan text-in-blue' value="all">Blog</TabsTrigger>
            <TabsTrigger className='data-[state=active]:bg-in-cyan cursor-pointer data-[state=active]:text-white py-5 px-4 rounded-full border border-in-cyan text-in-blue' value="prensa">Notas de prensa</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
          <TabsContent value="prensa">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
