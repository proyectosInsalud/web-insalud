"use client"

import { Button } from "@/components/ui/button"
import { StyledSelect } from "@/components/ui/StyledSelect"
import { problemasSalud } from "@/data/problemasSalud"
import { sedesAccordion } from "@/data/sedesAccordion"
import { turnos } from "@/data/turnos"
import { useModalStore } from "@/store/modalStore"
import { CalendarIcon } from "lucide-react"
import { useState } from "react"
import { cdn } from "@/utils/cdn"

export const ReserveDate = () => {
    const { 
        reservationData,
        setProblemaSalud,
        setSede,
        setTurno,
        openReservationModal 
    } = useModalStore();
    
    const [errors, setErrors] = useState({
        problemaSalud: false,
        sede: false,
        turno: false
    });

    const handleReservar = () => {
        // Mostrar errores visuales para campos vacíos
        const newErrors = {
            problemaSalud: !reservationData.problemaSalud,
            sede: !reservationData.sede,
            turno: !reservationData.turno
        };
        
        setErrors(newErrors);
        
        // Solo abrir el modal si todos los campos están llenos
        if (!newErrors.problemaSalud && !newErrors.sede && !newErrors.turno) {
            openReservationModal();
        }
    };
    
    return (
        <div className="max-w-5xl container mx-auto px-4">
            <section className="grid grid-cols-1 md:grid-cols-4 gap-4 shadow-lg rounded-lg p-4 bg-white -mt-32">
                {/* Problema de Salud */}
                <div className="flex flex-col gap-2 col-span-1">
                    <StyledSelect
                        options={problemasSalud}
                        placeholder="Problema de salud"
                        icon={cdn("shared/iconos/u-doctor-problema.svg")}
                        name="problemaSalud"
                        id="problemaSalud"
                        value={reservationData.problemaSalud}
                        onChange={(value) => {
                            setProblemaSalud(value);
                            setErrors(prev => ({ ...prev, problemaSalud: false }));
                        }}
                        ariaLabel="Seleccionar problema de salud"
                        className={errors.problemaSalud ? "border-red-500" : ""}
                    />
                    {errors.problemaSalud && (
                        <p className="text-red-500 text-xs">Selecciona un problema de salud</p>
                    )}
                </div>

                {/* Sede */}
                <div className="flex flex-col gap-2 col-span-1">
                    <StyledSelect
                        options={sedesAccordion.map(sede => ({
                            id: sede.id,
                            name: sede.name,
                            value: sede.name
                        }))}
                        placeholder="Sede"
                        icon={cdn("shared/iconos/u-icono-sede.svg")}
                        name="sede"
                        id="sede"
                        value={reservationData.sede}
                        onChange={(value) => {
                            setSede(value);
                            setErrors(prev => ({ ...prev, sede: false }));
                        }}
                        ariaLabel="Seleccionar sede médica"
                        className={errors.sede ? "border-red-500" : ""}
                    />
                    {errors.sede && (
                        <p className="text-red-500 text-xs">Selecciona una sede</p>
                    )}
                </div>

                {/* Turno */}
                <div className="flex flex-col gap-2 col-span-1">
                    <StyledSelect
                        options={turnos}
                        placeholder="Turno"
                        icon={cdn("shared/iconos/u-icono-turno.svg")}
                        name="turno"
                        id="turno"
                        value={reservationData.turno}
                        onChange={(value) => {
                            setTurno(value);
                            setErrors(prev => ({ ...prev, turno: false }));
                        }}
                        ariaLabel="Seleccionar turno de atención"
                        className={errors.turno ? "border-red-500" : ""}
                    />
                    {errors.turno && (
                        <p className="text-red-500 text-xs">Selecciona un turno</p>
                    )}
                </div>

                {/* Botón Reservar */}
                <div className="col-span-1">
                    <Button
                        onClick={handleReservar}
                        className="w-full h-[60px] cursor-pointer font-in-poppins hover:bg-in-cyan bg-in-cyan/90 rounded-full"
                    >
                        <CalendarIcon className='w-6 h-4 mr-2' />
                        Reservar hora
                    </Button>
                </div>
            </section>
        </div>
    )
}