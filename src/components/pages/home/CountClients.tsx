import { PersonStanding } from "lucide-react"

export const CountClients = () => {
  return (
    <div className="relative">
        <div className="w-32 h-32 bg-in-cyan/30 rounded-full blur-xl shadow-2xl scale-150 absolute top-1/2 -translate-y-1/2 -left-16"></div>
        <div className="w-32 h-32 bg-in-cyan/30 rounded-full blur-xl shadow-2xl scale-150 absolute top-1/2 -translate-y-1/2 -right-16"></div>
        <section className="container mx-auto max-w-5xl px-4 py-12">
            <div className="grid place-items-center grid-cols-1 gap-y-12 md:grid-cols-3 gap-4">
                <article className="flex flex-col items-center md:items-start justify-center gap-4">
                    <PersonStanding className="w-12 h-12 text-in-cyan" />
                    <div className="space-y-2">
                        <h3 className="text-3xl font-bold text-in-blue font-in-nunito text-center md:text-left">+1000</h3>
                        <p className="text-sm text-gray-500 max-w-[200px] font-in-poppins text-center md:text-left">Atenciones de consultas
                        externas y lorem</p>
                    </div>
                </article>
                <article className="flex flex-col items-center md:items-start justify-center gap-4">
                    <PersonStanding className="w-12 h-12 text-in-cyan" />
                    <div className="space-y-2">
                        <h3 className="text-3xl font-bold text-in-blue font-in-nunito text-center md:text-left">+1000</h3>
                        <p className="text-sm text-gray-500 max-w-[200px] font-in-poppins text-center md:text-left">Atenciones de consultas
                        externas y lorem</p>
                    </div>
                </article>
                <article className="flex flex-col items-center md:items-start justify-center gap-4">
                    <PersonStanding className="w-12 h-12 text-in-cyan" />
                    <div className="space-y-2">
                        <h3 className="text-3xl font-bold text-in-blue font-in-nunito text-center md:text-left">+1000</h3>
                        <p className="text-sm text-gray-500 max-w-[200px] font-in-poppins text-center md:text-left">Atenciones de consultas
                        externas y lorem</p>
                    </div>
                </article>
            </div>
        </section>
    </div>
  )
}

