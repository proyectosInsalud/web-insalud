"use client";

import { CalendarIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useModalStore } from "../../store/modalStore";
import { eventRegisterGtm } from "@/lib/utils";

const WHATSAPP_URL = `https://wa.me/51997231931?text=${encodeURIComponent(
  "¡Hola! vi su página web y me gustaría agendar una cita"
)}`;

/**
 * Cierre de conversión. Va después de los bloques que construyen confianza
 * (médicos, cifras, testimonios, convenios, sedes) y antes del blog, que es
 * un bloque de salida.
 */
export const FinalCta = () => {
  const openReservationModal = useModalStore((state) => state.openReservationModal);

  const handleReservar = () => {
    eventRegisterGtm("booking_start", { cta_source: "home_cta_final" });
    openReservationModal();
  };

  return (
    <section className="max-w-6xl mx-auto px-4 pt-16 md:pt-24 font-in-poppins">
      <div className="w-full bg-[#d1ffff] rounded-3xl py-12 md:py-14 px-6 space-y-6 shadow-xl">
        <div className="text-center space-y-3">
          <h2 className="font-in-nunito text-2xl md:text-3xl lg:text-4xl font-semibold text-in-blue-title">
            Da el primer paso hoy
          </h2>
          <p className="text-sm md:text-base text-in-gray-base max-w-2xl mx-auto">
            Agenda con un especialista en urología y salud sexual. Atención
            confidencial, sin juicios y con diagnóstico claro desde la primera consulta.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleReservar}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-in-cyan hover:bg-in-blue text-white font-semibold rounded-full py-4 px-8 shadow-lg transition-colors cursor-pointer"
          >
            <CalendarIcon className="w-5 h-5" />
            Agenda tu cita
          </button>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => eventRegisterGtm("whatsapp_click", { cta_source: "home_cta_final" })}
            className="group w-full sm:w-auto bg-white flex items-center justify-center gap-2 py-4 px-8 rounded-full shadow-lg transition hover:bg-in-cyan"
          >
            <FaWhatsapp className="text-in-cyan group-hover:text-white" size={20} />
            <span className="font-semibold text-in-cyan group-hover:text-white">
              Escríbenos por WhatsApp
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
