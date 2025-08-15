import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { CardTypeService } from "./CardTypeService";
import { TabItemService } from "./TabItemService";

export const ListServices = () => {
  return (
    <section className="max-w-7xl container mx-auto px-4 py-12">
      {/* Tabs es la grid */}
      <Tabs defaultValue="tratamientos" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* List no debe crear otra "caja": contents */}
        <TabsList className="contents p-0 bg-transparent">
          <TabsTrigger
            value="tratamientos"
            className="col-span-1 p-0 m-0 bg-transparent shadow-none
                       data-[state=active]:bg-transparent data-[state=active]:shadow-none
                       focus-visible:ring-0 focus-visible:ring-offset-0 outline-none hover:scale-105 transition-transform duration-200 cursor-pointer"
          >
            <div className="w-full overflow-hidden">
              <CardTypeService
                title="Tratamientos médicos personalizados"
                description="Mejora tu salud con soluciones efectivas, seguras y adaptadas a tus necesidades."
                iconImage="/svg/icon-treatment-medic-insalud.svg"
                bgImage="/images/bg-treatment-medic-insalud.png"
                gradient="bg-[linear-gradient(26deg,#3277E1_8.7%,rgba(11,29,38,0)_91.29%)]"
                colorIcon="#3277E1"
              />
            </div>
          </TabsTrigger>

          <TabsTrigger
            value="examenes"
            className="col-span-1 p-0 m-0 bg-transparent shadow-none
                       data-[state=active]:bg-transparent data-[state=active]:shadow-none
                       focus-visible:ring-0 focus-visible:ring-offset-0 outline-none hover:scale-105 transition-transform duration-200 cursor-pointer"
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
          <TabItemService category="tratamientos"/>
        </TabsContent>

        <TabsContent value="examenes" className="md:col-span-2 mt-2">
          <TabItemService category="examenes"/>
        </TabsContent>
      </Tabs>
    </section>
  );
};