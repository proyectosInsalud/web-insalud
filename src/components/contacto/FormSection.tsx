'use client'
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { usePostLead } from "@/hooks/usePostLead"

export const FormSection = () => {
    const { form, onSubmitLead, isSubmitting } = usePostLead();

  return ( 
    <div className="font-in-nunito">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmitLead)}>
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
