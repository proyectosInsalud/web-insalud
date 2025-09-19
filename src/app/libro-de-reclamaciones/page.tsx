import { NavBarIntern } from "@/components/common/NavBarIntern"
import { CintilloBarra } from "@/components/home/CintilloBarra"
import { FormContactLibro } from "@/components/libro/FormContactLibro";


export const metadata = {
    title: "Libro de Reclamaciones",
    description: "Libro de Reclamaciones",
}   

export default function LibroDeReclamaciones() {
    return (
        <>
        <div className="hidden md:block">
            <CintilloBarra />
        </div>
        {/* Coment */}
            <NavBarIntern />
            <FormContactLibro />
        </>
    );
}