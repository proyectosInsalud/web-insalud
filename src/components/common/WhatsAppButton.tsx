"use client";

import { eventRegisterGtm } from "@/lib/utils";
// import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog-wsp";
import { Input } from "../ui/input";
import { saveLead } from "@/services/SaveLeads";
import { useState } from "react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export const WhatsAppButton = ({

  // phoneNumber,
  // message = "¡Hola! vi su pagina web Insalud y me gustaría agendar una cita",
}: WhatsAppButtonProps) => {
  // Eliminar cualquier caracter que no sea número
  // const cleanNumber = phoneNumber.replace(/\D/g, "");

  // Crear el enlace de WhatsApp
  // const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
  //   message
  // )}`;
  const [phoneNumber, setPhoneNumber] = useState("");
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSaveLead = async (phoneNumber: string) => {
    if (!phoneNumber.trim()) {
      setError("El número de teléfono es obligatorio");
      return;
    }
    if (phoneNumber.length !== 9 || !/^\d+$/.test(phoneNumber)) {
      setError("El número debe tener exactamente 9 dígitos");
      return;
    }
    setError("");
    setIsLoading(true);
    try {
      await saveLead({
        phone: `51${phoneNumber}`,
        id_lead_source: 1,
        name: "",
        email: "",
        url: "",
        reason: "",
        sede: "",
        date: "",
        id_announcement: "",
      });
      setOpen(false); // Close dialog after successful save
      eventRegisterGtm("whatsapp_floating_click");
      setPhoneNumber("");
      console.log("Lead saved successfully");
    } catch (error) {
      console.error("Error saving lead:", error);
      setError("Error al guardar el lead. Inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <div className="fixed bottom-6 right-6 z-50">
        <AlertDialogTrigger className="cursor-pointer">
          <div
            onClick={() => eventRegisterGtm("whatsapp_floating_click")}
            className="relative flex items-center"
            aria-label="Contactar por WhatsApp"
          >
            {/* Círculo exterior (efecto de pulso) */}
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25"></div>

            {/* Círculo principal */}
            <div className="relative flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-lg transition-all duration-300 hover:scale-110">
              <FaWhatsapp className="text-3xl" />
            </div>
          </div>
          {/* <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => eventRegisterGtm("whatsapp_floating_click")}
            className="relative flex items-center"
            aria-label="Contactar por WhatsApp"
          >
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25"></div>

            <div className="relative flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-lg transition-all duration-300 hover:scale-110">
              <FaWhatsapp className="text-3xl" />
            </div>
          </Link> */}
        </AlertDialogTrigger>
      </div>
      <AlertDialogContent className="py-4 w-[380px] shadow-none">
        <AlertDialogHeader className="space-y-1">
          <div className="flex justify-between items-start">
            <AlertDialogTitle className="text-base font-in-nunito">Brindanos tu telefono para continuar</AlertDialogTitle>
            <div className="cursor-pointer" onClick={() => setOpen(false)}>
              <IoIosClose size={28} />
            </div>
          </div>
          <AlertDialogDescription></AlertDialogDescription>

          <div className="flex flex-col gap-2 space-y-2">
            <div className="relative">
              <FaWhatsapp className="absolute left-2 top-1/2 -translate-y-1/2 text-xl text-in-cyan" />
              <Input className="placeholder:font-in-nunito m-0 py-2 pl-9 h-full w-full" value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value); setError(""); }} type="tel" placeholder="Tu número" />
            </div>
            {error && <p className="text-red-500 text-xs text-left">{error}</p>}

            <AlertDialogFooter>
              <button
                onClick={() => handleSaveLead(phoneNumber)}
                disabled={isLoading}
                className="cursor-pointer bg-in-cyan h-full text-white hover:bg-in-blue font-in-nunito px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed w-full"
              >
                {isLoading ? "Cargando.." : "Continuar"}
              </button>
            </AlertDialogFooter>
          </div>
        </AlertDialogHeader>

      </AlertDialogContent>
    </AlertDialog>
  );
};
