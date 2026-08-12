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
import { FormReservationModalType } from "@/types";
import { formReservationModalSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { eventRegisterGtm } from "@/lib/utils";
import { sendReservationEmail } from "@/services/SendEmail";
import { saveLead } from "@/services/SaveLeads";
import { usePathname } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { CalendarDays, ChevronDownIcon } from "lucide-react";
import { problemasSalud } from "@/data/problemasSalud";
import { sedesAccordion } from "@/data/sedesAccordion";

export function ReservationModal() {
  const {
    isReservationModalOpen,
    closeReservationModal,
    reservationData,
    resetReservationData,
  } = useModalStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);

  const pathname = usePathname();

  const form = useForm<FormReservationModalType>({
    resolver: zodResolver(formReservationModalSchema),
    defaultValues: {
      nombres: "",
      apellidos: "",
      email: "",
      telefono: "",
      detalleConsulta: "Sin detalles",
      sede: "",
      turno: "",
      problemaSalud: "",
      fecha: undefined,
    },
  });

  // Si el usuario ya eligió consulta/sede/fecha en el formulario del hero,
  // se precargan acá. Si entró por cualquier otro botón "Reservar cita" del
  // sitio, estos campos llegan vacíos y el usuario los completa en el modal
  // (antes quedaban ocultos y sin forma de verlos o editarlos).
  useEffect(() => {
    if (!isReservationModalOpen) return;
    form.setValue("problemaSalud", reservationData.problemaSalud || "");
    form.setValue("sede", reservationData.sede || "");
    if (reservationData.fecha) {
      form.setValue("fecha", reservationData.fecha);
    } else {
      form.resetField("fecha");
    }
  }, [isReservationModalOpen, reservationData, form]);

  async function onSubmit(data: FormReservationModalType) {
    try {
      const reservationDetails = {
        nombres: data.nombres,
        apellidos: data.apellidos,
        correo: data.email,
        telefono: data.telefono,
        problemaSalud: data.problemaSalud,
        sede: data.sede,
        fecha: data.fecha.toISOString().split("T")[0],
        detalleConsulta: data.detalleConsulta || "Sin detalles adicionales",
      };

      setIsSubmitting(true);

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

      eventRegisterGtm("form_submission");

      toast.success("Cita agendada correctamente");

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
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <FormField
                    control={form.control}
                    name="problemaSalud"
                    render={({ field }) => (
                      <FormItem>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger className="w-full font-in-nunito py-5 text-sm">
                            <SelectValue placeholder="Consulta médica" />
                          </SelectTrigger>
                          <SelectContent>
                            {problemasSalud.map((problema) => (
                              <SelectItem key={problema.id} value={problema.value}>
                                {problema.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="sede"
                    render={({ field }) => (
                      <FormItem>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger className="w-full font-in-nunito py-5 text-sm">
                            <SelectValue placeholder="Sede" />
                          </SelectTrigger>
                          <SelectContent>
                            {sedesAccordion.map((sede) => (
                              <SelectItem key={sede.id} value={sede.name}>
                                {sede.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="fecha"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <Popover open={openCalendar} onOpenChange={setOpenCalendar}>
                          <PopoverTrigger className="relative w-full" asChild>
                            <Button
                              type="button"
                              variant="outline"
                              className="w-full h-full py-5 hover:text-in-gray-base text-in-gray-base font-in-nunito justify-between font-normal"
                            >
                              <p className="pl-9">
                                {field.value ? field.value.toLocaleDateString() : "Fecha"}
                              </p>
                              <CalendarDays className="w-4 h-4 left-4 absolute text-in-cyan" />
                              <ChevronDownIcon className="text-in-gray-light" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={(date) => {
                                field.onChange(date);
                                setOpenCalendar(false);
                              }}
                              captionLayout="dropdown"
                              disabled={(date) => {
                                const startOfToday = new Date();
                                startOfToday.setHours(0, 0, 0, 0);
                                return date < startOfToday || date.getDay() === 0;
                              }}
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

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
