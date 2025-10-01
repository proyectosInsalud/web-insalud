import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const url = process.env.CALLHUB_LEADS_URL || "http://callhub.insalud.pe:4000/api/leads/web";

    const res = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 10000,
    });

    return NextResponse.json({ success: true, data: res.data });
  } catch (error) {
    console.error("Error saving lead:", error);
    return NextResponse.json({ error: "Error saving lead" }, { status: 500 });
  }
}