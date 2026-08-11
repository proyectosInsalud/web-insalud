"use client";

import { useEffect, useState } from "react";
import { CalendarIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useModalStore } from "../../store/modalStore";
import { eventRegisterGtm } from "@/lib/utils";

const WHATSAPP_URL = `https://wa.me/51957016010?text=${encodeURIComponent(
  "¡Hola! vi su página web y me gustaría agendar una cita"
)}`;

/**
 * Barra de conversión fija en mobile. Aparece a partir del segundo scroll
 * (1.5 viewports) para no competir con el CTA del hero.
 *
 * Mientras está visible marca `data-sticky-cta="on"` en el <body>; globals.css
 * usa esa marca para ocultar el FAB de WhatsApp en mobile (si no, quedarían dos
 * botones flotantes peleando la misma esquina) y para reservar el espacio
 * inferior que la barra ocupa.
 */
export const StickyCta = () => {
  const [visible, setVisible] = useState(false);
  const openReservationModal = useModalStore((state) => state.openReservationModal);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 1.5);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.dataset.stickyCta = visible ? "on" : "off";
    return () => {
      delete document.body.dataset.stickyCta;
    };
  }, [visible]);

  const handleReservar = () => {
    eventRegisterGtm("booking_start", { cta_source: "sticky_bar" });
    openReservationModal();
  };

  return (
    <div
      className="md:hidden fixed inset-x-0 bottom-0 z-40 transition-transform duration-300"
      style={{
        // transform inline en vez de translate-y-*: las utilidades de traslación
        // de Tailwind v4 usan la propiedad `translate` y aquí no resolvían bien.
        transform: visible ? "translateY(0)" : "translateY(100%)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
      aria-hidden={!visible}
    >
      <div className="flex items-center gap-2 bg-white/95 backdrop-blur border-t border-gray-200 px-3 py-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
        <button
          onClick={handleReservar}
          tabIndex={visible ? 0 : -1}
          className="flex-1 flex items-center justify-center gap-2 bg-in-cyan hover:bg-in-blue text-white font-in-poppins text-sm font-semibold rounded-full py-3.5 transition-colors"
        >
          <CalendarIcon className="w-4 h-4" />
          Agenda tu cita
        </button>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? 0 : -1}
          onClick={() => eventRegisterGtm("whatsapp_click", { cta_source: "sticky_bar" })}
          aria-label="Escríbenos por WhatsApp"
          className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full w-[52px] h-[52px] flex-shrink-0 transition-colors"
        >
          <FaWhatsapp className="text-2xl" />
        </a>
      </div>
    </div>
  );
};
