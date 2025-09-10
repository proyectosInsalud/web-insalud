import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { ItemServiceInfo } from "./ItemServiceInfo";

type CardServiceProps = { 
  name: string;
  slug?: string;
  image: string;
  description: string;
}

export const CardService = ({ name, image, description,slug }: CardServiceProps) => {
  return (
    <div>
      <div className="hidden md:block">
        <HoverCard openDelay={0} closeDelay={0}>
          <HoverCardTrigger asChild>
            <article className="w-full rounded-xl border data-[state=open]:border-b-0 data-[state=open]:rounded-b-none p-2 cursor-pointer">
              <Image
                src={image}
                alt={name}
                width={200}
                height={100}
                className="w-full rounded-lg"
              />
              <h3 className="font-in-nunito text-center text-lg pt-2 text-in-cyan">
                {name}
              </h3>

              <div className="block md:hidden">
                <ItemServiceInfo 
                  name={name}
                  description={description}
                  slug={slug} />
              </div>
            </article>
          </HoverCardTrigger>

          <HoverCardContent
            side="bottom"
            avoidCollisions={false}
            align="center"
            className="w-[var(--radix-hover-card-trigger-width)] border-t-0 rounded-b-2xl rounded-t-none font-in-nunito text-in-blue-title"
            sideOffset={-12}
          >
            <ItemServiceInfo 
            name={name}
            description={description}
            slug={slug} />
          </HoverCardContent>
        </HoverCard>
      </div>
      <div className="block md:hidden">
        <article className="w-full rounded-xl border data-[state=open]:border-b-0 data-[state=open]:rounded-b-none p-4 cursor-pointer">
          <Image
            src={image}
            alt={name}
            width={200}
            height={100}
            className="w-full rounded-lg"
          />
          <h3 className="font-in-nunito font-bold text-2xl pt-4 mb-3 text-in-cyan">
            {name}
          </h3>
          <div className="block md:hidden">
            <ItemServiceInfo 
              slug={slug}
              name={name}
              description={description} 
              />
          </div>
        </article>
      </div>
    </div>
  );
};
