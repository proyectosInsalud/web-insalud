"use client"

import { 
    Sheet, 
    SheetContent,  
    SheetHeader, 
    SheetTitle,  
} from "@/components/ui/sheet";
import { useModalStore } from "@/store/modalStore";
// import { Button } from "../ui/button";
import Image from "next/image";
import { cdn } from "@/utils/cdn";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { useForm } from "react-hook-form";
import { FormReservationType } from "@/types";
import { formReservationSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function ReservationModal() {
    const { isReservationModalOpen, closeReservationModal } = useModalStore();

    const form = useForm<FormReservationType>({
        resolver: zodResolver(formReservationSchema),
        defaultValues: {
            nombres: "",
            apellidos: "",
            email: "",
            telefono: "",
            // mensaje: "",
        }
    })


    function onSubmit(data: FormReservationType) {
        console.log(data)
    }

    return (
        <Sheet open={isReservationModalOpen} onOpenChange={closeReservationModal}>
            <SheetContent side="right" className="w-full sm:max-w-[720px] flex justify-center md:px-6">
                    <SheetHeader>
                            <Image src={cdn("/web/home/main/sheet-image.png")} 
                            alt="banner de laboratorio" width={800} height={100} className="w-full" />
                        <SheetTitle className="text-xl md:text-2xl text-in-blue-title font-semibold font-in-nunito text-center py-6">
                            ¡Ya casi terminas! Agenda tu cita ahora
                        </SheetTitle>
                        
                        <div className="font-in-poppins">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)}>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="nombres"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input className="px-4 py-5 rounded-2xl placeholder:text-in-blue-title" placeholder="Nombre Completo" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="apellidos"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input className="px-4 py-5 rounded-2xl placeholder:text-in-blue-title" placeholder="Apellidos" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input className="px-4 py-5 rounded-2xl placeholder:text-in-blue-title" placeholder="Correo Electrónico" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="telefono"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input className="px-4 py-5 rounded-2xl placeholder:text-in-blue-title" placeholder="Teléfono" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                    </div>
                                    
  
                                    {/* <div className="my-4">
                                        <FormField
                                            control={form.control}
                                            name="mensaje"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Textarea className="px-4 rounded-2xl resize-none" placeholder="Hola..." {...field}  />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div> */}
                                    <Button type="submit" className="w-full cursor-pointer bg-in-blue hover:bg-in-blue-hover mt-4 rounded-xl py-5 font-semibold">
                                        Enviar
                                    </Button> 
                                </form>
                            </Form>
                        </div>
                    </SheetHeader> 
            </SheetContent>
        </Sheet>
    )
}