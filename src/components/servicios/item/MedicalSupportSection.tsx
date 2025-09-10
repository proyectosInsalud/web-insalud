'use client'
import { Button } from "@/components/ui/button";
import { TypeDiagnostico } from "@/types";
import Image from "next/image";
import { useOpenForm } from "@/hooks/useOpenForm";

type MedicalSupportSectionProps = {
  tratamiento: TypeDiagnostico;
};

export const MedicalSupportSection = ({ tratamiento }: MedicalSupportSectionProps) => {
  const { handleTrackReservation } = useOpenForm();

  return (
    <section className="max-w-6xl mx-auto px-4 pt-16 md:pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-4 gap-x-4">
            <Image
            src={tratamiento.respaldoMedico.image.src}
            alt={tratamiento.respaldoMedico.image.alt}
            width={500}
            height={300}
            className="object-cover mx-auto w-full max-w-[400px]"
            />
            <div className="font-in-poppins space-y-6 text-in-blue-title text-center md:text-left">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">{tratamiento.respaldoMedico.title} <span className="text-in-cyan">{tratamiento.respaldoMedico.titleHighlight}</span></h2>
                <p className="text-sm">{tratamiento.respaldoMedico.note}</p>
                <Button 
                  onClick={() => handleTrackReservation()}
                  className="cursor-pointer hover:bg-in-blue-dark rounded-2xl py-7 bg-in-blue">{tratamiento.respaldoMedico.cta.text}</Button>
            </div>
        </div>
    </section>
  )
}
