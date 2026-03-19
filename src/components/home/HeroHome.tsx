import { CintilloBarra } from "./CintilloBarra";
import { NavBar } from "../common/NavBar";
import { HeroContent } from "./HeroContent";

export const HeroHome = () => {
  return (
    <section 
        className="bg-cover bg-center bg-no-repeat md:h-[100vh] relative" >
          <video 
            src={"/video/video-banner.mp4"} 
            autoPlay 
            muted 
            loop 
            playsInline
            preload="metadata"
            poster="/images/banner-servicios.png"
            className="hidden md:block absolute top-0 left-0 w-full h-full object-cover -z-10"
            aria-label="Video banner de escritorio mostrando tratamientos médicos de InSalud"
          />
          <video 
            src={"/video/video-banner-mobile.mp4"} 
            autoPlay 
            muted 
            loop 
            playsInline
            preload="metadata"
            poster="/images/banner-enfermedades.png"
            className="block md:hidden absolute top-0 left-0 w-full h-full object-cover -z-10"
            aria-label="Video banner para móviles mostrando tratamientos médicos de InSalud"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 -z-5"></div>
        <CintilloBarra />
        <NavBar />
        <HeroContent />

    </section>
  ) 
}
