import { z } from "zod";

export const formPreReservationSchema = z.object({
  consultaMedica: z.string().min(1, { message: "La consulta médica es requerida" }),
  sede: z.string().min(1, { message: "La sede es requerida" }),
  date: z.date({
    message: "La fecha es requerida",
  }),
});

export const formReservationSchema = z.object({
  nombres: z
    .string()
    .min(1, { message: "El nombre es requerido" })
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
    .max(50, { message: "El nombre no puede exceder 50 caracteres" })
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
      message: "El nombre solo puede contener letras y espacios",
    })
    .refine((val) => val.trim().length > 0, {
      message: "El nombre no puede estar vacío",
    }),
  apellidos: z
    .string()
    .min(1, { message: "El apellido es requerido" })
    .min(2, { message: "El apellido debe tener al menos 2 caracteres" })
    .max(50, { message: "El apellido no puede exceder 50 caracteres" })
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
      message: "El apellido solo puede contener letras y espacios",
    })
    .refine((val) => val.trim().length > 0, {
      message: "El apellido no puede estar vacío",
    }),
  email: z.email({ message: "Ingresa un correo electrónico válido" }),
  telefono: z
    .string()
    .min(1, { message: "Teléfono requerido" })
    .regex(/^\d+$/, { message: "Solo se permiten números" })
    .length(9, { message: "Ingresar solo 9 dígitos" })
    .regex(/^9/, { message: "El teléfono debe empezar con 9" }),
  // Campos opcionales que coinciden con el formulario
  sede: z.string().optional(),
  turno: z.string().optional(),
  problemaSalud: z.string().optional(),
  detalleConsulta: z
    .string()
    .min(10, { message: "Proporciona más detalles (mínimo 10 caracteres)" })
    .max(500, { message: "Demasiado largo (máximo 500 caracteres)" })
    .optional(),
});
