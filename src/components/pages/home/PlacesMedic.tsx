import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { sedesAccordion } from "@/data/sedesAccordion";

export const PlacesMedic = () => {
  return (
    <div className="container px-4 mx-auto max-w-7xl py-12">
      <section>
        <div className="space-y-4 mb-8">
          <h2 className="text-in-blue-dark text-center font-in-nunito font-bold text-3  xl md:text-5xl">
            Encuentra una {` `}
            <span className="text-in-cyan">sede cerca de ti.</span>
          </h2>
          <p className="text-in-blue-dark text-center font-in-poppins">
            Contamos con equipos modernos y atención especializada en cada sede.
          </p>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-4 font-in-poppins">
            <Accordion type="single" collapsible>
              {sedesAccordion.map((sede) => (
                <AccordionItem key={sede.id} value={sede.name}>
                  <AccordionTrigger className="hover:no-underline cursor-pointer py-6">
                    {sede.name}
                  </AccordionTrigger>
                  <AccordionContent>{sede.description}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </section>
    </div>
  );
};
