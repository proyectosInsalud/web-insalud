import { z } from "zod";

export const formReservationSchema = z.object({
    nombres: z.string()
        .min(1, { message: "El nombre es requerido" })
        .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
        .max(50, { message: "El nombre no puede exceder 50 caracteres" })
        .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, { message: "El nombre solo puede contener letras y espacios" })
        .refine((val) => val.trim().length > 0, { message: "El nombre no puede estar vacío" }),

    apellidos: z.string()
        .min(1, { message: "El apellido es requerido" })
        .min(2, { message: "El apellido debe tener al menos 2 caracteres" })
        .max(50, { message: "El apellido no puede exceder 50 caracteres" })
        .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, { message: "El apellido solo puede contener letras y espacios" })
        .refine((val) => val.trim().length > 0, { message: "El apellido no puede estar vacío" }),
    email: z.email({ message: "Ingresa un correo electrónico válido" }),
    telefono: z.string()
        .min(1, { message: "Teléfono requerido" })
        .min(9, { message: "Mínimo 9 dígitos" })
        .regex(/^9\d{8}$/, { message: "Debe empezar con 9" }),
    motivo: z.string().min(1, { message: "El motivo es requerido" }),
    sede: z.string().min(1, { message: "La sede es requerida" }),
    turno: z.string().min(1, { message: "El turno es requerido" }),
    // mensaje: z.string().min(5, { message: "Mensaje mínimo de 5 caracteres" }),
})
