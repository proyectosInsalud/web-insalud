import { NavBar } from "@/components/common/NavBar";

export const HeroConvenios = () => {
  return (
    <header className="bg-gradient-to-b from-in-blue-title to-[#070910]">
      <NavBar className="!bg-transparent" />
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 text-center text-white space-y-4">
        <h1 className="font-in-nunito text-3xl md:text-5xl font-semibold">
          Nuestros Convenios
        </h1>
        <p className="font-in-poppins text-sm md:text-base max-w-2xl mx-auto text-white/80">
          Si perteneces a alguna de estas instituciones o empresas, accedes a
          tarifas preferenciales en tus consultas y tratamientos con InSalud.
        </p>
      </div>
    </header>
  );
};
