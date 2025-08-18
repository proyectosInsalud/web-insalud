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
    const {
      nombres,
      apellidos,
      correo,
      telefono,
      tipoAtencion,
      problemaSalud,
      detalleConsulta,
      sede,
      turno,
    } = await request.json();

    if (!nombres || !apellidos || !correo || !telefono) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    // pruebas de estrés
    const isTestRun = request.headers.get("x-test-run") === "true";

    // Email de destino: si se proporciona gestorEmail, usar ese; sino usar el por defecto
    const destinatario = isTestRun
  ? process.env.SMTP_USER    // 👉 tu buzón de pruebas
  : (process.env.GESTOR_EMAIL || process.env.SMTP_USER);

    // Configuración del correo
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: destinatario,
      replyTo: correo,  
      subject: `${isTestRun ? "[STRESS] " : ""}Nueva Solicitud de Reserva - INSALUD`,
      headers: { "X-Test-Run": String(isTestRun) }, // para filtrar en tu buzón
      html: `
                <div style="background: #f4f8fb; padding: 40px 0; font-family: 'Segoe UI', 'Arial', sans-serif; color: #1a237e;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 16px; box-shadow: 0 4px 24px rgba(30, 136, 229, 0.08); overflow: hidden;">
                        <tr>
                            <td style="background: #1976d2; padding: 32px 0; text-align: center;">
                                <h1 style="color: #fff; font-size: 2rem; margin: 0; font-weight: 700; letter-spacing: 1px;">Nueva Solicitud de Reserva</h1>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 32px 32px 16px 32px;">
                                <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 1rem;">
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e3eaf2;">
                                            <strong style="color: #1976d2;">Nombres:</strong>
                                            <span style="color: #222; margin-left: 8px;">${nombres}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e3eaf2;">
                                            <strong style="color: #1976d2;">Apellidos:</strong>
                                            <span style="color: #222; margin-left: 8px;">${apellidos}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e3eaf2;">
                                            <strong style="color: #1976d2;">Correo:</strong>
                                            <a href="mailto:${correo}" style="color: #1565c0; text-decoration: underline; margin-left: 8px;">${correo}</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e3eaf2;">
                                            <strong style="color: #1976d2;">Teléfono:</strong>
                                            <a href="tel:${telefono}" style="color: #1565c0; text-decoration: underline; margin-left: 8px;">${telefono}</a>
                                        </td>
                                    </tr>
                                    ${
                                      tipoAtencion
                                        ? `
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e3eaf2;">
                                            <strong style="color: #1976d2;">Tipo de Atención:</strong>
                                            <span style="color: #222; margin-left: 8px;">${tipoAtencion}</span>
                                        </td>
                                    </tr>
                                    `
                                        : ""
                                    }
                                    ${
                                      detalleConsulta
                                        ? `
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e3eaf2;">
                                            <strong style="color: #1976d2;">Detalles de la Consulta:</strong>
                                            <span style="color: #222; margin-left: 8px;">${detalleConsulta}</span>
                                        </td>
                                    </tr>
                                    `
                                        : ""
                                    }
                                    ${
                                      problemaSalud
                                        ? `
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e3eaf2;">
                                            <strong style="color: #1976d2;">Problema salud:</strong>
                                            <span style="color: #222; margin-left: 8px;">${problemaSalud}</span>
                                        </td>
                                    </tr>
                                    `
                                        : ""
                                    }
                                    ${
                                      sede
                                        ? `
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e3eaf2;">
                                            <strong style="color: #1976d2;">Sede:</strong>
                                            <span style="color: #222; margin-left: 8px;">${sede}</span>
                                        </td>
                                    </tr>
                                    `
                                        : ""
                                    }
                                    ${
                                      turno
                                        ? `
                                    <tr>
                                        <td style="padding: 12px 0;">
                                            <strong style="color: #1976d2;">Turno:</strong>
                                            <span style="color: #222; margin-left: 8px;">${turno}</span>
                                        </td>
                                    </tr>
                                    `
                                        : ""
                                    }
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 24px 32px 32px 32px;">
                                <div style="background: #e3f2fd; border-radius: 8px; padding: 16px; text-align: center; color: #1976d2; font-size: 1rem;">
                                    Este correo fue enviado desde el formulario de reserva de la nueva web de <strong>INSALUD</strong>.
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
      { message: "Correo enviado exitosamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return NextResponse.json(
      { error: "Error al enviar el correo" },
      { status: 500 }
    );
  }
}
