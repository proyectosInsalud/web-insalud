import z from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

export const SEDES_RECLAMO = [
  "El Golf",
  "Sur",
  "Jesús María",
  "No corresponde a una sede específica",
] as const;

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

// Datos del padre, madre o representante legal — exigido por el Anexo I del
// D.S. N.° 011-2011-PCM cuando el reclamante es menor de edad. Se declaran
// todos opcionales aquí y se exigen condicionalmente en el superRefine de
// libroSchema, cuando menorDeEdad === true.
export const schemaRepresentante = z.object({
  nombreCompleto: z.string().optional(),
  documento: z.string().optional(),
  domicilio: z.string().optional(),
  telefono: z.string().optional(),
  correo: z.string().optional(),
});

export const libroSchema = z.object({
    // Identificacion del consumidor
    nombres: z.string().min(1, "Complete el campo"),
    apellidoPaterno: z.string().min(1, "Complete el campo apellido"),
    apellidoMaterno: z.string().min(1, "Complete el campo apellido"),
    documento: schemaDocumento,
    telefono: z.string().min(1, "Complete el campo").max(30, "Maximo 30 digitos"),
    correo: z.string().min(1, "Complete el campo").email("Correo electrónico inválido").max(80, "Máximo 80 caracteres"),
    direccion: z.string().min(1, "Complete el campo").optional(),
    referencia: z.string().min(1, "Complete el campo").optional(),
    departamento: z.string().min(1, "Complete el campo"),
    provincia: z.string().min(1, "Complete el campo"),
    distrito: z.string().min(1, "Complete el campo"),
    menorDeEdad: z.boolean().optional(),
    representante: schemaRepresentante.optional(),

    // Identificación del Bien Contratado
    tipoProducto: z.string().min(1, "Complete el campo"),
    monto: z.string().min(1, "Complete el campo"),
    fechaCompra: z.string().min(1, "Complete el campo"),
    sede: z.string().min(1, "Seleccione una sede").refine(
      (val) => (SEDES_RECLAMO as readonly string[]).includes(val),
      "Seleccione una sede válida"
    ),

    // Detalle de Reclamación y Pedido del Consumidor
    tipoReclamacion: z.string().min(1, "Complete el campo"),
    detalleReclamacion: z.string().min(1, "Complete el campo"),
    pedidoConsumidor: z.string().min(1, "Complete el campo").optional(),

    // Declaración jurada — reemplaza la firma física del libro tradicional.
    aceptaPrivacidad: z.boolean().refine((val) => val === true, {
      message: "Debes aceptar la Política de Privacidad para continuar",
    }),

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
}).superRefine((data, ctx) => {
  if (!data.menorDeEdad) return;

  if (!data.representante?.nombreCompleto?.trim()) {
    ctx.addIssue({ path: ["representante", "nombreCompleto"], code: "custom", message: "Complete el campo" });
  }
  if (!data.representante?.domicilio?.trim()) {
    ctx.addIssue({ path: ["representante", "domicilio"], code: "custom", message: "Complete el campo" });
  }
  if (!data.representante?.telefono?.trim()) {
    ctx.addIssue({ path: ["representante", "telefono"], code: "custom", message: "Complete el campo" });
  }
  if (!data.representante?.correo?.trim()) {
    ctx.addIssue({ path: ["representante", "correo"], code: "custom", message: "Complete el campo" });
  } else if (!z.string().email().safeParse(data.representante.correo).success) {
    ctx.addIssue({ path: ["representante", "correo"], code: "custom", message: "Correo electrónico inválido" });
  }
});
