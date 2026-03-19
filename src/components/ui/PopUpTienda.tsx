"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

export const PopUpTienda = () => {
  // URL de la tienda virtual - puedes cambiar este link según necesites
  const tiendaUrl = "https://tienda.insalud.pe"; // Cambia esta URL por la de tu tienda

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Verifica si el usuario ya vio el popup en esta sesión
    const hasSeenPopup = sessionStorage.getItem("popup-tienda-visto");
    
    if (!hasSeenPopup) {
      // Mostrar el popup "altoque" (500ms) por petición del usuario
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
    // Marcar como visto para no volver a mostrar en esta sesión
    sessionStorage.setItem("popup-tienda-visto", "true");
  };

  return (
    <div 
      className={`${isOpen ? "opacity-100 z-50" : "opacity-0 z-[-1] pointer-events-none"} w-full h-full fixed inset-0 flex justify-center items-center bg-black/50 bottom-0 px-4 transition-opacity duration-300`}
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
          className="absolute -top-2 -right-2 z-10 bg-white rounded-full p-1.5 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Cerrar popup"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        <Link
          href={tiendaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Image
            src="/images/popup/popup-tienda.png"
            alt="Visita nuestra nueva tienda virtual - In-Salud Black Friday"
            width={480}
            height={600}
            quality={95}
            style={{ width: '100%', height: 'auto' }}
            className="rounded-lg"
          />
        </Link>
      </div>
    </div>
  );
};

