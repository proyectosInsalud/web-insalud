import { SEOSchema } from "@/schema/servicio";
import { z } from "zod";

// Tipo para los tratamientos (Seo individual))
export type SeoTratamientoType = z.infer<typeof SEOSchema>;