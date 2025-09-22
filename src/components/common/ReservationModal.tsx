"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useModalStore } from "../../store/modalStore";
import Image from "next/image";
import { cdn } from "@/utils/cdn";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { FormReservationType } from "@/types";
import { formReservationSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useState } from "react";
import { eventRegisterGtm } from "@/lib/utils";
import { sendReservationEmail } from "@/services/SendEmail";
import { saveLead } from "@/services/SaveLeads";
import { usePathname } from "next/navigation";

export function ReservationModal() {
  const {
    isReservationModalOpen,
    closeReservationModal,
    reservationData,
    resetReservationData,
  } = useModalStore();
  const [isSubmitting, setIsSubmitting] = useState(false);


  const pathname = usePathname();

  const form = useForm<FormReservationType>({
    resolver: zodResolver(formReservationSchema),
    defaultValues: {
      nombres: "",
      apellidos: "",
      email: "",
      telefono: "",
      detalleConsulta: "Sin detalles",
      sede: "",
      turno: "",
    },
  });

  async function onSubmit(data: FormReservationType) {
    try {
      // Preparar los datos de la reserva
      const reservationDetails = {
        // Información personal del paciente
        nombres: data.nombres,
        apellidos: data.apellidos,
        correo: data.email,
        telefono: data.telefono,

        // Detalles de la consulta médica
        problemaSalud: reservationData.problemaSalud,
        sede: reservationData.sede,
        fecha: reservationData.fecha ? reservationData.fecha.toISOString().split('T')[0] : '',
        detalleConsulta: data.detalleConsulta || 'Sin detalles adicionales',
      };

      setIsSubmitting(true);

      // Enviar confirmación por correo electrónico
      await sendReservationEmail(reservationDetails);

      await saveLead({
        id_lead_source: 15,
        name: String(reservationDetails.nombres),
        email: String(reservationDetails.correo),
        phone: "51" + String(reservationDetails.telefono),
        url: `${window.location.origin}${pathname}`,
        reason: String(reservationDetails.problemaSalud),
        sede: String(reservationDetails.sede),
        date: String(reservationDetails.fecha),
        id_announcement: "",
      });

      // Registro del evento en Google Tag Manager
      eventRegisterGtm("form_submission");

      // Mostrar mensaje de éxito al usuario
      toast.success("Cita agendada correctamente");

      // Limpiar el formulario y estado
      form.reset();
      resetReservationData();
      closeReservationModal();

    } catch (error) {
      console.error("Error al procesar la reserva:", error);
      toast.error("Error al agendar la cita. Por favor, intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Sheet open={isReservationModalOpen} onOpenChange={closeReservationModal}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-[720px] flex justify-center md:px-6"
      >
        <SheetHeader>
          <Image
            src={cdn("/web/home/main/sheet-image.png")}
            alt="laboratorio de urología"
            width={800}
            height={100}
            className="w-full"
          />
          <SheetTitle className="text-xl md:text-2xl text-in-blue-title font-semibold font-in-nunito text-center pt-6 pb-6 md:pb-0">
            ¡Ya casi terminas! Agenda tu cita ahora
          </SheetTitle>

          <SheetDescription className="hidden md:block text-center text-sm text-gray-600 mb-6">
            Completa el formulario con tus datos para agendar tu cita médica
          </SheetDescription>

          <div className="font-in-poppins">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                {/* Campos ocultos para los datos de selección */}
                <input
                  type="hidden"
                  name="problemaSalud"
                  value={reservationData.problemaSalud}
                />
                <input type="hidden" name="sede" value={reservationData.sede} />
                <input
                  type="hidden"
                  name="fecha"
                  value={
                    reservationData.fecha
                      ? reservationData.fecha.toISOString().slice(0, 10)
                      : ""
                  }
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="nombres"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="px-4 py-5 rounded-2xl placeholder:text-in-blue-title"
                            placeholder="Nombre Completo"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="apellidos"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="px-4 py-5 rounded-2xl placeholder:text-in-blue-title"
                            placeholder="Apellidos"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="px-4 py-5 rounded-2xl placeholder:text-in-blue-title"
                            placeholder="Correo Electrónico"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="telefono"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="px-4 py-5 rounded-2xl placeholder:text-in-blue-title"
                            placeholder="Teléfono"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full cursor-pointer bg-in-blue hover:bg-in-blue-hover mt-4 rounded-xl py-5 font-semibold"
                >
                  Confirmar Reserva
                </Button>
              </form>
            </Form>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
