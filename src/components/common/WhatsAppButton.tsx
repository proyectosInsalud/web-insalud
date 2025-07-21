'use client'

import { FaWhatsapp } from 'react-icons/fa'

interface WhatsAppButtonProps {
    phoneNumber: string;
    message?: string;
}

export const WhatsAppButton = ({ 
    phoneNumber, 
    message = "¡Hola! vi su pagina web Insalud y me gustaría agendar una cita" 
}: WhatsAppButtonProps) => {
    // Eliminar cualquier caracter que no sea número
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    
    // Crear el enlace de WhatsApp
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center"
                aria-label="Contactar por WhatsApp"
            >
                {/* Círculo exterior (efecto de pulso) */}
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25"></div>
                
                {/* Círculo principal */}
                <div className="relative flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-lg transition-all duration-300 hover:scale-110">
                    <FaWhatsapp className="text-3xl" />
                </div>
            </a>
        </div>
    )
} 