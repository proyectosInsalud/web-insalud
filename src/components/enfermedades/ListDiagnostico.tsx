'use client'
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";
import tratamientos from "@/data/enfermedades/tratamientos-detalle.json";
import Link from "next/link";
import { eventRegisterGtm } from "@/lib/utils";
import { TrendingUp, HeartPulse, ShieldAlert, Flame } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const CATEGORIES = [
  { value: "mas-consultados", label: "Más consultados", icon: TrendingUp },
  { value: "disfunciones-sexuales", label: "Disfunciones sexuales", icon: HeartPulse },
  { value: "infecciones-its", label: "Infecciones ITS", icon: ShieldAlert },
  { value: "enfermedades-inflamatorias", label: "Enfermedades Inflamatorias", icon: Flame },
];

export const ListDiagnostico = () => {
  const categories = CATEGORIES;
  const [activeTab, setActiveTab] = useState("mas-consultados");
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [highlight, setHighlight] = useState({ left: 0, width: 0 });

  // Toque distintivo: un fondo que se desliza hacia el tab activo (no solo
  // un cambio de color estático), midiendo la posición real del trigger.
  useEffect(() => {
    const measure = () => {
      const el = triggerRefs.current[activeTab];
      if (el) setHighlight({ left: el.offsetLeft, width: el.offsetWidth });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeTab]);

  const isFeaturedActive = activeTab === "mas-consultados";

  return (
    <section className="max-w-7xl container mx-auto px-4 py-4 md:py-12 space-y-4">

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="-mx-4 px-4 overflow-x-auto overflow-y-hidden no-scrollbar overscroll-x-contain py-1 sm:py-2 flex justify-center">
          <TabsList className="relative bg-white border shadow-lg rounded-full p-2 gap-1 mx-auto font-in-poppins h-auto">
          <span
            aria-hidden
            className={`absolute top-2 bottom-2 rounded-full transition-all duration-300 ease-out ${isFeaturedActive ? "bg-in-orange/10" : "bg-in-cyan/10"}`}
            style={{ left: highlight.left, width: highlight.width }}
          />
          {categories.map((category) => {
            const Icon = category.icon;
            const glow = category.value === "mas-consultados"
              ? "group-data-[state=active]:bg-in-orange group-data-[state=active]:shadow-[0_0_16px_rgba(255,181,49,0.55)]"
              : "group-data-[state=active]:bg-in-cyan group-data-[state=active]:shadow-[0_0_16px_rgba(0,190,180,0.45)]";
            return (
              <TabsTrigger
                key={category.value}
                ref={(el) => { triggerRefs.current[category.value] = el; }}
                className="group relative z-10 flex flex-col items-center gap-1.5 cursor-pointer rounded-full px-4 md:px-6 py-2 shrink-0 border-transparent bg-transparent shadow-none data-[state=active]:bg-transparent data-[state=active]:border-transparent data-[state=active]:shadow-none transition-all duration-300 hover:-translate-y-0.5"
                value={category.value}
              >
                <span className={`flex items-center justify-center size-10 md:size-11 rounded-full text-in-gray-light transition-all duration-300 group-data-[state=active]:text-white ${glow}`}>
                  <Icon className="size-5 md:size-6" />
                </span>
                <span className="text-xs md:text-sm font-medium text-in-gray-light whitespace-nowrap group-data-[state=active]:font-semibold group-data-[state=active]:text-in-blue-title">
                  {category.label}
                </span>
              </TabsTrigger>
            );
          })}
        </TabsList>
        </div>


        {categories.map((c) => (
          <TabsContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4 md:py-12 font-in-poppins auto-rows-fr items-stretch" key={c.value} value={c.value}>
            {tratamientos
              .filter((tratamiento) => tratamiento.categoria === c.value)
              .map((tratamiento) => (
                <div className="bg-white border hover:border-in-cyan shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 p-4 rounded-2xl flex flex-col h-full" key={tratamiento.slug}>
                  <div className="relative">
                    {c.value === "mas-consultados" && (
                      <span className="absolute top-3 left-3 z-10 bg-in-orange text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                        Más consultado
                      </span>
                    )}
                    <Image
                      src={tratamiento.imagen}
                      alt={tratamiento.alt?? "Urologia Insalud"}
                      loading="lazy"
                      width={1200}
                      height={600}
                      className="w-full h-auto rounded-lg mb-4"
                    />
                  </div>
                  <div className="space-y-4 flex flex-col grow px-2">
                    <h2 className="font-in-nunito font-semibold text-in-cyan text-2xl">
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
                    <div className="flex flex-col md:flex-row gap-4 mt-auto pt-4">
                      <Link
                      onClick={() => eventRegisterGtm("whatsapp_click")}
                        href={`https://wa.me/+51997231931?text=Hola%2C%20vi%20su%20web%20de%20Insalud%20y%20quisiera%20información%20sobre%20el%20tratamiento%20de%20${encodeURIComponent(tratamiento.titulo)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button
                          className="bg-in-cyan text-white hover:bg-in-blue-dark w-full px-6 py-5 rounded-3xl cursor-pointer shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                          >
                          Agendar cita
                        </Button>
                      </Link>
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
