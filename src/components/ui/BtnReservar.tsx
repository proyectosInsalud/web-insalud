"use client"

import { cn, eventRegisterGtm } from '@/lib/utils'
import { Button } from './button'
import { CalendarIcon } from 'lucide-react'
import { useModalStore } from '../../store/modalStore';

type BtnReservarProps = {
  className?: string
  /** Identifica desde qué CTA salió la reserva en GTM (cta_source). */
  source?: string
  label?: string
}

export const BtnReservar = ({ className, source = "hero_desktop", label = "Reservar una cita" }: BtnReservarProps) => {
  const { openReservationModal } = useModalStore();

  const handleOpenReservationModal = () => {
    eventRegisterGtm("booking_start", { cta_source: source })
    openReservationModal()
  }

  return (
    <Button
      onClick={handleOpenReservationModal}
      className={cn('bg-white/15 backdrop-blur-md border border-white/40 font-in-poppins rounded-full flex items-center py-6 gap-2 text-white hover:bg-white/25 shadow-lg transition-colors cursor-pointer', className)} style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
      <CalendarIcon className='w-6 h-6' />
      {label}
    </Button>
  )
}
