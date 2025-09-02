'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { TypeDiagnostico } from "@/types";
import { BenefitItem } from "./BenefitItem";
import Autoplay from "embla-carousel-autoplay";


type BeneficiosMobileProps = {
  tratamiento: TypeDiagnostico;
};

export const BeneficiosMobile = ({ tratamiento }: BeneficiosMobileProps) => {
  return (
    <div className="md:hidden space-y-6">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl max-w-[480px] md:py-16  font-medium font-in-nunito mx-auto text-in-blue-title">
        {tratamiento.beneficiosDetalle.title}{" "}
        <span className="text-in-cyan">
          {tratamiento.beneficiosDetalle.titleHighlight}
        </span>
      </h2>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[Autoplay()]}
      >
        <CarouselContent>
          <CarouselItem className="basis-[85%] sm:basis-[60%]">
            <BenefitItem beneficio={tratamiento.benefitsGrid[0]} />
          </CarouselItem>
          <CarouselItem className="basis-[85%] sm:basis-[60%]">
            <BenefitItem beneficio={tratamiento.benefitsGrid[1]} />
          </CarouselItem>
          <CarouselItem className="basis-[85%] sm:basis-[60%]">
            <BenefitItem beneficio={tratamiento.benefitsGrid[2]} />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};
