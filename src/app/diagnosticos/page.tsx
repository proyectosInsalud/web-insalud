import { HeaderDiagnosticos } from "@/components/diagnosticos/HeaderDiagnosticos";
import { ListDiagnostico } from "@/components/diagnosticos/ListDiagnostico";

export default function page() {
  return (
    <>
      <HeaderDiagnosticos />
      <ListDiagnostico />
    </>
  );
}