import { cdn } from "@/utils/cdn";
import { CintilloBarra } from "./CintilloBarra";
import { NavBar } from "./NavBar";
import { HeroContent } from "./HeroContent";

export const HeroHome = () => {
  return (
    <section 
        style={{
            backgroundImage: `url(${cdn("/web/home/header/hero-image-bg.png")})`,
        }}
        className="bg-cover bg-center bg-no-repeat md:h-[100vh]" >
        <CintilloBarra />
        <NavBar />
        <HeroContent />
    </section>
  ) 
}
