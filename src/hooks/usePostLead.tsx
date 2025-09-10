'use client'
import { fbqTrack } from "@/lib/fbq";
import { eventRegisterGtm } from "@/lib/utils";
import { formReservationSchema } from "@/schema";
import { FormReservationType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export const usePostLead = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<FormReservationType>({
        resolver: zodResolver(formReservationSchema),
        defaultValues: {
            nombres: "",
            apellidos: "",
            email: "",
            telefono: "",
            sede: "",
            turno: "",
            detalleConsulta: ""
        },
    })


    function onSubmitLead(values: FormReservationType) {
        // Crear objeto completo con todos los datos
        const datosCompletos = {
            // Datos del formulario
            nombres: values.nombres,
            apellidos: values.apellidos,
            correo: values.email,
            telefono: values.telefono,
            sede: values.sede,
            turno: values.turno,
            detalleConsulta: values.detalleConsulta
        };

        setIsSubmitting(true);
        
        // Enviar los datos al endpoint de correo
        fetch("/api/mail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datosCompletos)
            
        })
        .then(response => {
            
            if (!response.ok) {
                throw new Error("Error al enviar el correo");
            }
            eventRegisterGtm("form_submission");
            toast.success("Mensaje enviado correctamente");
            fbqTrack("Lead", { source: "Formulario contacto" });
            setIsSubmitting(false);
            form.reset();
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }

    return {
        form,
        onSubmitLead,
        isSubmitting
    }
}
