// import Image from "next/image"
import Link from "next/link";
import { Button } from "../ui/button";
import { eventRegisterGtm } from "@/lib/utils";

type ItemServiceInfoProps = {
  name: string;
  description: string;
  slug?: string;
};

export const ItemServiceInfo = ({
  name,
  description,
  slug,
}: ItemServiceInfoProps) => {
  const whatsappMessage = `Hola, vi su web de Insalud y estoy interesado por el servicio de ${name}`;
  const encodedMessage = encodeURIComponent(whatsappMessage);

  return (
    <div className="space-y-5">
      <p className="text-[13px] md:text-base">{description}</p>
      <div className="flex gap-2">
        <Link
          className="flex-1"
          onClick={() => eventRegisterGtm("whatsapp_click")}
          target="_blank"
          href={`https://wa.me/51957016010?text=${encodedMessage}`}
        >
          <Button
            className="w-full py-2.5 bg-in-cyan text-base font-in-nunito rounded-2xl hover:bg-in-cyan/80 cursor-pointer"
            size={"personal"}
          >
            Solicitar Cita
          </Button>
        </Link>

        {slug === "chequeo-prostatico" && (
          <Link className="flex-1" href={"/servicios/" + slug}>
            <Button
              className="w-full py-2.5 bg-in-cyan text-base font-in-nunito rounded-2xl hover:bg-in-cyan/80 cursor-pointer"
              size={"personal"}
            >
              Ver más
            </Button>
          </Link>
        )}
        
        {slug === "ondas-de-choque" && (
          <Link className="flex-1" href={"/servicios/" + slug}>
            <Button
              className="w-full py-2.5 bg-in-cyan text-base font-in-nunito rounded-2xl hover:bg-in-cyan/80 cursor-pointer"
              size={"personal"}
            >
              Ver más
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
