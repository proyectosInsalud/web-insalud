import z from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB


export const schemaDocumento = z.object({
    tipoDocumento: z.string().min(1, "Seleccione un tipo"),
    numeroDocumento: z.string().min(1, "Complete el campo"),
  })
  .superRefine((data, ctx) => {
    const reglas = {
      "DNI": { re: /^\d{8}$/, msg: "El DNI debe tener exactamente 8 dígitos" },
      "Pasaporte": { re: /^[A-Za-z0-9]{9,12}$/, msg: "Pasaporte: 9–12 caracteres alfanuméricos" },
      "Carné de Extranjería": { re: /^[A-Za-z0-9]{9,12}$/, msg: "Carné: 9–12 caracteres" },
    } as const;
  
    const r = reglas[data.tipoDocumento as keyof typeof reglas];
    if (!r) return; // por si llega un valor raro
  
    if (!r.re.test(data.numeroDocumento)) {
      ctx.addIssue({
        path: ["numeroDocumento"],
        code: "custom",
        message: r.msg,
      });
    }
  });


export const libroSchema = z.object({
    // Identificacion del consumidor
    nombres: z.string().min(1, "Complete el campo"),
    apellidoPaterno: z.string().min(1, "Complete el campo apellido"),
    apellidoMaterno: z.string().min(1, "Complete el campo apellido"),
    documento: schemaDocumento,
    telefono: z.string().min(1, "Complete el campo").max(30, "Maximo 30 digitos"),
    correo: z.string().min(1, "Complete el campo").email("Correo electrónico inválido").max(80, "Máximo 80 caracteres"),
    direccion: z.string().min(1, "Complete el campo"),
    referencia: z.string().min(1, "Complete el campo").optional(),
    departamento: z.string().min(1, "Complete el campo"),
    provincia: z.string().min(1, "Complete el campo"),
    distrito: z.string().min(1, "Complete el campo"),
    menorDeEdad: z.boolean().optional(),


    // Identificación del Bien Contratado
    tipoProducto: z.string().min(1, "Complete el campo"),
    monto: z.string().min(1, "Complete el campo"),
    fechaCompra: z.string().min(1, "Complete el campo"),
    lugarCompra: z.string().min(1, "Complete el campo"),

    // Detalle de Reclamación y Pedido del Consumidor
    tipoReclamacion: z.string().min(1, "Complete el campo"),
    detalleReclamacion: z.string().min(1, "Complete el campo"),
    pedidoConsumidor: z.string().min(1, "Complete el campo"),

    // Adjuntar documentos (opcional)
    documento1: z
    .custom<FileList>((val) => val instanceof FileList, {
      message: "Se requiere un archivo",
    })
    .refine((files) => files && files.length > 0, "Debes subir un archivo")
    .refine(
      (files) => files && files[0].size <= MAX_FILE_SIZE,
      `El archivo no debe superar los ${MAX_FILE_SIZE / 1024 / 1024}MB`
    )
    .optional(),
    documento2: z
    .custom<FileList>((val) => val instanceof FileList, {
      message: "Se requiere un archivo",
    })
    .refine((files) => files && files.length > 0, "Debes subir un archivo")
    .refine(
      (files) => files && files[0].size <= MAX_FILE_SIZE,
      `El archivo no debe superar los ${MAX_FILE_SIZE / 1024 / 1024}MB`
    )
    .optional(),
    documento3: z
    .custom<FileList>((val) => val instanceof FileList, {
      message: "Se requiere un archivo",
    })
    .refine((files) => files && files.length > 0, "Debes subir un archivo")
    .refine(
      (files) => files && files[0].size <= MAX_FILE_SIZE,
      `El archivo no debe superar los ${MAX_FILE_SIZE / 1024 / 1024}MB`
    )
    .optional(),
});
