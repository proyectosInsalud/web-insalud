import { formPreReservationSchema, formReservationSchema, formReservationModalSchema } from "@/schema";
import { z } from "zod";

// Tipo para la reserva de citas
export type FormReservationType = z.infer<typeof formReservationSchema>

// Tipo para la pre-reserva de citas
export type FormPreReservationType = z.infer<typeof formPreReservationSchema>;

// Tipo para el modal final de reserva (sede/fecha/problemaSalud obligatorios)
export type FormReservationModalType = z.infer<typeof formReservationModalSchema>;