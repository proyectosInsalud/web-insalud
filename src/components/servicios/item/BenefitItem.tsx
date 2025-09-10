import Image from "next/image";

type BenefitItemProps = {
  beneficio: {
    title: string;
    description: string;
    image: {
      src: string;
      alt: string;
    };
  };
};

export const BenefitItem = ({ beneficio }: BenefitItemProps) => {
  return (
    <div className="border shadow-[0_0_6px_0_rgba(182,208,238,0.35)] bg-white/70 flex gap-4 p-4 items-center rounded-xl lg:max-w-[380px]">
      <Image
        src={beneficio.image.src}
        alt={beneficio.image.alt}
        width={88}
        height={88}
        quality={95}
        className="w-[58px] h-[58px] md:w-[88px] md:h-[88px]"
      />
      <div>
        <h3 className="font-semibold text-in-cyan text-base md:text-lg lg:text-xl font-in-poppins">{beneficio.title}</h3>
        <p className="font-medium text-in-blue-dark font-in-poppins text-xs md:text-sm line-clamp-2">{beneficio.description}</p>
      </div>
    </div>
  )
}
