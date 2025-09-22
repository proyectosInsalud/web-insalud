import { formPreReservationSchema, formReservationSchema } from "@/schema";
import { z } from "zod";

// Tipo para la reserva de citas
export type FormReservationType = z.infer<typeof formReservationSchema>

// Tipo para la pre-reserva de citas
export type FormPreReservationType = z.infer<typeof formPreReservationSchema>;