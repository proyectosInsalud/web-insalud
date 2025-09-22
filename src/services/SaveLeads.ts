import axios from "axios";
import { LeadType } from "@/types";

export async function saveLead(data: LeadType) {
    const url = process.env.CALLHUB_LEADS_URL || "";

    try {
        const res = await axios.post(
            url,
            data,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                timeout: 10000,
            }
        )
        console.log("Lead guardado exitosamente:", res.data);
    } catch (error) {
        console.error("Error al guardar el lead:", error);
        throw error;
    }
}
