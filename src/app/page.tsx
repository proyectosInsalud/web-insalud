import { HeroHome } from "@/components/home/HeroHome";
import { FeaturedSpecialties } from "@/components/home/FeaturedSpecialties";
import { WhyChooseInSalud } from "@/components/home/WhyChooseInSalud";
import { ReserveDate } from "@/components/home/ReserveDate";
import { CountClients } from "@/components/home/CountClients";
import { Testimonials } from "@/components/home/Testimonials";
import { MedicTeam } from "@/components/home/MedicTeam";
import { PlacesMedic } from "@/components/home/PlacesMedic";
import { AllAboutInsalud } from "@/components/home/AllAboutInsalud";
import { ReservationModal } from "@/components/common/ReservationModal";

export default function Home() {
  return (
    <div className="relative">
      <header className="mb-24 relative">
        <HeroHome />
      </header>

      <main className="space-y-12 md:space-y-32">
        <ReserveDate/>
        <FeaturedSpecialties/>
        <CountClients />
        <WhyChooseInSalud />
        <MedicTeam />
        <PlacesMedic />
        <AllAboutInsalud />
        <Testimonials />
      </main>

      {/* Modal de reserva */}
      <ReservationModal />
    </div>
  );
}
  