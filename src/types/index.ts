
import { formPreReservationSchema, formReservationSchema } from "@/schema";
import { DiagnosticoSchema, TestimonialSchema } from "@/schema/diagnostico";
import { z } from "zod";

export type FormReservationType = z.infer<typeof formReservationSchema>
export type TypeDiagnostico = z.infer<typeof DiagnosticoSchema>;
export type FormPreReservationType = z.infer<typeof formPreReservationSchema>;
export type TestimonialSchemaType = z.infer<typeof TestimonialSchema>;