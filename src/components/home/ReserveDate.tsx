"use client";

import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { Button } from "@/components/ui/button";
import { problemasSalud } from "@/data/problemasSalud";
import { sedesAccordion } from "@/data/sedesAccordion";
import { useModalStore } from "@/schema/store/modalStore";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarDays, CalendarIcon, ChevronDownIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { Form, FormField, FormItem, FormMessage } from "../ui/form";
import { useForm } from "react-hook-form";
import { FormPreReservationType } from "@/types";
import { formPreReservationSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useOpenForm } from "@/hooks/useOpenForm";

export const ReserveDate = () => {
  const [openCallendar, setOpenCallendar] = useState(false);
  const { handleTrackReservation } = useOpenForm();

  const setProblemaSalud = useModalStore((state) => state.setProblemaSalud);
  const setSede = useModalStore((state) => state.setSede);
  const setFecha = useModalStore((state) => state.setFecha);

  const form = useForm<FormPreReservationType>({
    resolver: zodResolver(formPreReservationSchema),
    defaultValues: {
      consultaMedica: "",
      sede: "",
      date: undefined,
    },
  });


  

  return (
    <div className="px-4 pt-24 space-y-8">
      <h2 className="text-center hidden md:block text-in-blue-dark font-in-nunito md:text-3xl lg:text-4xl xl:text-5xl font-bold">
        Encuentra tu tratamiento en InSalud
      </h2>

      <section>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleTrackReservation)}
            className="grid max-w-5xl container mx-auto shadow-[0_4px_24px_rgba(0,180,216,0.20)] grid-cols-1 gap-y-8 lg:gap-y-0 lg:grid-cols-12 items-start gap-x-8 rounded-4xl py-6 px-[18px] md:py-6 md:px-8 bg-white -mt-[134px] md:mt-0"
          >
            <div className="grid gap-y-4 grid-cols-1 col-span-1 lg:gap-y-0 lg:grid-cols-3 lg:col-span-9 gap-x-2">
              <FormField
                control={form.control}
                name="consultaMedica"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={(v) => {
                        field.onChange(v);
                        setProblemaSalud(v);
                      }}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full relative font-in-nunito py-6 pl-12 text-sm">
                        <div>
                          <Image
                            src={"/svg/doctor-problema.svg"}
                            alt="icono urologo"
                            width={20}
                            height={20}
                            className="absolute left-4"
                          />
                          <SelectValue placeholder="Consulta medica" />
                        </div>
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
                    <Select
                      onValueChange={(v) => {
                        field.onChange(v);
                        setSede(v);
                      }}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="overflow-hidden min-w-0 w-full relative font-in-nunito py-6 pl-12 text-sm">
                        <div>
                          <Image
                            src={"/svg/icono-sede.svg"}
                            alt="Icono sede"
                            width={20}
                            height={20}
                            className="absolute left-4"
                          />
                          <SelectValue
                            className="truncate"
                            placeholder="Sede"
                          />
                        </div>
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
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <Popover
                      open={openCallendar}
                      onOpenChange={setOpenCallendar}
                    >
                      <PopoverTrigger
                        className="relative py-3.5 md:py-3"
                        asChild
                      >
                        <Button
                          variant="outline"
                          id="date"
                          className="w-full h-full hover:text-in-gray-base text-in-gray-base font-in-nunito justify-between font-normal"
                        >
                          <p className="pl-9 ">
                            {field.value
                              ? field.value.toLocaleDateString()
                              : "Fecha"}
                          </p>

                          <CalendarDays className="w-4 h-4 left-4 absolute text-in-cyan" />
                          <ChevronDownIcon className="text-in-gray-light" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto overflow-hidden p-0"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={(date) => {
                            field.onChange(date);
                            setFecha(date || null);
                          }}
                          captionLayout="dropdown"
                          disabled={(date) => {
                            const startOfToday = new Date();
                            startOfToday.setHours(0, 0, 0, 0);

                            // ❌ deshabilita si es antes de hoy o si es domingo
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
            <div className="col-span-full lg:col-span-3">
              <Button
                type="submit"
                size={"personal"}
                className="w-full h-full py-3 text-base cursor-pointer font-in-poppins hover:bg-in-cyan bg-in-cyan/90 rounded-full"
              >
                <CalendarIcon className="w-6 h-4 mr-2" />
                Reservar ahora
              </Button>
            </div>
          </form>
        </Form>
      </section>
    </div>
  );
};
