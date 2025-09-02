"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useModalStore } from "@/store/modalStore";
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

export function ReservationModal() {
  const {
    isReservationModalOpen,
    closeReservationModal,
    reservationData,
    resetReservationData,
  } = useModalStore();
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  function onSubmit(data: FormReservationType) {
    // Crear objeto completo con todos los datos
    const datosCompletos = {
      // Datos del formulario
      nombres: data.nombres,
      apellidos: data.apellidos,
      correo: data.email,
      telefono: data.telefono,

      // Datos de las selecciones del store
      problemaSalud: reservationData.problemaSalud,
      sede: reservationData.sede,
      fecha: reservationData.fecha,
      detalleConsulta: data.detalleConsulta,
    };

    setIsSubmitting(true);

    // Enviar los datos al endpoint de correo
    fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosCompletos),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al enviar el correo");
        }
        eventRegisterGtm("form_submission");
        toast.success("Cita agendada correctamente");
        setIsSubmitting(false);
        form.reset();
        resetReservationData();
        closeReservationModal();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
