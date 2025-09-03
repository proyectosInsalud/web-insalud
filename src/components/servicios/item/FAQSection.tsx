import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TypeDiagnostico } from "@/types";
import Image from "next/image";

type FaqSectionProps = {
  faq: TypeDiagnostico["faq"];
};
export const FAQSection = ({ faq }: FaqSectionProps) => {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-16 md:pt-24 font-in-poppins">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-medium text-in-blue-title">
            Preguntas {` `}
            <span className="text-in-cyan">frecuentes</span>
          </h2>
          <Accordion type="single" collapsible>
            {faq.faqs.map((faq, index) => (
              <AccordionItem defaultValue={index === 0 ? "item-0" : undefined} key={index} value={`item-${index}`}>
                <AccordionTrigger className="hover:no-underline text-in-blue-title cursor-pointer">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-in-gray-base">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <Image
          src={faq.image}
          alt={faq.alt}
          width={500}
          height={500}
          className="hidden md:block w-full mx-auto self-start max-w-[400px]"
        />
      </div>
    </section>
  );
};
