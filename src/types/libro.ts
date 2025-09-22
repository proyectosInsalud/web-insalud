import { libroSchema } from "@/schema/libro";
import { z } from "zod";

// Tipos para el libro de reclamaciones
export type LibroReclamacionesType = z.infer<typeof libroSchema>;