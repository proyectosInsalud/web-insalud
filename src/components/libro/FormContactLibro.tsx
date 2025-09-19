"use client";
import { libroSchema } from "@/schema/libro";
import { LibroReclamacionesType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";

export const FormContactLibro = () => {
  const form = useForm<LibroReclamacionesType>({
    resolver: zodResolver(libroSchema),
    defaultValues: {
      nombres: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      correo: "",
      telefono: "",
      direccion: "",
      referencia: "",
      documento: {
        tipoDocumento: "",
        numeroDocumento: "",
      },
      distrito: "",
      provincia: "",
      departamento: "",
      detalleReclamacion: "",
      pedidoConsumidor: "",
      tipoReclamacion: "",
      tipoProducto: "",
      monto: "",
      fechaCompra: "",
      lugarCompra: "",
      menorDeEdad: false,
      documento1: undefined,
      documento2: undefined,
      documento3: undefined,
    },
  });

  function onSubmit(data: LibroReclamacionesType) {
    const formData = new FormData();

    Object.keys(data).forEach(key => {
      const value = (data as Record<string, unknown>)[key];
      if (value instanceof FileList) {
        for (let i = 0; i < value.length; i++) {
          formData.append(key, value[i]);
        }
      } else if (value !== undefined && value !== null) {
        formData.append(key, String(value));
      }
    });

    fetch("/api/reclamacion", {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Error al enviar la reclamación");
      }
      toast.success("Reclamación enviada correctamente");
      form.reset();
    })
    .catch(error => {
      console.error("Error:", error);
      toast.error("Error al enviar la reclamación");
    });
  }

  return (
    <section className="max-w-7xl mx-auto container px-4">
      <h1 className="py-16 text-center font-bold text-5xl font-in-nunito">
        Libro de Reclamaciones
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="bg-in-cyan/10 rounded-2xl py-10 px-6 space-y-6">
            <p className="text-in-blue-dark font-in-poppins font-semibold text-base md:text-lg">
              1. Identificación del Consumidor Reclamante
            </p>
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="nombres"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-in-blue-dark block">
                      Nombres
                      <span className="text-red-500"> *</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="input_form"
                        placeholder="Ingrese sus nombres"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="apellidoPaterno"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-in-blue-dark block">
                      Apellido Paterno
                      <span className="text-red-500"> *</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="input_form"
                        placeholder="Ingrese su apellido paterno"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="apellidoMaterno"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-in-blue-dark block">
                      Apellido Materno
                      <span className="text-red-500"> *</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="input_form"
                        placeholder="Ingrese su apellido materno"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="documento.tipoDocumento"
                render={({ field }) => (
                  <div className="space-y-2">
                    <FormLabel className="text-in-blue-dark">
                      Tipo de documento
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="bg-white border-in-cyan w-full mb-0">
                        <SelectValue
                          className="bg-white"
                          placeholder="Seleccione un tipo de documento"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="DNI">DNI</SelectItem>
                        <SelectItem value="Pasaporte">Pasaporte</SelectItem>
                        <SelectItem value="Carné de Extranjería">
                          Carné de Extranjería
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </div>
                )}
              />
              <FormField
                control={form.control}
                name="documento.numeroDocumento"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-in-blue-dark">
                      Número de documento
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="input_form"
                        placeholder="Ingrese el número de documento"
                        {...field}
                      />
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
                    <FormLabel className="text-in-blue-dark">
                      Telefono fijo o celular
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="input_form"
                        placeholder="Ingrese su número de telefono"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="correo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-in-blue-dark">
                      Correo electrónico
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="input_form"
                        placeholder="Ingrese su correo electrónico"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="direccion"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-in-blue-dark">
                      Dirección
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="input_form"
                        placeholder="Ingrese su dirección"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="referencia"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-in-blue-dark">
                      Referencia
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="input_form"
                        placeholder="Ingrese la referencia"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="departamento"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-in-blue-dark">
                      Departamento
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="input_form"
                        placeholder="Ingrese el departamento"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="provincia"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-in-blue-dark">
                      Provincia
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="input_form"
                        placeholder="Ingrese la provincia"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="distrito"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-in-blue-dark">
                      Distrito
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="input_form"
                        placeholder="Ingrese el distrito"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="menorDeEdad"
                render={({ field }) => (
                  <FormItem className="py-4">
                    <FormLabel className="text-in-blue-dark">
                      ¿Eres menor de edad?
                    </FormLabel>
                    <RadioGroup
                      value={field.value ? "si" : "no"}
                      onValueChange={(value) => field.onChange(value === "si")}
                      className="flex"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          className="bg-white text-in-blue-dark"
                          value="si"
                          id="option-one"
                        />
                        <Label
                          className="text-in-blue-dark"
                          htmlFor="option-one"
                        >
                          Si
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          className="bg-white text-in-blue-dark"
                          value="no"
                          id="option-two"
                        />
                        <Label
                          className="text-in-blue-dark"
                          htmlFor="option-two"
                        >
                          No
                        </Label>
                      </div>
                    </RadioGroup>
                  </FormItem>
                )}
              />
            </section>

          </div>

          <div className="bg-in-cyan/10 rounded-2xl py-10 px-6 space-y-6">
            <p className="text-in-blue-dark font-in-poppins font-semibold text-base md:text-lg">
              2. Identificación del Bien Contratado
            </p>
            <section className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="tipoProducto"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-in-blue-dark">
                      Tipo de Producto
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="bg-white w-full border-in-cyan">
                        <SelectValue
                          className="text-in-blue-dark"
                          placeholder="Seleccione el tipo de producto"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="producto">Producto</SelectItem>
                        <SelectItem value="servicio">Servicio</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="monto"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-in-blue-dark">Monto</FormLabel>
                    <FormControl>
                      <Input
                        className="input_form"
                        placeholder="Ingrese el monto"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fechaCompra"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-in-blue-dark">
                      Fecha de Compra o Servicio
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          data-empty={!field.value}
                          className="data-[empty=true]:text-muted-foreground w-full hover:bg-white border-in-cyan justify-start text-left font-normal"
                        >
                          <CalendarIcon />
                          {field.value ? (
                            format(new Date(field.value), "PPP")
                          ) : (
                            <span>Seleccione una fecha</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={field.value ? new Date(field.value) : undefined}
                          onSelect={(d) => field.onChange(d ? d.toISOString() : "")}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
             <FormField
                control={form.control}
                name="lugarCompra"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-in-blue-dark">Lugar de Compra o Servicio</FormLabel>
                    <FormControl>
                      <Input
                        className="input_form"
                        placeholder="Ingrese la sede o direccion"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </section>

          </div>
          <div className="bg-in-cyan/10 rounded-2xl py-10 px-6 space-y-6">
            <p className="text-in-blue-dark font-in-poppins font-semibold text-base md:text-lg">
            3. Detalle de Reclamación y Pedido del Consumidor
            </p>
            <section className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="tipoReclamacion"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel className="text-in-blue-dark">
                      Tipo de Reclamación
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="bg-white w-full border-in-cyan">
                        <SelectValue
                          className="text-in-blue-dark"
                          placeholder="Seleccione el tipo de reclamación"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="reclamo">Reclamo</SelectItem>
                        <SelectItem value="queja">Queja</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="detalleReclamacion"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel className="text-in-blue-dark">Detalle de la reclamación</FormLabel>
                    <Textarea
                      className="input_form resize-none"
                      placeholder="Ingrese el detalle"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="pedidoConsumidor"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel className="text-in-blue-dark">Pedido del consumidor</FormLabel>
                    <Textarea
                      className="input_form resize-none"
                      placeholder="Ingrese el detalle"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </section>

          </div>
          <div className="bg-in-cyan/10 rounded-2xl py-10 px-6 space-y-6">
            <p className="text-in-blue-dark font-in-poppins font-semibold text-base md:text-lg">
            Adjuntar documentos (opcional)
            </p>
            <section className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="documento1"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel className="text-in-blue-dark">Documento 1</FormLabel>
                    <Input className="bg-white" type="file" multiple onChange={(e) => field.onChange(e.target.files ?? null)} />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="documento2"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel className="text-in-blue-dark">Documento 2</FormLabel>
                    <Input className="bg-white" type="file" multiple onChange={(e) => field.onChange(e.target.files ?? null)} />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="documento3"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel className="text-in-blue-dark">Documento 3</FormLabel>
                    <Input className="bg-white" type="file" multiple onChange={(e) => field.onChange(e.target.files ?? null)} />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </section>

          </div>
          <div className="flex justify-center">
            <Button
                type="submit"
                className="bg-in-blue-dark cursor-pointer hover:bg-in-blue-dark/80 rounded-full px-16 text-lg justify-center text-center mx-auto text-white font-in-poppins font-semibold py-6"
            >
                Enviar reclamo
            </Button>
          </div>
        </form>
      </Form>
      <div className="py-16 space-y-4">
        <p className="text-in-gray-base font-in-poppins text-sm">(*) La presente sección será completada por INSALUD CORP E.I.R.L. le hará llegar al correo electrónico proporcionado en la presente Hoja de Reclamación las observaciones y acciones que se adopten en atención al reclamo o queja presentado.</p>
        
        <div className="space-y-2 font-in-poppins">
            <p className="text-in-blue-dark font-in-poppins font-semibold text-lg">Notas:</p>
            <ul className="list-disc list-inside text-in-gray-base text-sm">
                <li>La formulación del reclamo no impide acudir a otras vías de solución de controversias, ni es requisito previo para interponer una denuncia ante el INDECOPI.</li>
                <li>El proveedor debe dar respuesta al reclamo o queja en un plazo no mayor a quince (15) días hábiles, el cual es improrrogable.</li>
                <li>El tratamiento de sus datos personales en este Libro de Reclamaciones y en este Portal tiene por finalidad gestionar de manera correcta su reclamo o queja conforme a las disposiciones legales sobre la materia y llevar un registro histórico de la casuística presentada a fin de mejorar nuestra atención.</li>
            </ul>
        </div>
      </div>
    </section>
  );
};
