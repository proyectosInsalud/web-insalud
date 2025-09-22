interface EmailData {
  nombres: string;
  apellidos: string;
  correo: string;
  telefono: string;
  problemaSalud: string;
  sede: string;
  fecha: string;
  detalleConsulta: string;
}

export async function sendReservationEmail(emailData: EmailData): Promise<void> {
  try {
    const response = await fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      throw new Error("Error al enviar el correo");
    }

    // Email sent successfully
    return Promise.resolve();
  } catch (error) {
    console.error("Error al enviar el correo de reserva:", error);
    throw error;
  }
}