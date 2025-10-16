import { HeaderNosotros } from "@/components/nosotros/HeaderNosotros";
import { CarouselSedes } from "@/components/nosotros/CarouselSedes";
import { SexualHealthFeatures } from "@/components/nosotros/SexualHealthFeatures";
import { OurTeam } from "@/components/nosotros/OurTeam";
import { ReservationModal } from "@/components/common/ReservationModal";
import { CoreValuesSection } from "@/components/nosotros/CoreValuesSection";
import { CompanyTimeline } from "@/components/nosotros/CompanyTimeline";

export default function Nosotros() {
    return (
        <div>
            <HeaderNosotros />
            <div className="gradient-us">
                <CarouselSedes />
                <CompanyTimeline />
            </div>
            <CoreValuesSection />
            <OurTeam />
            <SexualHealthFeatures />
            <ReservationModal />
        </div>
    )
}