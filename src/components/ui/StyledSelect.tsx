'use client'

import { useState, useRef } from 'react'
import { ChevronDownIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Option {
  id: string | number
  name: string
  value: string
}

interface StyledSelectProps {
  options: Option[]
  placeholder?: string
  icon?: React.ReactNode
  className?: string
  name?: string
  id?: string
  onChange?: (value: string) => void
}

export const StyledSelect = ({
  options,
  placeholder = "Seleccionar...",
  icon,
  className,
  name,
  id,
  onChange
}: StyledSelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState('')
  const selectRef = useRef<HTMLSelectElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value)
    onChange?.(e.target.value)
  }

  const handleFocus = () => {
    setIsOpen(true)
  }

  const handleBlur = () => {
    setIsOpen(false)
  }

  const selectedOption = options.find(option => option.value === value)

  return (
    <div className={cn("relative", className)}>
      <div className="relative">
        {/* Select nativo (oculto) */}
        <select
          ref={selectRef}
          name={name}
          id={id}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          style={{
            fontSize: '16px', // Evita zoom en iOS
          }}
        >
          <option value="" className="py-3 px-4 font-in-poppins">{placeholder}</option>
          {options.map((option) => (
            <option 
              key={option.id} 
              value={option.value}
              className="py-3 px-4 hover:bg-blue-50 font-in-poppins"
              style={{ 
                padding: '12px 16px',
                fontSize: '14px'
              }}
            >
              {option.name}
            </option>
          ))}
        </select>

        {/* Presentación visual */}
        <div className={cn(
          "relative w-full py-4 px-4 border rounded-lg bg-white transition-all duration-200",
          "border-gray-300 hover:border-gray-400",
          isOpen && "border-blue-500 ring-1 ring-blue-500",
          icon && "pl-12"
        )}>
          {/* Icono */}
          {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600">
              {icon}
            </div>
          )}

          {/* Texto mostrado */}
          <span className={cn(
            "block truncate",
            !selectedOption && "text-gray-500 font-medium font-in-nunito"
          )}>
            {selectedOption ? selectedOption.name : placeholder}
          </span>

          {/* Flecha personalizada */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <ChevronDownIcon 
              className={cn(
                "h-5 w-5 text-gray-400 transition-transform duration-200",
                isOpen && "rotate-180"
              )}
            />
          </div>
        </div>
      </div>
    </div>
  )
} 