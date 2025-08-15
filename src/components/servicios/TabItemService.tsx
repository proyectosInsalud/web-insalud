import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { CardService } from "./CardService";

type TabItemServiceProps = {
  category: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const TabItemService = ({ category }: TabItemServiceProps) => {
  return (
    <>
      <Tabs defaultValue="golf" className="font-in-poppins">
        <div className="flex flex-col md:flex-row gap-2 items-center md:gap-8 bg-[linear-gradient(127deg,rgba(255,255,255,0.40)_12.11%,rgba(255,255,255,0.10)_73.08%)] md:shadow-[0_2.874px_17.246px_-0.719px_rgba(0,0,0,0.20)] px-8 rounded-2xl py-4">
          <p className="font-semibold text-in-blue-title">Encuentra tu sede:</p>
          <TabsList className="bg-transparent h-auto space-x-4 md:space-x-6">
            <TabsTrigger
              className="py-1 px-6 rounded-full border-in-blue-dark text-in-blue-dark cursor-pointer transition-all duration-150 border  data-[state=active]:border-transparent data-[state=active]:bg-in-cyan data-[state=active]:text-white data-[state=active]:shadow-none"
              value="golf"
            >
              Golf
            </TabsTrigger>
            <TabsTrigger
              className="py-1 px-6 rounded-full border-in-blue-dark text-in-blue-dark cursor-pointer transition-all duration-150 border  data-[state=active]:border-transparent data-[state=active]:bg-in-cyan data-[state=active]:text-white data-[state=active]:shadow-none"
              value="pershing"
            >
              Pershing
            </TabsTrigger>
            <TabsTrigger
              className="py-1 px-6 rounded-full border-in-blue-dark text-in-blue-dark cursor-pointer transition-all duration-150 border  data-[state=active]:border-transparent data-[state=active]:bg-in-cyan data-[state=active]:text-white data-[state=active]:shadow-none"
              value="sur"
            >
              Sur
            </TabsTrigger>
          </TabsList>
        </div>
        <div className="mt-4">
          <TabsContent
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-x-4 lg:gap-x-6 xl:gap-x-8 gap-y-4 sm:gap-y-6 lg:gap-y-8 xl:gap-y-10"
            value="golf"
          >
            <CardService />
            <CardService />
            <CardService />
            <CardService />
          </TabsContent>
          <TabsContent
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-x-4 lg:gap-x-6 xl:gap-x-8 gap-y-4 sm:gap-y-6 lg:gap-y-8 xl:gap-y-10"
            value="sur"
          >
            <CardService />
            <CardService />
            <CardService />
          </TabsContent>
          <TabsContent
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-x-4 lg:gap-x-6 xl:gap-x-8 sm:gap-y-6 lg:gap-y-8 xl:gap-y-10"
            value="pershing"
          >
            <CardService />
            <CardService />
          </TabsContent>
        </div>
      </Tabs>
    </>
  );
};
