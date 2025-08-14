import { HeaderDiagnosticos } from "@/components/diagnosticos/HeaderDiagnosticos";
import { CintilloBarra } from "@/components/home/CintilloBarra";
import { ListServices } from "@/components/servicios/ListServices";

export const metadata = {
  title: "Servicios",
  description: "Página de servicios de Insalud",
};

export default function page() {
  return (
    <>
      <CintilloBarra />
      <HeaderDiagnosticos />
      <ListServices />
    </>
  );
}
