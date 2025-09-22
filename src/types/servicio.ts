import { SEOSchema } from "@/schema/servicio";
import { z } from "zod";

// Tipo para los servicios (Seo individual))
export type SeoServicioType = z.infer<typeof SEOSchema>;