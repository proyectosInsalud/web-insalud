import { DiagnosticoSchema, TestimonialSchema } from "@/schema/servicio";
import { z } from "zod";

// Tipos para la product page de diagnosticos
export type TypeDiagnostico = z.infer<typeof DiagnosticoSchema>;

// Tipo para los testimoniales del product page de diagnosticos
export type TestimonialSchemaType = z.infer<typeof TestimonialSchema>;