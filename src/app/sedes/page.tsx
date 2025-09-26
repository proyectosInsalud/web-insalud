import { ReservationModal } from "@/components/common/ReservationModal";
import { CintilloBarra } from "@/components/home/CintilloBarra";
import { CarouselSedes } from "@/components/sedes/CarouselSedes";
import { HeroSedes } from "@/components/sedes/HeroSedes";
import { WhatsAppSection } from "@/components/ui/WhatsAppSection";

export default function Sedes() {
    return (
        <>
        <header className='bg-gradient-to-b from-[#012436] to-[#070910]'>
            <CintilloBarra />    
            <HeroSedes />
        </header>
            <main>
                <CarouselSedes />
            </main>
            <WhatsAppSection title="Nuestras sedes en Perú y Latam" subtext="Encuentra la sede de Insalud más cercana en Lima, Guayaquil o Panamá. Agenda tu cita online y accede a atención médica especializada con tecnología de vanguardia."/>
            <ReservationModal /> 
        </>
    )
}