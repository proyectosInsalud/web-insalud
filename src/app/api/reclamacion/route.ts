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


export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const data: Record<string, string> = {};
    const attachments: { filename: string; content: Buffer; contentType: string }[] = [];

    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        // Es un archivo
        const buffer = Buffer.from(await value.arrayBuffer());
        attachments.push({
          filename: value.name,
          content: buffer,
          contentType: value.type,
        });
        data[key] = value.name; // Guardar el nombre en data para el HTML
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

    // pruebas de estrés
    const isTestRun = request.headers.get("x-test-run") === "true";

    // Email de destino para reclamaciones
    const destinatario = isTestRun
      ? process.env.SMTP_USER // 👉 tu buzón de pruebas
      : process.env.GESTOR_RECLAMACIONES_EMAIL || process.env.SMTP_USER;

    // Configuración del correo
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: destinatario,
      replyTo: data.correo,
      subject: `${
        isTestRun ? "[STRESS] " : ""
      }Nueva Reclamación - INSALUD`,
      headers: { "X-Test-Run": String(isTestRun) }, // para filtrar en tu buzón
      attachments,
      html: `
                <div style="background: #f4f8fb; padding: 40px 0; font-family: 'Segoe UI', 'Arial', sans-serif; color: #1a237e;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 16px; box-shadow: 0 4px 24px rgba(30, 136, 229, 0.08); overflow: hidden;">
                        <tr>
                            <td style="background: #1976d2; padding: 32px 0; text-align: center;">
                                <h1 style="color: #fff; font-size: 2rem; margin: 0; font-weight: 700; letter-spacing: 1px;">Nueva Reclamación</h1>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 32px 32px 16px 32px;">
                                <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 1rem;">
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e3eaf2;">
                                            <strong style="color: #1976d2;">Nombres:</strong>
                                            <span style="color: #222; margin-left: 8px;">${data.nombres}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e3eaf2;">
                                            <strong style="color: #1976d2;">Apellido Paterno:</strong>
                                            <span style="color: #222; margin-left: 8px;">${data.apellidoPaterno}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e3eaf2;">
                                            <strong style="color: #1976d2;">Apellido Materno:</strong>
                                            <span style="color: #222; margin-left: 8px;">${data.apellidoMaterno}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e3eaf2;">
                                            <strong style="color: #1976d2;">Correo:</strong>
                                            <a href="mailto:${data.correo}" style="color: #1565c0; text-decoration: underline; margin-left: 8px;">${data.correo}</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e3eaf2;">
                                            <strong style="color: #1976d2;">Teléfono:</strong>
                                            <a href="tel:${data.telefono}" style="color: #1565c0; text-decoration: underline; margin-left: 8px;">${data.telefono}</a>
                                        </td>
                                    </tr>
                                    ${data.mensaje ? `
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e3eaf2;">
                                            <strong style="color: #1976d2;">Mensaje:</strong>
                                            <span style="color: #222; margin-left: 8px;">${data.mensaje}</span>
                                        </td>
                                    </tr>
                                    ` : ""}
                                    ${data.tipoReclamacion ? `
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e3eaf2;">
                                            <strong style="color: #1976d2;">Tipo de Reclamación:</strong>
                                            <span style="color: #222; margin-left: 8px;">${data.tipoReclamacion}</span>
                                        </td>
                                    </tr>
                                    ` : ""}
                                    ${data.detalleReclamacion ? `
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e3eaf2;">
                                            <strong style="color: #1976d2;">Detalle de la Reclamación:</strong>
                                            <span style="color: #222; margin-left: 8px;">${data.detalleReclamacion}</span>
                                        </td>
                                    </tr>
                                    ` : ""}
                                    ${data.pedidoConsumidor ? `
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e3eaf2;">
                                            <strong style="color: #1976d2;">Pedido del Consumidor:</strong>
                                            <span style="color: #222; margin-left: 8px;">${data.pedidoConsumidor}</span>
                                        </td>
                                    </tr>
                                    ` : ""}
                                    ${data['documento.tipoDocumento'] ? `
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e3eaf2;">
                                            <strong style="color: #1976d2;">Tipo de Documento:</strong>
                                            <span style="color: #222; margin-left: 8px;">${data['documento.tipoDocumento']}</span>
                                        </td>
                                    </tr>
                                    ` : ""}
                                    ${data['documento.numeroDocumento'] ? `
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e3eaf2;">
                                            <strong style="color: #1976d2;">Número de Documento:</strong>
                                            <span style="color: #222; margin-left: 8px;">${data['documento.numeroDocumento']}</span>
                                        </td>
                                    </tr>
                                    ` : ""}
                                    ${data.direccion ? `
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e3eaf2;">
                                            <strong style="color: #1976d2;">Dirección:</strong>
                                            <span style="color: #222; margin-left: 8px;">${data.direccion}</span>
                                        </td>
                                    </tr>
                                    ` : ""}
                                    ${data.referencia ? `
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e3eaf2;">
                                            <strong style="color: #1976d2;">Referencia:</strong>
                                            <span style="color: #222; margin-left: 8px;">${data.referencia}</span>
                                        </td>
                                    </tr>
                                    ` : ""}
                                    ${data.departamento ? `
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e3eaf2;">
                                            <strong style="color: #1976d2;">Departamento:</strong>
                                            <span style="color: #222; margin-left: 8px;">${data.departamento}</span>
                                        </td>
                                    </tr>
                                    ` : ""}
                                    ${data.provincia ? `
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e3eaf2;">
                                            <strong style="color: #1976d2;">Provincia:</strong>
                                            <span style="color: #222; margin-left: 8px;">${data.provincia}</span>
                                        </td>
                                    </tr>
                                    ` : ""}
                                    ${data.distrito ? `
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e3eaf2;">
                                            <strong style="color: #1976d2;">Distrito:</strong>
                                            <span style="color: #222; margin-left: 8px;">${data.distrito}</span>
                                        </td>
                                    </tr>
                                    ` : ""}
                                    ${data.menorDeEdad !== undefined ? `
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e3eaf2;">
                                            <strong style="color: #1976d2;">Menor de Edad:</strong>
                                            <span style="color: #222; margin-left: 8px;">${data.menorDeEdad ? "Sí" : "No"}</span>
                                        </td>
                                    </tr>
                                    ` : ""}
                                    ${data.tipoProducto ? `
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e3eaf2;">
                                            <strong style="color: #1976d2;">Tipo de Producto:</strong>
                                            <span style="color: #222; margin-left: 8px;">${data.tipoProducto}</span>
                                        </td>
                                    </tr>
                                    ` : ""}
                                    ${data.monto ? `
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e3eaf2;">
                                            <strong style="color: #1976d2;">Monto:</strong>
                                            <span style="color: #222; margin-left: 8px;">${data.monto}</span>
                                        </td>
                                    </tr>
                                    ` : ""}
                                    ${data.fechaCompra ? `
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e3eaf2;">
                                            <strong style="color: #1976d2;">Fecha de Compra:</strong>
                                            <span style="color: #222; margin-left: 8px;">${data.fechaCompra}</span>
                                        </td>
                                    </tr>
                                    ` : ""}
                                    ${data.lugarCompra ? `
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e3eaf2;">
                                            <strong style="color: #1976d2;">Lugar de Compra:</strong>
                                            <span style="color: #222; margin-left: 8px;">${data.lugarCompra}</span>
                                        </td>
                                    </tr>
                                    ` : ""}
                                    ${attachments.length > 0 ? `
                                    <tr>
                                        <td style="padding: 12px 0;">
                                            <strong style="color: #1976d2;">Archivos Adjuntos:</strong>
                                            <span style="color: #222; margin-left: 8px;">${attachments.map(a => a.filename).join(', ')}</span>
                                        </td>
                                    </tr>
                                    ` : ""}
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 24px 32px 32px 32px;">
                                <div style="background: #e3f2fd; border-radius: 8px; padding: 16px; text-align: center; color: #1976d2; font-size: 1rem;">
                                    Este correo fue enviado desde el formulario del Libro de Reclamaciones de <strong>INSALUD</strong>.
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style="background: #f4f8fb; text-align: center; padding: 16px 0; color: #90a4ae; font-size: 0.95rem;">
                                &copy; ${new Date().getFullYear()} INSALUD. Todos los derechos reservados.
                            </td>
                        </tr>
                    </table>
                </div>
            `,
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Reclamación enviada exitosamente" },
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