import { leadsSchema } from "@/schema/leadsBd";
import { z } from "zod";

// Tipo para los leads
export type LeadType = z.infer<typeof leadsSchema>;