'use client'
import { servicesItems } from "@/data/servicesItems";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { CardService } from "./CardService";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type TabItemServiceProps = {
  category: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const TabItemService = ({ category }: TabItemServiceProps) => {
  const [address, setAddress] = useState("Av. Circunvalación del Golf los Incas 206, Santiago de Surco");

  return (
    <>
      <Tabs defaultValue="golf" className="font-in-poppins space-y-3 md:space-y-0">
        <div className="flex flex-col justify-between lg:flex-row gap-8 items-center bg-[linear-gradient(127deg,rgba(255,255,255,0.40)_12.11%,rgba(255,255,255,0.10)_73.08%)] md:shadow-[0_2.874px_17.246px_-0.719px_rgba(0,0,0,0.20)] px-8 rounded-2xl py-2 md:py-4">
          <div className="flex flex-col items-center md:flex-row gap-6 md:gap-4">
            <p className="font-medium text-lg text-in-blue-title">Encuentra tu sede:</p>
            <TabsList className="bg-transparent h-auto space-x-2 md:space-x-4 ">
              <div
                onClick={() => setAddress("Av. Circunvalación del Golf los Incas 206, Santiago de Surco")}
              >
                <TabsTrigger
                  className="py-1 px-6 rounded-full border-in-blue-dark text-in-blue-dark cursor-pointer transition-all duration-150 border  data-[state=active]:border-transparent data-[state=active]:bg-in-cyan data-[state=active]:text-white data-[state=active]:shadow-none"
                  value="golf"
                >
                  Golf
                </TabsTrigger>
              </div>
              <div
                onClick={() => setAddress("Av. Faustino Sánchez Carrión 615")}
              >
                <TabsTrigger
                  className="py-1 px-6 rounded-full border-in-blue-dark text-in-blue-dark cursor-pointer transition-all duration-150 border  data-[state=active]:border-transparent data-[state=active]:bg-in-cyan data-[state=active]:text-white data-[state=active]:shadow-none"
                  value="jesus-maria"
                >
                  Jesus María
                </TabsTrigger>
              </div>
              <div
                onClick={() => setAddress("Av. José C. Mariátegui Mz J, Lote 27, San Juan de Miraflores")}
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
              width={16}
              height={16}
              className="self-start"
            />
            <Link target="_blank" href={`https://www.google.com/maps/search/?api=1&query=${address}`}>
              <p className="text-sm text-in-blue-title hover:underline cursor-pointer">
                {address}
              </p>
            </Link>
          </div>
        </div>
        <div className="md:mt-4">
          <TabsContent value="golf">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-x-4 lg:gap-x-6  gap-y-8 sm:gap-y-6 lg:gap-y-8 xl:gap-y-10">
              {servicesItems
                .filter((item) => item.sedes.includes("golf"))
                .map((item) => (
                  <CardService key={item.id} {...item} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="sur">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-x-4 lg:gap-x-6  gap-y-8 sm:gap-y-6 lg:gap-y-8 xl:gap-y-10">
              {servicesItems
                .filter((item) => item.sedes.includes("sur"))
                .map((item) => (
                  <CardService key={item.id} {...item} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="jesus-maria">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-x-4 lg:gap-x-6  gap-y-8 sm:gap-y-6 lg:gap-y-8 xl:gap-y-10">
              {servicesItems
                .filter((item) => item.sedes.includes("jesus-maria"))
                .map((item) => (
                  <CardService key={item.id} {...item} />
                ))}
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </>
  );
};
