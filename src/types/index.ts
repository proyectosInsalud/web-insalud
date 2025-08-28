import { formPreReservationSchema, formReservationSchema } from "@/schema";
import { DiagnosticoSchema } from "@/schema/diagnostico";
import { z } from "zod";

export type FormReservationType = z.infer<typeof formReservationSchema>
export type TypeDiagnostico = z.infer<typeof DiagnosticoSchema>;
export type FormPreReservationType = z.infer<typeof formPreReservationSchema>;