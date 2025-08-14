import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"

export const TabTratamientos = () => {
  return (
    <>
        <Tabs defaultValue="peru" className="font-in-poppins">
            <div className="flex items-center gap-8 bg-[linear-gradient(127deg,rgba(255,255,255,0.40)_12.11%,rgba(255,255,255,0.10)_73.08%)] shadow-[0_2.874px_17.246px_-0.719px_rgba(0,0,0,0.20)] px-8 rounded-2xl py-4">
                <p className="font-semibold text-in-blue-title">Encuentra tu sede:</p>
                <TabsList className="bg-transparent h-auto space-x-6">
                    <TabsTrigger className="py-1 px-6 rounded-full border-in-blue-dark text-in-blue-dark cursor-pointer transition-all duration-150 border  data-[state=active]:border-transparent data-[state=active]:bg-in-cyan data-[state=active]:text-white data-[state=active]:shadow-none" value="golf">Golf</TabsTrigger>
                    <TabsTrigger className="py-1 px-6 rounded-full border-in-blue-dark text-in-blue-dark cursor-pointer transition-all duration-150 border  data-[state=active]:border-transparent data-[state=active]:bg-in-cyan data-[state=active]:text-white data-[state=active]:shadow-none" value="sur">Sur</TabsTrigger>
                    <TabsTrigger className="py-1 px-6 rounded-full border-in-blue-dark text-in-blue-dark cursor-pointer transition-all duration-150 border  data-[state=active]:border-transparent data-[state=active]:bg-in-cyan data-[state=active]:text-white data-[state=active]:shadow-none" value="pershing">Pershing</TabsTrigger>
                </TabsList>
            </div>
            <div className="mt-4">
                <TabsContent className="grid grid-cols-4" value="golf">
                    <address></address>
                </TabsContent>
                <TabsContent value="sur">
                    <p>Contenido de la pestaña Sur</p>
                </TabsContent>
                <TabsContent value="pershing">
                    <p>Contenido de la pestaña Pershing</p>
                </TabsContent>
            </div>
        </Tabs>
    </>
  )
}
