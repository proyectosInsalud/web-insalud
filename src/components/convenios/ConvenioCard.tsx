"use client";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { BadgePercent } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { saveLead } from "@/services/SaveLeads";
import { eventRegisterGtm } from "@/lib/utils";
import type { Convenio } from "@/data/convenios";

// Número dedicado para consultas de Convenios (columna "CELULAR - CONVENIOS" de Convenios Firmados.xlsx).
const CONVENIOS_WHATSAPP = "+51943583887";

const formatDiscount = (discount: string) =>
  discount.charAt(0) + discount.slice(1).toLowerCase();

const getDiscountItems = (discount: string) =>
  discount
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());

export const ConvenioCard = ({ src, name, discount }: Convenio) => {
  const [open, setOpen] = useState(false);
  const [userPhone, setUserPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const pathname = usePathname();

  const handleSubmit = async () => {
    if (!userPhone.trim()) {
      setError("El número de teléfono es obligatorio");
      return;
    }
    if (userPhone.length < 9 || userPhone.length > 11) {
      setError("El número debe tener entre 9 y 11 dígitos");
      return;
    }
    setError("");
    setIsLoading(true);
    try {
      await saveLead({
        phone: `51${userPhone}`,
        id_lead_source: 1,
        name: "",
        email: "",
        url: `https://insalud.pe${pathname}`,
        reason: `Convenio: ${name}`,
        sede: "",
        date: "",
        id_announcement: "convenios",
      });

      const message = `Hola, yo pertenezco a esta empresa/institución: ${name}. Quisiera conocer más sobre el convenio con InSalud${discount ? ` (descuento: ${formatDiscount(discount)})` : ""}.`;
      const whatsappUrl = `https://wa.me/${CONVENIOS_WHATSAPP}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");

      setOpen(false);
      eventRegisterGtm("convenio_lead_submit", { empresa: name });
      setUserPhone("");
    } catch (err) {
      console.error("Error saving lead:", err);
      setError("Error al guardar el lead. Inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) setError("");
      }}
    >
      <DialogTrigger asChild>
        <button
          type="button"
          onClick={() => eventRegisterGtm("convenio_card_click", { empresa: name })}
          className="group relative flex flex-col items-center justify-center gap-2 sm:gap-3 rounded-2xl border border-in-gray-light/20 bg-white p-4 sm:p-6 min-h-38 sm:min-h-44 shadow-sm overflow-hidden transition-all duration-300 cursor-pointer hover:border-in-cyan/40 hover:shadow-xl hover:shadow-in-cyan/10 hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-in-cyan focus-visible:ring-offset-2"
        >
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-in-cyan/0 to-in-cyan/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          {discount && (
            <span
              className="absolute top-2 right-2 z-10 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-red-500 text-white shadow-md ring-2 ring-white"
              title="Tiene descuento por convenio"
            >
              <BadgePercent className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.25} />
            </span>
          )}
          <Image
            src={src}
            alt={`Convenio de InSalud con ${name}`}
            width={160}
            height={80}
            className="relative object-contain w-full h-10 sm:h-16 transition-transform duration-300 group-hover:scale-110 sm:group-hover:-translate-y-2"
          />
          <p className="relative font-in-poppins text-xs sm:text-sm text-in-gray-base text-center line-clamp-4 transition-all duration-300 group-hover:text-in-blue-title sm:group-hover:-translate-y-2">
            {name}
          </p>
          <span className="pointer-events-none absolute inset-x-0 bottom-2 sm:bottom-3 hidden sm:flex items-center justify-center gap-1 font-in-poppins text-xs font-semibold text-in-cyan opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <FaWhatsapp className="text-sm" />
            Consultar convenio
          </span>
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="font-in-nunito text-in-blue-title">
            Yo pertenezco a {name}
          </DialogTitle>
          <DialogDescription className="font-in-poppins">
            Brindanos tu teléfono para continuar por WhatsApp y conocer tu
            tarifa preferencial.
          </DialogDescription>
        </DialogHeader>

        {discount && (
          <div className="rounded-xl bg-in-cyan/10 border border-in-cyan/20 px-4 py-3">
            <p className="font-in-poppins text-sm font-semibold text-in-blue-title mb-1">
              Tu descuento:
            </p>
            <ul className="font-in-poppins text-sm text-in-blue-title list-disc pl-5 space-y-0.5">
              {getDiscountItems(discount).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col gap-2">
          <div className="relative">
            <FaWhatsapp className="absolute left-2 top-1/2 -translate-y-1/2 text-xl text-in-cyan" />
            <Input
              className="placeholder:font-in-nunito m-0 py-2 pl-9 h-full w-full"
              value={userPhone}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setUserPhone(value);
                setError("");
              }}
              type="tel"
              placeholder="Tu número"
              maxLength={11}
            />
          </div>
          {error && <p className="text-red-500 text-xs text-left">{error}</p>}
        </div>

        <DialogFooter>
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="cursor-pointer bg-in-cyan text-white hover:bg-in-blue font-in-nunito px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed w-full"
          >
            {isLoading ? "Cargando.." : "Continuar por WhatsApp"}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
