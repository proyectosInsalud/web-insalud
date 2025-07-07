import { HeroHome } from "@/components/pages/home/HeroHome";
import { FeaturedSpecialties } from "@/components/pages/home/FeaturedSpecialties";
import { WhyChooseInSalud } from "@/components/pages/home/WhyChooseInSalud";
import { ReserveDate } from "@/components/pages/home/ReserveDate";
import { CountClients } from "@/components/pages/home/CountClients";
import { Testimonials } from "@/components/pages/home/Testimonials";
import { MedicTeam } from "@/components/pages/home/MedicTeam";
import { PlacesMedic } from "@/components/pages/home/PlacesMedic";

export default function Home() {
  return (
    <>
      <header className="mb-12">
        <HeroHome />
      </header>

      <main className="space-y-12 md:space-y-32 overflow-hidden">
        <ReserveDate/>
        <FeaturedSpecialties/>
        <CountClients />
        <WhyChooseInSalud />
        <MedicTeam />
        <PlacesMedic />
        <Testimonials />
      </main>
    </>
  );
}
  