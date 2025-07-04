import { HeroHome } from "@/components/pages/home/HeroHome";
import { FeaturedSpecialties } from "@/components/pages/home/FeaturedSpecialties";
import { WhyChooseInSalud } from "@/components/pages/home/WhyChooseInSalud";
import { ReserveDate } from "@/components/pages/home/ReserveDate";

export default function Home() {
  return (
    <>
      <header className="mb-12">
        <HeroHome />
      </header>

      <main className="space-y-12 md:space-y-32">
        <ReserveDate/>
        <FeaturedSpecialties/>
        <WhyChooseInSalud />
      </main>
    </>
  );
}
