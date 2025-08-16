"use client";

import { Button } from "@/components/ui/button";
import { StyledSelect } from "@/components/ui/StyledSelect";
import { problemasSalud } from "@/data/problemasSalud";
import { sedesAccordion } from "@/data/sedesAccordion";
import { turnos } from "@/data/turnos";
import { useModalStore } from "@/store/modalStore";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
// import { cdn } from "@/utils/cdn"

export const ReserveDate = () => {
  const {
    reservationData,
    setProblemaSalud,
    setSede,
    setTurno,
    openReservationModal,
  } = useModalStore();

  const [errors, setErrors] = useState({
    problemaSalud: false,
    sede: false,
    turno: false,
  });

  const handleReservar = () => {
    // Mostrar errores visuales para campos vacíos
    const newErrors = {
      problemaSalud: !reservationData.problemaSalud,
      sede: !reservationData.sede,
      turno: !reservationData.turno,
    };

    setErrors(newErrors);

    // Solo abrir el modal si todos los campos están llenos
    if (!newErrors.problemaSalud && !newErrors.sede && !newErrors.turno) {
      openReservationModal();
    }
  };

  return (
    <div className="px-4 pt-24 space-y-8">
      <h2 className="text-center text-in-blue-dark font-in-nunito md:text-3xl lg:text-4xl xl:text-5xl font-bold">Encuentra tu tratamiento en InSalud</h2>
      <section
        className="grid max-w-5xl container mx-auto grid-cols-1 gap-y-8 md:gap-y-0 md:grid-cols-12 items-start gap-x-8 rounded-4xl py-6 px-[18px] md:py-6 md:px-8 bg-white -mt-[134px] md:mt-0"
        style={{ boxShadow: "0 4px 24px rgba(0, 180, 216, 0.20)" }}
      >
        <div className="grid gap-y-4 grid-cols-1 col-span-1 md:gap-y-0 md:grid-cols-3 md:col-span-9 gap-x-2">
          {/* Problema de Salud */}
          <div className="flex flex-col gap-2 md:gap-0 col-span-1">
            <StyledSelect
              options={problemasSalud}
              placeholder="Problema de salud"
              // icon={cdn("shared/iconos/u-doctor-problema.svg")}
              icon="/svg/doctor-problema.svg"
              name="problemaSalud"
              id="problemaSalud"
              value={reservationData.problemaSalud}
              onChange={(value) => {
                setProblemaSalud(value);
                setErrors((prev) => ({ ...prev, problemaSalud: false }));
              }}
              ariaLabel="Seleccionar problema de salud"
              className={errors.problemaSalud ? "border-red-500" : ""}
            />
            {errors.problemaSalud && (
              <p className="text-red-500 text-xs mt-2">
                Selecciona un problema de salud
              </p>
            )}
          </div>

          {/* Sede */}
          <div className="flex flex-col gap-2 col-span-1">
            <StyledSelect
              options={sedesAccordion.map((sede) => ({
                id: sede.id,
                name: sede.name,
                value: sede.name,
              }))}
              placeholder="Sede"
              icon="/svg/icono-sede.svg"
              name="sede"
              id="sede"
              value={reservationData.sede}
              onChange={(value) => {
                setSede(value);
                setErrors((prev) => ({ ...prev, sede: false }));
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
              // icon={cdn("shared/iconos/u-icono-turno.svg")}
              icon="/svg/icono-turno.svg"
              name="turno"
              id="turno"
              value={reservationData.turno}
              onChange={(value) => {
                setTurno(value);
                setErrors((prev) => ({ ...prev, turno: false }));
              }}
              ariaLabel="Seleccionar turno de atención"
              className={errors.turno ? "border-red-500" : ""}
            />
            {errors.turno && (
              <p className="text-red-500 text-xs">Selecciona un turno</p>
            )}
          </div>
        </div>

        {/* Botón Reservar */}
        <div className="md:col-span-3">
          <Button
            onClick={handleReservar}
            size={"personal"}
            className="w-full h-full py-4 text-base cursor-pointer font-in-poppins hover:bg-in-cyan bg-in-cyan/90 rounded-full"
          >
            <CalendarIcon className="w-6 h-4 mr-2" />
            Reservar ahora
          </Button>
        </div>
      </section>
    </div>
  );
};
