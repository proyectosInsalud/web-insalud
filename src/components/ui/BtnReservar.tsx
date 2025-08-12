"use client"

import { cn } from '@/lib/utils'
import { Button } from './button'
import { CalendarIcon } from 'lucide-react'
import { useModalStore } from '@/store/modalStore';

export const BtnReservar = ({ className }: { className?: string }) => {
  const { openReservationModal } = useModalStore();
  return (
    <Button 
      onClick={openReservationModal}
      className={cn('bg-black/10 font-in-poppins rounded-full flex items-center py-6 gap-2 text-white hover:bg-black/20 transition-colors cursor-pointer', className)} style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
      <CalendarIcon className='w-6 h-6' />
      Reservar una cita
    </Button>
  )
}
