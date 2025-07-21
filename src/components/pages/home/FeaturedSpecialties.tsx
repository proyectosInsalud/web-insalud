'use client'
import { Button } from '@/components/ui/button'
import { CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { descriptionSpecialties  } from '@/data/featuredSpecialties'
import Image from 'next/image'
import Link from 'next/link'
import { useModalStore } from '@/store/modalStore'

export const FeaturedSpecialties = () => {
  const { openReservationModal } = useModalStore()

  return (
    <div id="servicios" className='max-w-7xl mx-auto px-4 container'>
        <h2 className='text-center text-2xl md:text-5xl font-in-nunito font-bold text-in-blue-dark'>Enfermedades Urológicas</h2>
        {/* <Tabs defaultValue="1" className='mt-12'> */}
        <Tabs defaultValue="1" className='mt-0'>
            <TabsList className='font-in-poppins bg-transparent space-x-4 mx-auto hidden absolute'>  
                <TabsTrigger className='data-[state=active]:bg-in-cyan cursor-pointer data-[state=active]:text-white py-5 px-4 rounded-full border border-in-cyan text-in-blue' value="1">Disfunción Eréctil</TabsTrigger>
                <TabsTrigger className='data-[state=active]:bg-in-cyan cursor-pointer data-[state=active]:text-white py-5 px-4 rounded-full border border-in-cyan text-in-blue' value="2">VPH</TabsTrigger>
                <TabsTrigger className='data-[state=active]:bg-in-cyan cursor-pointer data-[state=active]:text-white py-5 px-4 rounded-full border border-in-cyan text-in-blue' value="3">Prostatitis Crónica</TabsTrigger>
                <TabsTrigger className='data-[state=active]:bg-in-cyan cursor-pointer data-[state=active]:text-white py-5 px-4 rounded-full border border-in-cyan text-in-blue' value="4">Otros</TabsTrigger>
            </TabsList>
            {
                descriptionSpecialties.map((especialidad) => (
                    <TabsContent key={especialidad.id} value={especialidad.id.toString()}>
                        <p className='text-center font-in-poppins text-in-blue-title font-medium my-4 px-4'>{especialidad.description}</p>
                        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {
                                especialidad.cards.map((card) => (
                                    <div key={card.id}  className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 flex flex-row md:flex-col gap-4 border items-center justify-center">
                                        <div className="p-0 w-5/12 md:w-full h-full grid">
                                            <Image 
                                            src={card.image} 
                                            alt={card.title} 
                                                width={200} 
                                                height={200} 
                                                className='w-full h-full md:h-[240px] object-cover rounded-lg' />
                                        </div>
                                        <div className='w-7/12 md:w-full pr-1 md:pr-0'>
                                            <div className='p-0'>
                                            <div className='py-1 md:px-2 md:py-4 space-y-2 text-in-blue-title md:h-[150px]'>
                                                    <CardTitle className="md:text-xl font-in-poppins font-semibold">
                                                        {card.title}
                                                    </CardTitle>
                                                    <p className="pb-1 md:pb-0 font-in-nunito leading-5 md:leading-relaxed text-sm md:text-base md:line-clamp-3">
                                                        {card.description}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='p-0 mt-auto'>
                                                <div className='flex items-center justify-start md:gap-6 gap-2 w-full md:mb-4 '>
                                                    <Button onClick={() => openReservationModal()} className='text-white font-in-poppins font-medium bg-in-blue border-in-blue border-2 md:px-4 md:py-5 rounded-full transition-all duration-150 hover:bg-in-blue/90 hover:text-white text-sm md:text-base cursor-pointer py-0.5 w-1/2 text-center md:w-auto'>Reservar <span className='hidden xl:inline'>ahora</span></Button>
                                                    <Link href={`/especialidades/${card.id}`} className='text-in-blue-title font-in-poppins pointer-events-none font-medium transition-all duration-300 border-in-blue-title border-2 md:px-4 md:py-2 rounded-full hover:bg-in-blue-title hover:text-white text-sm md:text-base p-0.5 w-1/2 text-center md:w-auto'>Conoce <span className='hidden xl:inline'>más</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </section>
                    </TabsContent>
                ))
            }
        </Tabs>
    </div>
  )
}
