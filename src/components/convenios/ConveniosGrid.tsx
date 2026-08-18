import { CONVENIOS } from "@/data/convenios";
import { ConvenioCard } from "./ConvenioCard";

export const ConveniosGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {CONVENIOS.map((convenio) => (
          <ConvenioCard key={convenio.name} {...convenio} />
        ))}
      </div>
    </section>
  );
};
