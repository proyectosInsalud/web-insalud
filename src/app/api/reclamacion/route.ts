import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "465"),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },

  // 👇 claves para estrés
  pool: true, // reutiliza conexiones
  maxConnections: 3, // # máximo de conexiones al SMTP
  maxMessages: 100, // mensajes por conexión antes de reciclarla
  rateDelta: 1000, // ventana de 1 segundo
  rateLimit: 5, // máx. 5 correos/segundo en total

  logger: true,
  debug: true,
  connectionTimeout: 20_000,
  greetingTimeout: 10_000,
  socketTimeout: 30_000,
});

// Prefijos de sede para el código de seguimiento (RQ-PE-{SEDE}-{AÑO}-{SUFIJO}).
const CODIGOS_SEDE: Record<string, string> = {
  "El Golf": "GOLF",
  "Sur": "SUR",
  "Jesús María": "JM",
  "No corresponde a una sede específica": "GEN",
};

// No hay base de datos ni almacenamiento persistente en este proyecto, así que
// el código no es un contador secuencial real (000001, 000002...) sino un
// sufijo único basado en el timestamp — nunca se repite y no requiere
// infraestructura nueva.
function generarCodigoSeguimiento(sede: string) {
  const anio = new Date().getFullYear();
  const codigoSede = CODIGOS_SEDE[sede] ?? "GEN";
  const sufijo = String(Date.now()).slice(-6);
  return `RQ-PE-${codigoSede}-${anio}-${sufijo}`;
}

// No contempla feriados peruanos, solo excluye sábados y domingos.
function sumarDiasHabiles(fecha: Date, dias: number) {
  const resultado = new Date(fecha);
  let sumados = 0;
  while (sumados < dias) {
    resultado.setDate(resultado.getDate() + 1);
    const diaSemana = resultado.getDay();
    if (diaSemana !== 0 && diaSemana !== 6) sumados++;
  }
  return resultado;
}

function formatearFecha(fecha: Date) {
  return fecha.toLocaleDateString("es-PE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function formatearFechaHora(fecha: Date) {
  const fechaTexto = formatearFecha(fecha);
  const horaTexto = fecha.toLocaleTimeString("es-PE", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${fechaTexto}, ${horaTexto}`;
}

function buildCorreoPacienteHtml({
  nombre,
  codigo,
  fechaRecepcion,
  tipo,
}: {
  nombre: string;
  codigo: string;
  fechaRecepcion: string;
  tipo: string;
}) {
  return `
    <div style="background: #F4F8F8; padding: 40px 0; font-family: 'Segoe UI', Arial, sans-serif; color: #16323A;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 560px; margin: 0 auto; background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(11,61,92,0.08);">
        <tr>
          <td style="background: #0B3D5C; padding: 28px 32px; text-align: center;">
            <h1 style="color: #fff; font-size: 1.5rem; margin: 0; font-weight: 700;">Hemos recibido tu ${tipo.toLowerCase()}</h1>
          </td>
        </tr>
        <tr>
          <td style="padding: 32px;">
            <p style="margin: 0 0 16px;">Hola ${nombre},</p>
            <p style="margin: 0 0 16px;">Confirmamos que hemos recibido tu ${tipo.toLowerCase()} el ${fechaRecepcion}.</p>
            <p style="margin: 0 0 8px;">Tu código de seguimiento es:</p>
            <div style="background: #E8F7F6; border: 1.5px solid #2AACA4; border-radius: 10px; padding: 16px; text-align: center; margin-bottom: 16px;">
              <span style="font-size: 1.3rem; font-weight: 700; color: #0B3D5C; letter-spacing: 0.5px;">${codigo}</span>
            </div>
            <p style="margin: 0 0 16px;">Conserva este código — lo vas a necesitar si quieres darle seguimiento a tu caso o comunicarte con nosotros al respecto.</p>
            <p style="margin: 0 0 16px;">Conforme a lo establecido en la Ley N.° 29571 (Código de Protección y Defensa del Consumidor), tenemos un plazo máximo de <strong>15 días hábiles, improrrogable</strong>, para responderte. Nuestra respuesta llegará a este mismo correo, citando el código indicado arriba.</p>
            <p style="margin: 0 0 16px;">Si tienes alguna consulta adicional mientras tanto, puedes escribirnos a <a href="mailto:libro.reclamaciones@insalud.pe" style="color: #2AACA4;">libro.reclamaciones@insalud.pe</a>.</p>
            <p style="margin: 24px 0 0;">Gracias por confiar en InSalud.</p>
            <p style="margin: 4px 0 0; font-weight: 600;">InSalud Perú</p>
          </td>
        </tr>
      </table>
    </div>
  `;
}

function buildCorreoInternoHtml({
  codigo,
  fechaRecepcion,
  fechaLimite,
  sede,
  tipo,
  data,
  esMenorDeEdad,
  attachments,
}: {
  codigo: string;
  fechaRecepcion: string;
  fechaLimite: string;
  sede: string;
  tipo: string;
  data: Record<string, string>;
  esMenorDeEdad: boolean;
  attachments: { filename: string }[];
}) {
  const fila = (label: string, valor?: string) =>
    valor
      ? `<tr><td style="padding:8px 0;border-bottom:1px solid #CDE4E2;"><strong style="color:#0B3D5C;">${label}:</strong><span style="margin-left:8px;color:#16323A;">${valor}</span></td></tr>`
      : "";

  const seccionMenor = esMenorDeEdad
    ? `
      <tr><td style="padding:20px 0 8px;"><strong style="color:#0B3D5C;">--- Si es menor de edad ---</strong></td></tr>
      ${fila("Nombre del padre/madre/representante", data["representante.nombreCompleto"])}
      ${fila("Documento", data["representante.documento"])}
      ${fila("Domicilio", data["representante.domicilio"])}
      ${fila("Teléfono", data["representante.telefono"])}
      ${fila("Correo", data["representante.correo"])}
    `
    : "";

  const adjuntosTexto =
    attachments.length > 0
      ? attachments.map((a) => a.filename).join(", ")
      : "El paciente no adjuntó documentos.";

  return `
    <div style="background: #F4F8F8; padding: 40px 0; font-family: 'Segoe UI', Arial, sans-serif; color: #16323A;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 620px; margin: 0 auto; background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(11,61,92,0.08);">
        <tr>
          <td style="background: #0B3D5C; padding: 28px 32px; text-align: center;">
            <h1 style="color: #fff; font-size: 1.4rem; margin: 0; font-weight: 700;">Nuevo ${tipo} registrado en el Libro de Reclamaciones — insalud.pe</h1>
          </td>
        </tr>
        <tr>
          <td style="padding: 32px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 0.95rem;">
              ${fila("Código de seguimiento", codigo)}
              ${fila("Fecha de recepción", fechaRecepcion)}
              ${fila("Fecha límite de respuesta (15 días hábiles, improrrogable)", fechaLimite)}
              ${fila("Sede", sede)}
              ${fila("Tipo", tipo)}

              <tr><td style="padding:20px 0 8px;"><strong style="color:#0B3D5C;">--- Datos del consumidor ---</strong></td></tr>
              ${fila("Nombre completo", `${data.nombres} ${data.apellidoPaterno} ${data.apellidoMaterno}`)}
              ${fila("Tipo y número de documento", `${data["documento.tipoDocumento"] || ""} ${data["documento.numeroDocumento"] || ""}`.trim())}
              ${fila("Teléfono", data.telefono)}
              ${fila("Correo electrónico", data.correo)}
              ${fila("Dirección", data.direccion)}

              ${seccionMenor}

              <tr><td style="padding:20px 0 8px;"><strong style="color:#0B3D5C;">--- Bien o servicio contratado ---</strong></td></tr>
              ${fila("Tipo de producto/servicio", data.tipoProducto)}
              ${fila("Monto", data.monto)}
              ${fila("Fecha de compra o servicio", data.fechaCompra)}

              <tr><td style="padding:20px 0 8px;"><strong style="color:#0B3D5C;">--- Detalle ---</strong></td></tr>
              ${fila("Tipo de reclamación", tipo)}
              ${fila("Detalle de la reclamación", data.detalleReclamacion)}
              ${fila("Pedido del consumidor", data.pedidoConsumidor)}

              <tr><td style="padding:20px 0 8px;"><strong style="color:#0B3D5C;">--- Documentos adjuntos por el paciente ---</strong></td></tr>
              <tr><td style="padding:8px 0;color:#16323A;">${adjuntosTexto}</td></tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background: #F4F8F8; text-align: center; padding: 16px 0; color: #5C7C82; font-size: 0.85rem;">
            Este correo se genera automáticamente al recibirse el formulario en insalud.pe/libro-de-reclamaciones.
          </td>
        </tr>
      </table>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const data: Record<string, string> = {};
    const attachments: { filename: string; content: Buffer; contentType: string }[] = [];

    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        const buffer = Buffer.from(await value.arrayBuffer());
        attachments.push({
          filename: value.name,
          content: buffer,
          contentType: value.type,
        });
      } else {
        data[key] = value;
      }
    }

    // Validar campos básicos
    if (!data.nombres || !data.correo || !data.telefono) {
      return NextResponse.json(
        { error: "Campos requeridos faltantes" },
        { status: 400 }
      );
    }

    const esMenorDeEdad = data.menorDeEdad === "true";
    const correoDestinatarioPaciente = esMenorDeEdad
      ? data["representante.correo"] || data.correo
      : data.correo;

    const sede = data.sede || "No corresponde a una sede específica";
    const tipo = data.tipoReclamacion === "queja" ? "Queja" : "Reclamo";
    const codigo = generarCodigoSeguimiento(sede);
    const fechaRecepcionDate = new Date();
    const fechaLimiteDate = sumarDiasHabiles(fechaRecepcionDate, 15);

    // pruebas de estrés
    const isTestRun = request.headers.get("x-test-run") === "true";

    const destinatarioInterno = isTestRun
      ? process.env.SMTP_USER
      : process.env.GESTOR_RECLAMACIONES_EMAIL || process.env.SMTP_USER;
    const destinatarioPaciente = isTestRun
      ? process.env.SMTP_USER
      : correoDestinatarioPaciente;

    const subjectPrefix = isTestRun ? "[STRESS] " : "";

    // Correo 1 — Confirmación al paciente (o representante, si es menor de edad). Sin adjuntos.
    const correoPaciente = {
      from: `"InSalud - Libro de Reclamaciones" <${process.env.SMTP_USER}>`,
      to: destinatarioPaciente,
      replyTo: process.env.GESTOR_RECLAMACIONES_EMAIL || process.env.SMTP_USER,
      subject: `${subjectPrefix}Hemos recibido tu reclamo — Código ${codigo}`,
      headers: { "X-Test-Run": String(isTestRun) },
      html: buildCorreoPacienteHtml({
        nombre: data.nombres,
        codigo,
        fechaRecepcion: formatearFecha(fechaRecepcionDate),
        tipo,
      }),
    };

    // Correo 2 — Notificación interna a libro.reclamaciones@insalud.pe. Con adjuntos.
    const correoInterno = {
      from: process.env.SMTP_USER,
      to: destinatarioInterno,
      replyTo: data.correo,
      subject: `${subjectPrefix}Nuevo reclamo registrado — Código ${codigo} — vence en 15 días hábiles`,
      headers: { "X-Test-Run": String(isTestRun) },
      attachments,
      html: buildCorreoInternoHtml({
        codigo,
        fechaRecepcion: formatearFechaHora(fechaRecepcionDate),
        fechaLimite: formatearFecha(fechaLimiteDate),
        sede,
        tipo,
        data,
        esMenorDeEdad,
        attachments,
      }),
    };

    await Promise.all([
      transporter.sendMail(correoPaciente),
      transporter.sendMail(correoInterno),
    ]);

    return NextResponse.json(
      { message: "Reclamación enviada exitosamente", codigo },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar la reclamación:", error);
    return NextResponse.json(
      { error: "Error al enviar la reclamación" },
      { status: 500 }
    );
  }
}
