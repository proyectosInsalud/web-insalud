import { z } from "zod"

export const DiagnosticoSchema = z.object({
  title:      z.string(),
  slug:       z.string(),
  parrafo:    z.string(),
  images:     z.array(z.object({
    src: z.string(),
    alt: z.string()
  })),
  pasosDiagnostico: z.array(z.string()),
  duracion: z.string()
})

