import Image from "next/image";
import { NavBar } from "../common/NavBar";

type HeaderItemProps = {
  title1: string;
  title2: string;
  paragraph: string;
  paragraph2?: string;
  image: string;
};

export const HeaderBannerPage = ({ title1,title2,paragraph,paragraph2,image }: HeaderItemProps) => {
  return (
    <>
      <div className="relative">
        <Image
          src={image}
          alt="banner de diagnósticos"
          width={900}
          height={300}
          className="w-full h-full absolute -z-10 object-cover"
          priority
        />
        <NavBar />
        <div className="text-center pt-6 md:py-20 pb-9  space-y-4 text-white px-4">
            <h1 className="font-in-nunito text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">{title1} <span className="block md:inline">{title2}</span></h1>
            <p className="font-in-poppins text-[13px] md:text-base">{paragraph} <span className="block md:inline">{paragraph2}</span> </p>
        </div>
      </div>
    </>
  );
};
