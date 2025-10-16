"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
gsap.registerPlugin(useGSAP,ScrollTrigger);

const slides = [
    {
        src: "/images/nosotros/carrusel-header/slide-1.png",
        alt: "Recepcion insalud",
    },
    {
        src: "/images/nosotros/carrusel-header/slide-2.png",
        alt: "Equipo Insalud",
    },
    {
        src: "/images/nosotros/carrusel-header/slide-1.png",
        alt: "Recepcion insalud",
    },
    {
        src: "/images/nosotros/carrusel-header/slide-2.png",
        alt: "Equipo Insalud",
    },
    {
        src: "/images/nosotros/carrusel-header/slide-1.png",
        alt: "Recepcion insalud",
    },
    {
        src: "/images/nosotros/carrusel-header/slide-2.png",
        alt: "Equipo Insalud",
    },
    {
        src: "/images/nosotros/carrusel-header/slide-1.png",
        alt: "Recepcion insalud",
    },
    {
        src: "/images/nosotros/carrusel-header/slide-2.png",
        alt: "Equipo Insalud",
    },
]


export const CarouselSedes = () => {

  useGSAP(() => {

    const totalScroll = slides.length * 120;

    gsap.to(".slides", {
      x: -totalScroll,
      duration: 10000,
      ease: "none",
      scrollTrigger: {
        trigger: ".cards-container",
        start: "top top",
        end: `+=${totalScroll}`,
        pin: true,
        scrub: true,
      },
    });




  });

  return (
    <div className="relative cards-container py-16 lg:h-screen my-auto flex items-start lg:items-center">
      <section className="relative overflow-hidden">
        <div className="flex slides items-center flex-nowrap gap-4 w-max">
          {
            slides.map((slide, index) => (
              <div key={index} className="w-[320px] lg:w-[480px] first:ml-4 last:mr-4 flex-shrink-0 slide">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={320}
                  height={320}
                  priority
                  className="block w-full h-full object-cover"
                />
              </div>
            ))
          }
        </div>
      </section>
    </div>
  )
}
