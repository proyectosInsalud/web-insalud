// import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { CardTypeService } from "./CardTypeService";
import { TabItemService } from "./TabItemService";

export const ListServices = () => {
  return (
    <section className="max-w-7xl container mx-auto px-4 py-6 md:py-12">
      {/* Tabs es la grid */}
      <Tabs
        defaultValue="tratamientos"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* List no debe crear otra "caja": contents */}
        {/* <div className="md:hidden grid grid-cols-2 gap-4 -mt-20 text-in-blue font-bold leading-5">
          <div className="bg-in-bg-testimonials flex flex-col md:gap-2 items-center text-center font-in-nunito text-sm sm:text-base px-4 py-6 rounded-2xl">
            <Image
              src="/svg/icon-treatment-medic-insalud-blue.svg"
              alt="Tratamientos médicos personalizados"
              width={24}
              height={24}
            />
            <h2>Tratamientos <br /> médicos <span className="hidden sm:inline-block md:hidden">
              especializados</span></h2>
          </div>
          <div className="bg-in-bg-testimonials flex flex-col gap-2 items-center text-center font-in-nunito text-sm sm:text-base  px-4 py-6 rounded-2xl">
            <Image
              src="/svg/icon-examen-medico-insalud-blue.svg"
              alt="Tratamientos médicos personalizados"
              width={24}
              height={24}
            />
            <h2>Exámenes <br /> médicos <span className="hidden sm:inline-block md:hidden">
              especializados</span></h2>
          </div>
        </div> */}

        <TabsList className="hidden md:contents p-0 bg-transparent">
          <TabsTrigger
            value="tratamientos"
            disabled
            className="hidden md:block col-span-1 disabled:[all:unset] p-0 m-0 bg-transparent shadow-none
                       data-[state=active]:bg-transparent data-[state=active]:shadow-none
                       focus-visible:ring-0 focus-visible:ring-offset-0 outline-none cursor-pointer"
          >
            <div className="w-full overflow-hidden">
              <CardTypeService
                title="Tratamientos médicos personalizados"
                description="Mejora tu salud con soluciones efectivas, seguras y adaptadas a tus necesidades."
                iconImage="/svg/icon-treatment-medic-insalud.svg"
                bgImage="/images/bg-treatment-medic-insalud.png"
                gradient="bg-[linear-gradient(26deg,#0B1D26_8.7%,rgba(11,29,38,0)_91.29%)]"
                colorIcon="#3277E1"
              />
            </div>
          </TabsTrigger>

          <TabsTrigger
            value="examenes"
            disabled
            className="hidden md:block col-span-1 disabled:[all:unset] p-0 m-0 bg-transparent shadow-none
                       data-[state=active]:bg-transparent data-[state=active]:shadow-none
                       focus-visible:ring-0 focus-visible:ring-offset-0 outline-none cursor-pointer"
          >
            <div className="w-full overflow-hidden">
              <CardTypeService
                title="Exámenes médicos especializados"
                description="Contamos con tecnología de laboratorio y personal capacitado para cuidar tu salud."
                iconImage="/svg/icon-examen-medico-insalud.svg"
                bgImage="/images/bg-exam-medic-insalud.png"
                gradient="bg-[linear-gradient(26deg,#0B1D26_8.7%,rgba(11,29,38,0)_91.29%)]"
                colorIcon="#FFFFFF"
              />
            </div>
          </TabsTrigger>
        </TabsList>

        {/* Paneles: bajo las dos cards y con padding propio */}
        <TabsContent value="tratamientos" className="md:col-span-2 mt-2">
          <TabItemService category="tratamientos" />
        </TabsContent>

      </Tabs>
    </section>
  );
};
