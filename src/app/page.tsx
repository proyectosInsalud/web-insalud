import { HeroHome } from "@/components/pages/home/HeroHome";
import { FeaturedSpecialties } from "@/components/pages/home/FeaturedSpecialties";
import { WhyChooseInSalud } from "@/components/pages/home/WhyChooseInSalud";
import { ReserveDate } from "@/components/pages/home/ReserveDate";
import { CountClients } from "@/components/pages/home/CountClients";
import { Testimonials } from "@/components/pages/home/Testimonials";
import { MedicTeam } from "@/components/pages/home/MedicTeam";
import { PlacesMedic } from "@/components/pages/home/PlacesMedic";
import { AllAboutInsalud } from "@/components/pages/home/AllAboutInsalud";
import { ReservationModal } from "@/components/common/ReservationModal";

export default function Home() {
  return (
    <div className="relative">
      <header className="mb-12 relative">
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
  