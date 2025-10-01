import axios from "axios";
import { LeadType } from "@/types";

export async function saveLead(data: LeadType) {
    try {
        const res = await axios.post(
            "/api/leads",
            data,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                timeout: 10000,
            }
        )
        console.log("Lead guardado exitosamente:", res);
    } catch (error) {
        console.error("Error al guardar el lead:", error);
        throw error;
    }
}
