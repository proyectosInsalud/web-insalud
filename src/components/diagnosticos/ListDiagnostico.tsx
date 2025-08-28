import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";
import tratamientos from "@/data/diagnosticos/tratamientos-detalle.json";
import Link from "next/link";
import { eventRegisterGtm } from "@/lib/utils";

export const ListDiagnostico = () => {
  const categories = [
    { value: "mas-consultados", label: "Mas consultados" },
    { value: "disfunciones-sexuales", label: "Disfunciónes sexuales" },
    { value: "infecciones-its", label: "Infecciones ITS" },
    { value: "enfermedades-inflamatorias", label: "Enfermedades Inflamatorias" },
  ];

  return (
    <section className="max-w-7xl container mx-auto px-4 py-4 md:py-12 space-y-4">
      <div className="text-center text-in-blue-title space-y-2">
        {/* <h1 className="font-in-nunito text-2xl md:text-3xl lg:text-4xl font-semibold">Diagnósticos confiables para tu salud íntima</h1>
        <p className="font-in-poppins">Evaluación precisa, trato cercano y opciones de tratamiento claras.</p> */}
      </div>
      <Tabs defaultValue="mas-consultados">
        <div  className="-mx-4 px-4
                overflow-x-auto overflow-y-hidden
                no-scrollbar overscroll-x-contain py-1 sm:py-2 lg:flex justify-center">
          <TabsList className="bg-transparent mx-auto space-x-4 font-in-poppins">
          {categories.map((category) => (
            <TabsTrigger
              key={category.value}
              className={` ${category.value === "mas-consultados" ? "data-[state=active]:bg-in-orange data-[state=active]:border-transparent" : "data-[state=active]:bg-in-cyan data-[state=active]:border-transparent"} cursor-pointer data-[state=active]:text-white text-in-blue rounded-3xl py-4 md:py-6 px-7 transition-all duration-150 md:text-lg border border-in-blue`}
              value={category.value}
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
        </div>
        

        {categories.map((c) => (
          <TabsContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4 md:py-12 font-in-poppins auto-rows-fr items-stretch" key={c.value} value={c.value}>
            {tratamientos
              .filter((tratamiento) => tratamiento.categoria === c.value)
              .map((tratamiento) => (
                <div className={`border ${c.value === "mas-consultados" ? 
                "bg-[linear-gradient(70deg,#13172C_-24.89%,#00BEB4_134.46%)] text-white" : "border-[#CCD1EE]"}  p-4 rounded-2xl flex flex-col h-full`} key={tratamiento.slug}>
                  <Image
                    src={tratamiento.imagen}
                    alt={tratamiento.alt?? "Urologia Insalud"}
                    loading="lazy"
                    width={1200}
                    height={600}
                    className="w-full h-auto rounded-lg mb-4"
                  />
                  <div className="space-y-4 flex flex-col grow px-2">
                    <h2 className={`font-in-nunito font-semibold text-in-cyan text-2xl ${c.value === "mas-consultados" ? "text-white" : ""}`}>
                      {tratamiento.titulo}
                    </h2>
                    {/* <p className="text-sm font-semibold">
                      ¿Presentas alguno de estos síntomas?
                    </p> */}
                    <div>
                      <ul className="list-disc pl-6 space-y-2 text-sm">
                        {tratamiento.sintomas.map((sintoma, i) => (
                          <li className="text-[13px] md:text-base" key={i}>{sintoma}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 mt-auto py-4 px-4">
                      <Link 
                        onClick={() => eventRegisterGtm("service_whatsapp_click")}
                        href={`https://wa.me/+51957016010?text=Hola%2C%20vi%20su%20web%20de%20Insalud%20y%20quisiera%20información%20sobre%20el%20tratamiento%20de%20${encodeURIComponent(tratamiento.titulo)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button className={`${c.value === "mas-consultados" ? "border-2 border-white bg-[#F7FAFA1A] hover:bg-[#F7FAFA1A] " : "bg-in-cyan hover:bg-in-cyan"} w-full  text-white px-6 py-5 rounded-3xl cursor-pointer`}>
                          Agendar cita
                        </Button>
                      </Link>
                      {/* <Link href={`/diagnosticos/${tratamiento.slug}`}>
                          <Button className="bg-white text-in-blue px-6 py-5 rounded-full border hover:text-white hover:bg-in-blue border-in-blue cursor-pointer">
                          Conoce mas
                        </Button>
                      </Link> */}

                    </div>
                  </div>
                </div>
              ))}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};
