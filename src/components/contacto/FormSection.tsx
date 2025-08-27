'use client'
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form"
import { FormReservationType } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { formReservationSchema } from "@/schema"
import { Input } from "../ui/input"
import { useForm } from "react-hook-form"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { useState } from "react"
import { toast } from "sonner"
import { fbqTrack } from "@/lib/fbq"
import { eventRegisterGtm } from "@/lib/utils"

export const FormSection = () => {
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

    function onSubmit(values: FormReservationType) {
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
            console.log("Datos enviados:", datosCompletos);
            fbqTrack("Lead", { source: "Formulario contacto" });
            console.log("fbq Lead enviado")
            setIsSubmitting(false);
            form.reset();
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }

  return ( 
    <div className="font-in-nunito">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="nombres"
                            render={({field}) =>(
                                <FormItem>
                                    <FormControl>
                                        <Input className="bg-white rounded-2xl py-6 placeholder:text-in-blue-title placeholder:font-in-nunito font-semibold border-none outline-none focus-visible:ring-0 pl-4 text-in-blue-title" placeholder="Nombre completo" {...field} />
                                    </FormControl>
                                    <FormMessage className="pl-2" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="apellidos"
                            render={({field}) =>(
                                <FormItem>
                                    <FormControl>
                                        <Input className="bg-white rounded-2xl py-6 placeholder:text-in-blue-title placeholder:font-in-nunito font-semibold border-none outline-none focus-visible:ring-0 pl-4 text-in-blue-title" placeholder="Apellidos" {...field} />
                                    </FormControl>
                                    <FormMessage className="pl-2"/>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field}) =>(
                                <FormItem>
                                    <FormControl>
                                        <Input className="bg-white rounded-2xl py-6 placeholder:text-in-blue-title placeholder:font-in-nunito font-semibold border-none outline-none focus-visible:ring-0 pl-4 text-in-blue-title" placeholder="Correo electronico" {...field} />
                                    </FormControl>
                                    <FormMessage className="pl-2"/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="telefono"
                            render={({field}) =>(
                                <FormItem>
                                    <FormControl>
                                        <Input className="bg-white rounded-2xl py-6 placeholder:text-in-blue-title placeholder:font-in-nunito font-semibold border-none outline-none focus-visible:ring-0 pl-4 text-in-blue-title" placeholder="Celular" {...field} />
                                    </FormControl>
                                    <FormMessage className="pl-2"/>
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="detalleConsulta"
                        render={({field}) =>(
                            <FormItem>
                                <FormControl>
                                    <Textarea
                                        className="bg-white rounded-2xl py-6 h-32 placeholder:text-in-blue-title placeholder:font-in-nunito font-semibold border-none outline-none focus-visible:ring-0 pl-4 text-in-blue-title resize-none"
                                        placeholder="Déjanos tu consulta"
                                        {...field}
                                        
                                    />
                                    
                                </FormControl>
                                <FormMessage className="pl-2"/> 
                            </FormItem>
                        )}
                    />
                </div>
                <Button 
                    className="w-full bg-in-blue cursor-pointer hover:bg-in-blue mt-6 rounded-full py-6"
                    disabled={isSubmitting}
                    type="submit">Agendar
                </Button>
            </form>
        </Form>
    </div>
  )
} 
