"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { eventRegisterGtm } from "@/lib/utils";

const TIENDA_URL = "https://tienda.insalud.pe";
const STORAGE_KEY = "popup-tienda-visto";
const TTL_DIAS = 7;

/** Rutas donde el popup NO se muestra: tráfico informacional (SEO) y trámites. */
const RUTAS_EXCLUIDAS = ["/blog", "/libro-de-reclamaciones", "/contacto"];

/** Se muestra recién cuando hay señal de interés: scroll o tiempo en página. */
const SCROLL_MINIMO = 0.4;
const DELAY_MS = 15000;

export const PopUpTienda = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const estaExcluida = RUTAS_EXCLUIDAS.some(
    (ruta) => pathname === ruta || pathname.startsWith(`${ruta}/`)
  );

  const yaLoVio = useCallback(() => {
    try {
      const guardado = localStorage.getItem(STORAGE_KEY);
      if (!guardado) return false;
      const vence = Number(guardado);
      if (Number.isNaN(vence) || Date.now() > vence) {
        localStorage.removeItem(STORAGE_KEY);
        return false;
      }
      return true;
    } catch {
      return false;
    }
  }, []);

  const marcarVisto = useCallback(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        String(Date.now() + TTL_DIAS * 24 * 60 * 60 * 1000)
      );
    } catch {
      /* modo incógnito / storage bloqueado: no es crítico */
    }
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    marcarVisto();
    eventRegisterGtm("popup_tienda_close");
  }, [marcarVisto]);

  useEffect(() => {
    if (estaExcluida || yaLoVio()) return;

    let abierto = false;
    const abrir = () => {
      if (abierto) return;
      abierto = true;
      setIsOpen(true);
      eventRegisterGtm("popup_tienda_view", { pathname });
      cleanup();
    };

    const onScroll = () => {
      const alcanzable = document.body.scrollHeight - window.innerHeight;
      if (alcanzable <= 0) return;
      if (window.scrollY / alcanzable >= SCROLL_MINIMO) abrir();
    };

    const timer = setTimeout(abrir, DELAY_MS);
    window.addEventListener("scroll", onScroll, { passive: true });

    function cleanup() {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    }

    return cleanup;
  }, [estaExcluida, yaLoVio, pathname]);

  // Cerrar con Escape y bloquear el scroll de fondo mientras está abierto.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    const overflowPrevio = document.body.style.overflow;

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflowPrevio;
    };
  }, [isOpen, handleClose]);

  if (estaExcluida) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Conoce nuestra tienda virtual"
      className={`${isOpen ? "opacity-100 z-50" : "opacity-0 z-[-1] pointer-events-none"} w-full h-full fixed inset-0 flex justify-center items-center bg-black/50 bottom-0 px-6 transition-opacity duration-300`}
      onClick={handleClose}
    >
      <div
        id="pop-up-tienda"
        className={`${isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-full scale-95"} transition-all duration-300 relative w-full max-w-[480px]`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de cerrar */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 z-10 bg-white rounded-full p-1.5 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        <Link
          href={TIENDA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          onClick={() => {
            marcarVisto();
            eventRegisterGtm("popup_tienda_click");
          }}
        >
          <Image
            src="/images/popup/popup-tienda.png"
            alt="Conoce la tienda virtual de InSalud"
            width={480}
            height={600}
            quality={75}
            loading="lazy"
            sizes="(max-width: 520px) 100vw, 480px"
            style={{ width: "100%", height: "auto" }}
            className="rounded-lg"
          />
        </Link>
      </div>
    </div>
  );
};
