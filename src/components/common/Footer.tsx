"use client";
import { eventRegisterGtm } from "@/lib/utils";
import { useModalStore } from "@/schema/store/modalStore";
import { cdn } from "@/utils/cdn";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";

export const Footer = () => {
  const openReservationModal = useModalStore(
    (state) => state.openReservationModal
  );

  const handleOpenReservationModal = () => {
    eventRegisterGtm("booking_start");
    openReservationModal();
  };

  return (
    <div
      id="contacto"
      className="max-w-7xl mx-auto px-4 pt-16 md:pt-24 container"
    >
      <footer className="py-12 flex flex-col">
        <div className="flex order-1 flex-col sm:flex-row justify-between sm:items-center mb-8 md:mb-12">
          <div>
            <Image
              src={cdn("/shared/logos/u-logo-insalud.svg")}
              alt="logo insalud"
              width={160}
              height={160}
              className="mb-12"
            />
          </div>
        </div>
        <div className="grid order-3 md:order-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-12 xl:gap-x-6 gap-y-12 gap-x-4 mb-16">
          <article className="space-y-2 sm:col-span-2 md:col-span-1 xl:col-span-2">
            <p className="font-in-nunito font-bold md:font-medium text-in-blue-dark md:text-in-gray-light">
              Nuestras Sedes
            </p>
            <div className="flex flex-col gap-3 text-in-gray md:font-medium font-in-poppins">
              <Link href="#">El Golf</Link>
              <Link href="#">Sur</Link>
              <Link href="#">Jesus Maria</Link>
              <Link target="_blank" href="https://insalud.ec">
                Guayaquil
              </Link>
              <Link target="_blank" href="https://insalud.pa">
                Panamá
              </Link>
            </div>
          </article>
          <article className="space-y-2 sm:col-span-2 md:col-span-1 xl:col-span-2">
            <p className="font-in-nunito font-bold md:font-medium text-in-blue-dark md:text-in-gray-light">
              Pacientes
            </p>
            <div className="flex flex-col gap-3 text-in-gray md:font-medium font-in-poppins">
              <Link href="#">¿Cómo me atiendo?</Link>
              <Link href="#">Deberes y Derechos del paciente</Link>
              <Link href="#">Términos y Condiciones</Link>
            </div>
          </article>
          <article className="space-y-2 sm:col-span-2 md:col-span-1 xl:col-span-2">
            <p className="font-in-nunito font-bold md:font-medium text-in-blue-dark md:text-in-gray-light">
              Sobre INSALUD
            </p>
            <div className="flex flex-col gap-3 text-in-gray md:font-medium font-in-poppins">
              <Link href="#nosostros">Nosotros</Link>
              <Link href="#blog">Blog</Link>
              <Link href="#">Trabaja con nosotros</Link>
            </div>
          </article>
          <article className="space-y-2 sm:col-span-2 md:col-span-1 xl:col-span-3">
            <p className="font-in-nunito font-bold md:font-medium text-in-blue-dark md:text-in-gray-light">
              Diagnósticos
            </p>
            <div className="flex flex-col gap-3 text-in-gray md:font-medium font-in-poppins">
              <Link href="/diagnosticos">Prostatitis Crónica</Link>
              <Link href="/diagnosticos">Eyaculación Precoz</Link>
              <Link href="/diagnosticos">Micosis Genital</Link>
              <Link href="/diagnosticos">Enfermedad de Transmisión Sexual</Link>
              <Link href="/diagnosticos">Disfunción Eréctil</Link>
              <Link href="/diagnosticos">Herpes Genital</Link>
              <Link href="/diagnosticos">Infertilidad</Link>
              <Link href="/diagnosticos">Chequeo Prostático</Link>
            </div>
          </article>
          <article className="space-y-2 sm:col-span-3 md:col-span-2 xl:col-span-3">
            <div className="space-y-4">
              <div
                onClick={handleOpenReservationModal}
                className="bg-in-blue pt-16 pb-4 px-6 rounded-2xl h-full flex items-end col-span-1 relative cursor-pointer max-w-[320px]"
              >
                <p className="text-white font-medium">Empezar un tratamiento</p>
                <Image
                  src={cdn("/shared/otros/u-icon-circle.svg")}
                  alt="arrow right"
                  width={32}
                  height={32}
                  className="absolute right-4 top-4"
                />
              </div>
            </div>
          </article>
        </div>
        <div className="flex order-2 md:order-3 flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0 mb-16">
          <nav className="flex gap-4">
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
          <p className="text-lg font-in-poppins">
            +50 especialistas disponibles en Lima, Perú y Latam.
          </p>
        </div>
        <div className="flex order-4 flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0 font-in-poppins">
          <p className="text-in-gray-light text-sm">© 2025 IN-SALUD CORP</p>
          <div className="flex flex-col md:flex-row gap-4 text-sm text-in-gray-light">
            <Link href="/">Terminos y condiciones</Link>
            <Link href="/">Politica y privacidad</Link>
            <Link href="/">Cookie settings</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
