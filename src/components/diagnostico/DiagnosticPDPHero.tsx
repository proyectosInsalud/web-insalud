import { DurationChip } from "./DurationChip";
import { InfoPanel } from "./InfoPanel";
import { MediaGallery } from "./MediaGallery"
import { StepsAccordion } from "./StepsAccordion";

type DiagnosticPDPHeroProps = {
  images: Array<{
    src: string;
    alt: string;
  }>;
  title: string;
  pasos: string[];
  duracion: string;
};

export const DiagnosticPDPHero = ({ images, title, pasos, duracion }: DiagnosticPDPHeroProps) => {
  return (
    <section className="max-w-7xl container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-4">
            <div className="col-span-4">
                <MediaGallery images={images} />
            </div>
            <div className="col-span-8 space-y-2">
                <InfoPanel title={title} />
                <div className="grid grid-cols-1 lg:grid-cols-8 gap-6">
                    <div className="col-span-5">
                        <StepsAccordion pasos={pasos} />
                        <DurationChip duracion={duracion} />
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}   
