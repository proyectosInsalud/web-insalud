import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { FormSection } from "./FormSection";

export const FormContactSection = () => {
  return (
    <div className="pt-16 md:pt-24 container max-w-7xl mx-auto px-4 -mt-24 md:mt-0">
      <section className="bg-[#e6f9f8] rounded-[40px] grid grid-cols-1 md:grid-cols-5">
        <div className="bg-[#012436] h-full flex flex-col justify-between md:col-span-2 text-white p-10 rounded-[40px] font-in-poppins space-y-8">
          <h2 className="text-xl">
            Deja tus datos y recibe atención rápida, clara y personalizada.
          </h2>
          <div className="text-sm space-y-2">
            <p>967 798 974</p>
            <a className="block" href="mailto:informes@insalud.pe">
              informes@insalud.pe
            </a>
            <p>Centro Empresarial Golf &quot;Los Inkas&quot; Torre 2 y 3 Santiago de Surco</p>
          </div>
          <nav className="flex gap-4 ">
            <Link
              href="https://www.instagram.com/insalud.oficial/?hl=es-la"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Síguenos en Instagram"
              className="hover:text-in-cyan transition-colors"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href="https://x.com/AInsalud74017"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Síguenos en X (Twitter)"
              className="hover:text-in-cyan transition-colors"
            >
              <FaXTwitter size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/78627776/admin/page-posts/published/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Síguenos en LinkedIn"
              className="hover:text-in-cyan transition-colors"
            >
              <IoLogoLinkedin size={24} />
            </Link>
            <Link
              href="https://www.tiktok.com/@insalud_oficial"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Síguenos en TikTok"
              className="hover:text-in-cyan transition-colors"
            >
              <FaTiktok size={24} />
            </Link>
            <Link
              href="https://www.youtube.com/@InSalud-latam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Síguenos en YouTube"
              className="hover:text-in-cyan transition-colors"
            >
              <FaYoutube size={24} />
            </Link>
          </nav>
        </div>
        <div className="md:col-span-3 p-10 row-start-1 md:row-start-auto">
            <FormSection />
        </div>
      </section>
    </div>
  );
};
