import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { LeadType } from "@/types/leads";

// Función para guardar en Google Sheets
async function saveToGoogleSheets(data: LeadType) {
  const googleSheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  
  if (!googleSheetsWebhookUrl) {
    throw new Error("GOOGLE_SHEETS_WEBHOOK_URL no está configurada");
  }

  // Preparar los datos para el sheet
  const sheetData = {
    timestamp: new Date().toISOString(),
    id_lead_source: data.id_lead_source || "",
    name: data.name || "",
    email: data.email || "",
    phone: data.phone || "",
    reason: data.reason || "",
    sede: data.sede || "",
    date: data.date || "",
    url: data.url || "",
    id_announcement: data.id_announcement || "",
  };

  const response = await axios.post(googleSheetsWebhookUrl, sheetData, {
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 10000,
  });

  return response.data;
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // CallHub (CALLHUB_LEADS_URL, endpoint /api/leads/web) lleva caído desde antes de
    // dic. 2025 -- confirmado 404 y ausente de su propio Swagger -- sin que nadie lo haya
    // reactivado desde entonces. Se quita el intento para no perder ~10s de timeout en
    // cada lead; reactivar aquí si backend confirma una URL vigente.
    const sheetsResult = await saveToGoogleSheets(data);
    return NextResponse.json({
      success: true,
      data: sheetsResult,
      source: "google_sheets",
    });
  } catch (error) {
    console.error("Error saving lead:", error);
    const errorMessage = error instanceof Error ? error.message : "Error desconocido";
    return NextResponse.json({ 
      error: "Error saving lead", 
      message: errorMessage 
    }, { status: 500 });
  }
}