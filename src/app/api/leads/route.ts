import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

// Función para guardar en Google Sheets
async function saveToGoogleSheets(data: any) {
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

    // Intentar guardar en CallHub primero
    const callhubUrl = process.env.CALLHUB_LEADS_URL || "http://callhub.insalud.pe:4000/api/leads/web";
    
    try {
      const res = await axios.post(callhubUrl, data, {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 10000,
      });

      return NextResponse.json({ success: true, data: res.data, source: "callhub" });
    } catch (callhubError) {
      // Si CallHub falla, guardar en Google Sheets como respaldo
      console.warn("CallHub no disponible, guardando en Google Sheets:", callhubError);
      
      try {
        const sheetsResult = await saveToGoogleSheets(data);
        return NextResponse.json({ 
          success: true, 
          data: sheetsResult, 
          source: "google_sheets",
          message: "Guardado en Google Sheets (CallHub no disponible)" 
        });
      } catch (sheetsError) {
        console.error("Error guardando en Google Sheets:", sheetsError);
        // Si ambos fallan, retornar error
        throw new Error("No se pudo guardar el lead ni en CallHub ni en Google Sheets");
      }
    }
  } catch (error: any) {
    console.error("Error saving lead:", error);
    return NextResponse.json({ 
      error: "Error saving lead", 
      message: error.message 
    }, { status: 500 });
  }
}