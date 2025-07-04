import { Button } from "@/components/ui/button"
import { StyledSelect } from "@/components/ui/StyledSelect"
import { atenciones } from "@/data/atenciones"
import { FaCalendar } from "react-icons/fa6"
import { FaUserDoctor } from "react-icons/fa6"

const modalidades = [
  { id: 1, name: "Atención General", value: "general" },
  { id: 2, name: "Atención Especializada", value: "especializada" }
]

export const ReserveDate = () => {
  return (
    <div className="max-w-5xl container mx-auto px-4">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 shadow-lg rounded-lg p-4">
            <div className="flex flex-col gap-4 col-span-1">
                <StyledSelect
                    options={atenciones.map(atencion => ({
                        id: atencion.id,
                        name: atencion.name,
                        value: atencion.name
                    }))}
                    placeholder="Tipo de atención"
                    icon={<FaUserDoctor />}
                    name="atencion"
                    id="atencion"
                />
            </div>
            <div className="flex flex-col gap-4 col-span-1">
                <StyledSelect
                    options={modalidades}
                    placeholder="Modalidad"
                    icon={<FaCalendar />}
                    name="modalidad"
                    id="modalidad"
                />
            </div>
            <Button className="w-full cursor-pointer hover:bg-in-cyan py-6 text-lg bg-in-cyan/90 rounded-full">Reservar Hora</Button>
        </section>
    </div>
  )
}