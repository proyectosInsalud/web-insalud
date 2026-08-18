"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { eventRegisterGtm } from "@/lib/utils";
import {
  COOKIE_CONSENT_EVENT,
  getCookieConsent,
  setCookieConsent,
} from "@/lib/cookieConsent";
import type { CookieConsentValue } from "@/lib/cookieConsent";

export const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!getCookieConsent());

    const onChange = (e: Event) => {
      const value = (e as CustomEvent<CookieConsentValue | null>).detail;
      setVisible(value == null);
    };
    window.addEventListener(COOKIE_CONSENT_EVENT, onChange);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, onChange);
  }, []);

  const handleChoice = (value: CookieConsentValue) => {
    setCookieConsent(value);
    eventRegisterGtm(value === "accepted" ? "cookies_accept" : "cookies_reject");
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Preferencias de cookies"
      className="fixed bottom-6 left-6 right-6 sm:right-auto z-[60] w-auto sm:w-[380px] rounded-2xl bg-white shadow-2xl border border-in-gray-light/30 p-5 font-in-poppins"
    >
      <p className="font-in-nunito font-semibold text-in-blue-title text-base mb-2">
        Usamos cookies
      </p>
      <p className="text-in-gray-base text-sm leading-6 mb-4">
        Usamos cookies propias y de terceros para analizar la navegación,
        medir el rendimiento del Sitio y mostrarte contenido relevante. Puedes
        aceptarlas, rechazarlas o leer el detalle en nuestra{" "}
        <Link
          href="/docs/Politica_de_Cookies_InSalud.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-in-cyan underline underline-offset-2 hover:no-underline"
        >
          Política de Cookies
        </Link>
        .
      </p>
      <div className="flex flex-col sm:flex-row gap-2">
        <button
          onClick={() => handleChoice("rejected")}
          className="flex-1 rounded-full border border-in-gray-light px-4 py-2 text-sm font-medium text-in-gray-base hover:bg-in-gray-light/10 transition-colors cursor-pointer"
        >
          Rechazar
        </button>
        <button
          onClick={() => handleChoice("accepted")}
          className="flex-1 rounded-full bg-in-cyan px-4 py-2 text-sm font-medium text-white hover:bg-in-blue transition-colors cursor-pointer"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};
