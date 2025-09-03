import { TypeDiagnostico } from "@/types";
import { BenefitItem } from "./BenefitItem";

type ContentBeneficiosDeskProps = {
  tratamiento: TypeDiagnostico;
};


export const BeneficiosDesk = ({ tratamiento }: ContentBeneficiosDeskProps) => {
  return (
    <div className="hidden md:block px-4">
      <div className="md:flex justify-center gap-12 xl:gap-0 xl:justify-between hidden">
        <article>
          <BenefitItem beneficio={tratamiento.benefitsGrid[0]} />
        </article>
        <article className="mt-12">
          <BenefitItem beneficio={tratamiento.benefitsGrid[1]} />
        </article>
      </div>
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl max-w-[480px] md:py-16  font-medium font-in-nunito mx-auto text-in-blue-title">
        {tratamiento.beneficiosDetalle.title}{" "}
        <span className="text-in-cyan">
          {tratamiento.beneficiosDetalle.titleHighlight}
        </span>
      </h2>
      <div className="md:flex justify-center gap-12 xl:gap-0 xl:justify-between hidden">
        <article>
          <BenefitItem beneficio={tratamiento.benefitsGrid[2]} />
        </article>
        <article className="-mt-6">
          <BenefitItem beneficio={tratamiento.benefitsGrid[3]} />
        </article>
      </div>
    </div>
  );
};
