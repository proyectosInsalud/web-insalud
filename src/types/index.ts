import { formReservationSchema } from "@/schema";
import { z } from "zod";

export type FormReservationType = z.infer<typeof formReservationSchema>