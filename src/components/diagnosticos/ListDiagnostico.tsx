import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";
import tratamientos from "@/data/diagnosticos/tratamientos-detalle.json";
import Link from "next/link";

export const ListDiagnostico = () => {
  const categories = [
    { value: "disfuncion-erectil", label: "Disfunción Eréctil" },
    { value: "clinica-vph", label: "Clínica VPH" },
    { value: "prostatitis-cronica", label: "Prostatitis Crónica" },
    { value: "urologia-avanzada", label: "Urología Avanzada" },
  ];

  return (
    <section className="max-w-7xl container mx-auto px-4 py-8 md:py-16">
      <div className="text-center text-in-blue-title space-y-2">
        <h1 className="font-in-nunito text-2xl md:text-3xl lg:text-4xl font-semibold">Diagnósticos confiables para tu salud íntima</h1>
        <p className="font-in-poppins">Evaluación precisa, trato cercano y opciones de tratamiento claras.</p>
      </div>
      <Tabs defaultValue="disfuncion-erectil">
        <TabsList className="hidden bg-transparent mx-auto space-x-2 font-in-poppins">
          {categories.map((category) => (
            <TabsTrigger
              key={category.value}
              className="data-[state=active]:bg-in-cyan cursor-pointer data-[state=active]:text-white text-in-blue-dark rounded-3xl py-6 px-4 transition-all duration-150 text-lg border border-in-bg-testimonials"
              value={category.value}
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((c) => (
          <TabsContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-12 font-in-poppins auto-rows-fr items-stretch" key={c.value} value={c.value}>
            {tratamientos
              .filter((tratamiento) => tratamiento.categoria === c.value)
              .map((tratamiento) => (
                <div className="border border-[#CCD1EE] p-4 rounded-lg flex flex-col h-full" key={tratamiento.slug}>
                  <Image
                    src={tratamiento.imagen}
                    alt={tratamiento.alt?? "Urologia Insalud"}
                    loading="lazy"
                    width={1200}
                    height={600}
                    className="w-full h-auto rounded-lg mb-4"
                  />
                  <div className="space-y-4 flex flex-col grow">
                    <h2 className="font-in-nunito font-semibold text-in-cyan text-2xl">
                      {tratamiento.titulo}
                    </h2>
                    <p className="text-sm font-semibold">
                      ¿Presentas alguno de estos síntomas?
                    </p>
                    <div>
                      <ul className="list-disc pl-6 space-y-2 text-sm">
                        {tratamiento.sintomas.map((sintoma, i) => (
                          <li key={i}>{sintoma}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 mt-auto">
                      <Link 
                        href={`https://wa.me/+51957016010?text=Hola%2C%20vi%20su%20web%20de%20Insalud%20y%20quisiera%20información%20sobre%20el%20tratamiento%20de%20${encodeURIComponent(tratamiento.titulo)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button className="bg-in-cyan w-full hover:bg-in-cyan/80 text-white px-6 py-5 rounded-xl cursor-pointer">
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

        {/* <TabsContent
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-12 font-in-poppins"
          value="disfuncion-erectil"
        >
          
          {tratamientos.map((tratamiento) => (
            <div
              key={tratamiento.slug}
              className="border border-[#CCD1EE] p-4 rounded-lg"
            >
              <Image
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Disfunción Eréctil"
                width={1200}
                height={600}
                className="w-full h-auto rounded-lg mb-4"
              />
              <div className="space-y-4">
                <h2 className="font-in-nunito font-semibold text-in-cyan text-2xl">
                  {tratamiento.titulo}
                </h2>
                <p className="text-sm font-semibold">
                  ¿Presentas alguno de estos síntomas?
                </p>
                <div>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    {
                        tratamiento.sintomas.map((sintoma, i) => (
                            <li key={i}>{sintoma}</li>
                        ))
                    }
                  </ul>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <Button className="bg-in-cyan hover:bg-in-cyan/80 text-white px-6 py-5 rounded-full cursor-pointer">
                    Comprar una cita
                  </Button>
                  <Button className="bg-white text-in-blue px-6 py-5 rounded-full border hover:text-white hover:bg-in-blue border-in-blue cursor-pointer">
                    Conoce mas
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </TabsContent>
        <TabsContent value="clinica-vph">
          <div>Contenido para Clínica VPH</div>
        </TabsContent>
        <TabsContent value="prostatitis-cronica">
          <div>Contenido para Prostatitis Crónica</div>
        </TabsContent>
        <TabsContent value="urologia-avanzada">
          <div>Contenido para Urología Avanzada</div>
        </TabsContent> */}
      </Tabs>
    </section>
  );
};
