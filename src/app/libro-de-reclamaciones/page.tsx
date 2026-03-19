import { NavBarIntern } from "@/components/common/NavBarIntern"
import { CintilloBarra } from "@/components/home/CintilloBarra"
import { FormContactLibro } from "@/components/libro/FormContactLibro";

export const revalidate = 86400;
export const dynamic = 'force-static';


export const metadata = {
    title: "Libro de Reclamaciones | InSalud",
    description: "Libro de Reclamaciones de InSalud. Registra tu queja o reclamo de manera virtual.",
    alternates: {
        canonical: "/libro-de-reclamaciones"
    }
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