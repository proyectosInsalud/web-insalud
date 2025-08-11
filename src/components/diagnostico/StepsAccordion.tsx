import {
Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

type StepsAccordionProps = {
  pasos: string[];
};

export const StepsAccordion = ({ pasos }: StepsAccordionProps) => {
  return (
    <div>
      <Accordion type="single" collapsible={true} defaultValue="item-1">
        <AccordionItem value="item-1">
        <AccordionTrigger className="font-in-nunito cursor-pointer text-lg hover:no-underline font-semibold pb-2">Pasos del diagnostico</AccordionTrigger>
          <AccordionContent>
            <ul className="list list-disc font-in-poppins space-y-2">
              {pasos.map((paso, index) => (
                <li className="text-xs md:text-sm list-item text-in-gray-base" key={index}>{paso}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
