import React from 'react'
import { NavBar } from '../common/NavBar'
import Image from 'next/image'

export const HeroSedes = () => {
  return (
    <>
        <NavBar className='!bg-transparent'/>
        <div className='relative'>
            <Image 
                src="/svg/sedes/banner-sedes.svg" 
                alt="logo insalud" 
                width={100} 
                height={100} 
                priority
                className="w-full h-[60dvh] lg:h-[75dvh] object-cover pointer-events-none" 
            />   
            <div className='text-white absolute bottom-20 md:bottom-32 grid grid-cols-1 md:grid-cols-12 items-end gap-10 left-0 right-0 mx-auto px-4 xl:px-0 max-w-7xl'>
                <div className='md:col-span-6 lg:col-span-5 space-y-4'>
                    <h1 className='text-3xl md:text-4xl font-semibold font-in-nunito text-center md:text-left'>Nuestras sedes <br /> en Perú y Latam</h1>
                    <p className='font-in-poppins text-sm text-center md:text-left'>Encuentra la sede de Insalud más cercana en Lima, Guayaquil o Panamá. Agenda tu cita online y accede a atención médica especializada con tecnología de vanguardia.</p>
                </div>
                <div className='md:col-start-8 md:col-span-7'>
                    <p className='hidden md:block font-in-poppins text-sm'>En Insalud contamos con sedes estratégicamente ubicadas en Jesús María, El Golf y Sur en Lima, además de Guayaquil (Ecuador) y Panamá. <span className='hidden lg:inline'>Cada centro ofrece atención médica integral con profesionales altamente capacitados y modernas instalaciones diseñadas para tu comodidad.</span></p>
                </div>
            </div>
        </div>
    </>
  )
}
