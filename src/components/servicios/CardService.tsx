import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { ItemServiceInfo } from "./ItemServiceInfo";

export const CardService = () => {
  return (
    <div>
      <div className="hidden md:block">
        <HoverCard openDelay={0} closeDelay={0}>
          <HoverCardTrigger asChild>
            <article className="w-full rounded-xl border data-[state=open]:border-b-0 data-[state=open]:rounded-b-none p-2 cursor-pointer">
              <Image
                src="/prueba-imagen.png"
                alt="Description of image"
                width={200}
                height={100}
                className="w-full rounded-lg"
              />
              <h3 className="font-in-nunito text-center text-lg pt-2 text-in-cyan">
                Cauterización Láser
              </h3>
              <div className="block md:hidden">
                <ItemServiceInfo />
              </div>
            </article>
          </HoverCardTrigger>

          <HoverCardContent
            side="bottom"
            avoidCollisions={false}
            align="center"
            className="w-[var(--radix-hover-card-trigger-width)] border-t-0 rounded-b-2xl rounded-t-none font-in-nunito text-in-blue-title"
            sideOffset={0}
          >
            <ItemServiceInfo />
          </HoverCardContent>
        </HoverCard>
      </div>
      <div className="block md:hidden">
        <article className="w-full rounded-xl border data-[state=open]:border-b-0 data-[state=open]:rounded-b-none p-2 cursor-pointer">
          <Image
            src="/prueba-imagen.png"
            alt="Description of image"
            width={200}
            height={100}
            className="w-full rounded-lg"
          />
          <h3 className="font-in-nunito text-center text-lg pt-2 text-in-cyan">
            Cauterización Láser
          </h3>
          <div className="block md:hidden">
            <ItemServiceInfo />
          </div>
        </article>
      </div>
    </div>
  );
};
