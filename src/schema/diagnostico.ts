import { z } from "zod"

export const DiagnosticoSchema = z.object({
  slug:        z.string(),
  parrafo:     z.string()
})

