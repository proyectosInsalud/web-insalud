// import Image from "next/image"
import Link from "next/link";
import { Button } from "../ui/button"

type ItemServiceInfoProps = {
  name:string
  description: string;
}

export const ItemServiceInfo = ({ name, description }: ItemServiceInfoProps) => {
  const whatsappMessage = `Hola, vi su web de Insalud y estoy interesado por el servicio de ${name}`;
  const encodedMessage = encodeURIComponent(whatsappMessage);
  
  return (
    <div className="space-y-2">
            <p className="text-sm md:text-base">
              {description}
            </p>
            <Link target="_blank" href={`https://wa.me/51957016010?text=${encodedMessage}`}>
              <Button
                className="w-full bg-in-cyan text-sm font-in-nunito rounded-full hover:bg-in-cyan/80 cursor-pointer"
                size={"personal"}
              >
                Solicitar Cita
              </Button>
            </Link>
        </div>
  )
}
