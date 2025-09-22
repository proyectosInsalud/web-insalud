import { z } from "zod";

export const leadsSchema = z.object({
    id_lead_source: z.number(),
    name: z.string(),
    email: z.string(),
    phone: z.string(),
    reason: z.string().optional(),
    sede: z.string().optional(),
    date: z.string().optional(),
    url: z.string(),
    id_announcement: z.string().optional(), // ID del anuncio
});