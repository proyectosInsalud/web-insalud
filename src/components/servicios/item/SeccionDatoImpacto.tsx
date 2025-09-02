import { TypeDiagnostico } from "@/types";

type SeccionDatoImpactoProps = {
    tratamiento: TypeDiagnostico;
}

export const SeccionDatoImpacto = ({ tratamiento }: SeccionDatoImpactoProps) => {
  return (
    <section className="pt-16 md:pt-24">
        <div className="grid md:grid-cols-12 gap-4 items-center md:gap-12 xl:gap-20 max-w-7xl mx-auto px-4">
            <h2 className="font-in-nunito font-medium text-2xl lg:text-3xl xl:text-4xl col-span-6 text-in-blue-title">{tratamiento.impacto.lead} {' '}
            <span className="text-in-cyan">{tratamiento.impacto.suffix} </span> </h2>
            <p className="col-span-6 text-in-gray-base text-sm md:text-base">{tratamiento.impacto.description}</p>
        </div>
    </section>
  )
}
