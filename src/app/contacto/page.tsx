import { FormContactSection } from "@/components/contacto/FormContactSection";
import { HeroServices } from "@/components/contacto/HeroServices";
import { CintilloBarra } from "@/components/home/CintilloBarra";

export default function page() {
  return (
    <>
      <CintilloBarra/>
      <HeroServices />
      <FormContactSection />
    </>
  )
}
