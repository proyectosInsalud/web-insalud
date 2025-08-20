import { FormContactSection } from "@/components/contacto/FormContactSection";
import { HeroContacto } from "@/components/contacto/HeroContacto";
import { CintilloBarra } from "@/components/home/CintilloBarra";

export default function page() {
  return (
    <>
      <CintilloBarra/>
      <HeroContacto />
      <FormContactSection />
    </>
  )
}
