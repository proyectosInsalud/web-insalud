"use client"
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { testimonials } from "@/data/testimonials"
import Image from "next/image"
import { useEffect, useState } from "react"

export const Testimonials = () => {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if(!api) return 

        // Obtener informacion inicial
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        // Escuchar evento de seleccion
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <section className="container mx-auto max-w-7xl px-4 py-12">
            <article className="bg-in-bg-testimonials rounded-2xl p-6 py-8 md:py-12 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 items-center">
                <div>
                    <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-in-blue-dark font-in-nunito text-center md:text-left pb-2">
                        Testimonios reales de 
                        <span className="text-in-cyan block"> {` `}
                            nuestros pacientes
                        </span> 
                    </h2>
                    <p className="text-in-gray text-center md:text-left font-in-poppins">Conoce los testimonios</p>
                </div>
                <div>
                    <div className="overflow-hidden">
                        <Carousel className="relative" setApi={setApi}>
                            <CarouselContent className="font-in-poppins -ml-4">
                                {testimonials.map((testimonial) => (
                                    <CarouselItem key={testimonial.id} className="pl-4 md:basis-[95%]">
                                        <div className="bg-white py-6 md:py-8 px-6 md:px-12 rounded-2xl h-full">
                                            <div className="flex flex-col justify-between h-full">
                                                <p className="text-in-gray-base text-sm md:text-base font-medium">{testimonial.description}</p>
                                                <div className="flex items-center gap-4 mt-6">
                                                    {/* <Image 
                                                        src={testimonial.image} 
                                                        alt={`Foto de ${testimonial.name}`} 
                                                        width={40} 
                                                        height={40} 
                                                        className="rounded-full"
                                                        loading="lazy"
                                                        quality={90}
                                                    /> */}
                                                    <div>
                                                        <p className="font-semibold">{testimonial.name}</p>
                                                        <p className="text-sm text-in-gray">{testimonial.anio}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <div className="flex items-center justify-center md:justify-start gap-4 relative pt-4 pl-4  ">
                                <button 
                                    className="bg-in-blue w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-in-blue/90 disabled:opacity-50 disabled:cursor-not-allowed"
                                    onClick={() => api?.scrollPrev()}
                                    disabled={current === 1}
                                >
                                    <Image src="/svg/arrow-left.svg" alt="arrow-left" width={24} height={24} />
                                </button>
                                <span className="text-in-gray-base font-medium">
                                    0{current} de 0{count}
                                </span>
                                <button 
                                    className="bg-in-blue w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-in-blue/90 disabled:opacity-50 disabled:cursor-not-allowed"
                                    onClick={() => api?.scrollNext()}
                                    disabled={current === count}
                                >
                                    <Image src="/svg/arrow-right.svg" alt="arrow-left" width={24} height={24} />
                                </button>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </article>
        </section>
    )
}
