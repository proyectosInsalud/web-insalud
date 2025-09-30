import { TypeDiagnostico } from "@/types";
import { BeneficiosDesk } from "./BeneficiosDesk";
import { BeneficiosMobile } from "./BeneficiosMobile";


type SeccionBeneficiosProps = {
  tratamiento: TypeDiagnostico;
};

export const SeccionBeneficios = ({ tratamiento }: SeccionBeneficiosProps) => {
  return (
    <section className="pt-16 md:pt-24 max-w-5xl mx-auto">
        <BeneficiosDesk tratamiento={tratamiento} />
        <BeneficiosMobile tratamiento={tratamiento} />
    </section>
  );
};
