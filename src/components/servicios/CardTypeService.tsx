// CardTypeService.tsx
import Image from "next/image";

interface CardTypeServiceProps {
  title: string;
  description: string;
  iconImage: string;
  bgImage: string;
  gradient: string;
  colorIcon: string;
}

export const CardTypeService = ({
  title,
  description,
  iconImage,
  bgImage,
  gradient,
  colorIcon
}: CardTypeServiceProps) => {
  return (
    <div className="relative w-full lg:min-h-[240px] flex items-end h-full overflow-hidden rounded-xl">
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center" 
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      
      {/* Overlay gradient */}
      <div className={`absolute inset-0 ${gradient}`}></div>
      
      {/* Contenido */}
      <div className="relative z-10 p-6 md:w-2/3 flex flex-col h-full justify-center text-wrap">
        <div className="mb-4">
          <div 
            className="w-12 h-12 flex items-center justify-center rounded-full" 
            style={{ backgroundColor: colorIcon === "#FFFFFF" ? "rgba(255,255,255,0.2)" : "rgba(50,119,225,0.2)" }}
          >
            <Image src={iconImage} alt="" width={24} height={24} className="w-6 h-6" />
          </div>
        </div>
        
        <h2 className="text-lg text-left md:text-2xl lg:text-3xl font-semibold text-white mb-2 break-words hyphens-auto">
          {title}
        </h2>
        
        <p className="text-white text-left text-sm md:text-base opacity-90 break-words hyphens-auto whitespace-normal">
          {description}
        </p>
      </div>
    </div>
  );
};