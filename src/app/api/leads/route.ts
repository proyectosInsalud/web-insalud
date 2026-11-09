import axios from "axios";
import { JWT } from "google-auth-library";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { LeadType } from "@/types/leads";

const SHEETS_SCOPE = "https://www.googleapis.com/auth/spreadsheets";

// La llave privada suele llegar con "\n" literales desde las variables de entorno.
function getServiceAccountConfig() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const tab = process.env.GOOGLE_SHEET_TAB || "Leads";

  if (!email || !key || !sheetId) return null;
  return { email, key, sheetId, tab };
}

// Fila en el mismo orden de columnas que usaba el Apps Script.
function toSheetRow(data: LeadType) {
  return [
    new Date().toISOString(),
    data.id_lead_source ?? "",
    data.name ?? "",
    data.email ?? "",
    data.phone ?? "",
    data.reason ?? "",
    data.sede ?? "",
    data.date ?? "",
    data.url ?? "",
    data.id_announcement ?? "",
  ];
}

// Principal: Google Sheets API con cuenta de servicio (sin Apps Script).
async function saveWithServiceAccount(
  data: LeadType,
  cfg: NonNullable<ReturnType<typeof getServiceAccountConfig>>
) {
  const auth = new JWT({
    email: cfg.email,
    key: cfg.key,
    scopes: [SHEETS_SCOPE],
  });
  const { token } = await auth.getAccessToken();
  if (!token) throw new Error("No se pudo obtener el token de Google");

  const range = encodeURIComponent(`${cfg.tab}!A:J`);
  const url =
    `https://sheets.googleapis.com/v4/spreadsheets/${cfg.sheetId}` +
    `/values/${range}:append`;

  const response = await axios.post(
    url,
    { values: [toSheetRow(data)] },
    {
      // RAW evita que un valor como "=HYPERLINK(...)" se interprete como fórmula.
      params: { valueInputOption: "RAW", insertDataOption: "INSERT_ROWS" },
      headers: { Authorization: `Bearer ${token}` },
      timeout: 10000,
    }
  );

  return response.data;
}

// Transitorio: webhook de Apps Script, solo si aún no se configuró la cuenta de servicio.
async function saveWithLegacyWebhook(data: LeadType) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) return null;

  const [timestamp, id_lead_source, name, email, phone, reason, sede, date, url, id_announcement] =
    toSheetRow(data);
  const response = await axios.post(
    webhookUrl,
    { timestamp, id_lead_source, name, email, phone, reason, sede, date, url, id_announcement },
    { headers: { "Content-Type": "application/json" }, timeout: 10000 }
  );
  return response.data;
}

async function saveToGoogleSheets(data: LeadType) {
  const cfg = getServiceAccountConfig();
  if (cfg) return saveWithServiceAccount(data, cfg);

  const legacy = await saveWithLegacyWebhook(data);
  if (legacy === null) {
    throw new Error(
      "Google Sheets no está configurado (GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID)"
    );
  }
  return legacy;
}

const escapeHtml = (value: unknown) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// Respaldo: si Sheets falla, el lead llega por correo y no se pierde.
async function sendBackupEmail(data: LeadType, sheetsError: string) {
  const to = process.env.GESTOR_EMAIL || process.env.SMTP_USER;
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !to) {
    throw new Error("SMTP no está configurado para el respaldo por correo");
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "465"),
    secure: true,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });

  const rows = Object.entries({
    Nombre: data.name,
    Teléfono: data.phone,
    Correo: data.email,
    Motivo: data.reason,
    Sede: data.sede,
    Fecha: data.date,
    "Fuente (id)": data.id_lead_source,
    Anuncio: data.id_announcement,
    URL: data.url,
  })
    .map(
      ([label, value]) =>
        `<tr><td style="padding:4px 12px 4px 0"><b>${label}</b></td><td>${escapeHtml(value)}</td></tr>`
    )
    .join("");

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to,
    subject: "[RESPALDO] Lead web no guardado en Google Sheets - INSALUD",
    html: `
      <p>Este lead no se pudo guardar en Google Sheets y se envía por correo para no perderlo.</p>
      <table>${rows}</table>
      <p style="color:#888">Error de Sheets: ${escapeHtml(sheetsError)}</p>
    `,
  });
}

export async function POST(request: NextRequest) {
  let data: LeadType;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  // CallHub (CALLHUB_LEADS_URL, endpoint /api/leads/web) lleva caído desde antes de
  // dic. 2025 -- confirmado 404 y ausente de su propio Swagger -- sin que nadie lo haya
  // reactivado desde entonces. Se quita el intento para no perder ~10s de timeout en
  // cada lead; reactivar aquí si backend confirma una URL vigente.
  try {
    const sheetsResult = await saveToGoogleSheets(data);
    return NextResponse.json({
      success: true,
      data: sheetsResult,
      source: "google_sheets",
    });
  } catch (sheetsError) {
    const sheetsMessage =
      sheetsError instanceof Error ? sheetsError.message : "Error desconocido";
    console.error("Error saving lead to Google Sheets:", sheetsError);

    try {
      await sendBackupEmail(data, sheetsMessage);
      // El lead no se perdió: se responde éxito para no bloquear al usuario.
      return NextResponse.json({
        success: true,
        source: "email_backup",
      });
    } catch (emailError) {
      console.error("Error sending lead backup email:", emailError);
      return NextResponse.json(
        { error: "Error saving lead", message: sheetsMessage },
        { status: 500 }
      );
    }
  }
}
