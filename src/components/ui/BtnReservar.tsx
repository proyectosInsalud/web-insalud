
import { cn } from '@/lib/utils'
import { Button } from './button'
import { CalendarIcon } from 'lucide-react'

export const BtnReservar = ({ className }: { className?: string }) => {
  return (
    <Button className={cn('bg-black/10 rounded-full flex items-center py-6 gap-2 text-white hover:bg-black/20 transition-colors cursor-pointer', className)} style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
      <CalendarIcon className='w-6 h-6' />
      Reservar una cita
    </Button>
  )
}
