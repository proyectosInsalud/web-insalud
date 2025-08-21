'use client'
import { servicesItems } from "@/data/servicesItems";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { CardService } from "./CardService";
import { useState } from "react";
import Image from "next/image";

type TabItemServiceProps = {
  category: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const TabItemService = ({ category }: TabItemServiceProps) => {
  const [address, setAddress] = useState("Av. Circunvalación del Golf los Incas 206, Santiago de Surco 15023");

  return (
    <>
      <Tabs defaultValue="golf" className="font-in-poppins">
        <div className="flex flex-col justify-between lg:flex-row gap-4 items-center bg-[linear-gradient(127deg,rgba(255,255,255,0.40)_12.11%,rgba(255,255,255,0.10)_73.08%)] md:shadow-[0_2.874px_17.246px_-0.719px_rgba(0,0,0,0.20)] px-8 rounded-2xl py-2 md:py-4">
          <div className="flex flex-col items-center md:flex-row gap-2 md:gap-4">
            <p className="font-semibold text-in-blue-title">Encuentra tu sede:</p>
            <TabsList className="bg-transparent h-auto space-x-2 md:space-x-4 ">
              <div
                onClick={() => setAddress("Av. Circunvalación del Golf los Incas 206, Santiago de Surco 15023")}
              >
                <TabsTrigger
                  className="py-1 px-6 rounded-full border-in-blue-dark text-in-blue-dark cursor-pointer transition-all duration-150 border  data-[state=active]:border-transparent data-[state=active]:bg-in-cyan data-[state=active]:text-white data-[state=active]:shadow-none"
                  value="golf"
                >
                  Golf
                </TabsTrigger>
              </div>
              <div
                onClick={() => setAddress("Av. Faustino Sánchez Carrión 615, Jesús María 15076")}
              >
                <TabsTrigger
                  className="py-1 px-6 rounded-full border-in-blue-dark text-in-blue-dark cursor-pointer transition-all duration-150 border  data-[state=active]:border-transparent data-[state=active]:bg-in-cyan data-[state=active]:text-white data-[state=active]:shadow-none"
                  value="jesus-maria"
                >
                  Jesus María
                </TabsTrigger>
              </div>
              <div
                onClick={() => setAddress("Av. José C. Mariátegui Mz J • Lote 27, San Juan de Miraflores 15801")}
              >
                <TabsTrigger
                className="py-1 px-6 rounded-full border-in-blue-dark text-in-blue-dark cursor-pointer transition-all duration-150 border  data-[state=active]:border-transparent data-[state=active]:bg-in-cyan data-[state=active]:text-white data-[state=active]:shadow-none"
                value="sur"
              >
                Sur
                </TabsTrigger>
              </div>
              
            </TabsList>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={"/svg/icon-location.svg"}
              alt="icono direccion"
              width={24}
              height={24}
            />
            <p className="text-sm text-center md:text-end">{address}</p>
          </div>
        </div>
        <div className="mt-4">
          <TabsContent value="golf">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-x-4 lg:gap-x-6  gap-y-8 sm:gap-y-6 lg:gap-y-8 xl:gap-y-10">
              {servicesItems
                .filter((item) => item.sedes.includes("golf"))
                .map((item) => (
                  <CardService key={item.slug} {...item} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="sur">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-x-4 lg:gap-x-6  gap-y-8 sm:gap-y-6 lg:gap-y-8 xl:gap-y-10">
              {servicesItems
                .filter((item) => item.sedes.includes("sur"))
                .map((item) => (
                  <CardService key={item.slug} {...item} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="jesus-maria">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-x-4 lg:gap-x-6  gap-y-8 sm:gap-y-6 lg:gap-y-8 xl:gap-y-10">
              {servicesItems
                .filter((item) => item.sedes.includes("jesus-maria"))
                .map((item) => (
                  <CardService key={item.slug} {...item} />
                ))}
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </>
  );
};
