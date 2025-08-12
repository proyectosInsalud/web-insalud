'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDownIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface Option {
  id: string | number
  name: string
  value: string
}

interface StyledSelectProps {
  options: Option[]
  placeholder?: string
  icon?: string
  className?: string
  name?: string
  id?: string
  value?: string
  onChange?: (value: string) => void
  label?: string
  ariaLabel?: string
}

export const StyledSelect = ({
  options,
  placeholder = "Seleccionar...",
  icon,
  className,
  name,
  id,
  value: controlledValue,
  onChange,
  label,
  ariaLabel
}: StyledSelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState(controlledValue || '')
  const selectRef = useRef<HTMLSelectElement>(null)

  useEffect(() => {
    setValue(controlledValue || '')
  }, [controlledValue])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value
    setValue(newValue)
    onChange?.(newValue)
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
      {label && (
        <label 
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      
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
          aria-label={ariaLabel || label || placeholder}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          style={{
            fontSize: '16px', // Evita zoom en iOS
          }}
        >
          <option value="" className='text-in-gray-base' disabled hidden>{placeholder}</option>
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
          className?.includes("border-red-500") && "border-red-500 ring-1 ring-red-200",
          icon && "pl-12"
        )}>
          {/* Icono */}
          {icon && (
            <Image src={icon} alt="" width={20} height={20} className="absolute left-4 top-1/2 -translate-y-1/2" />
          )}

          {/* Texto mostrado */}
          <span className={cn(
            "block truncate",
            !selectedOption && "text-gray-500 text-sm font-medium font-in-nunito"
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