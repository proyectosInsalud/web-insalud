"use client";
import { eventRegisterGtm } from "@/lib/utils";
import { useModalStore } from "../../store/modalStore";
import { cdn } from "@/utils/cdn";
import { STATS_LABEL } from "@/data/stats";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";

export const Footer = () => {
  const openReservationModal = useModalStore(
    (state) => state.openReservationModal
  );

  const handleOpenReservationModal = () => {
    eventRegisterGtm("booking_start", { cta_source: "footer" });
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
            <p className="font-in-nunito font-bold md:font-medium text-in-blue-dark md:text-in-gray-base">
              Nuestras Sedes
            </p>
            <div className="flex flex-col gap-3 text-in-gray md:font-medium font-in-poppins [&_a]:hover:text-in-cyan [&_a]:transition-colors">
              {/* Sedes de Lima: no tienen dominio propio (a diferencia de Guayaquil/
                  Panamá/Costa Rica), así que van a la sección de sedes de insalud.pe. */}
              <Link href="/#sedes">El Golf</Link>
              <Link href="/#sedes">Sur</Link>
              <Link href="/#sedes">Jesus Maria</Link>
              <Link target="_blank" href="https://insalud.ec">
                Guayaquil
              </Link>
              <Link target="_blank" href="https://insalud.pa">
                Panamá
              </Link>
              <Link target="_blank" href="https://insalud.cr">
                Costa Rica
              </Link>
            </div>
          </article>
          <article className="space-y-2 sm:col-span-2 md:col-span-1 xl:col-span-2">
            <p className="font-in-nunito font-bold md:font-medium text-in-blue-dark md:text-in-gray-base">
              Pacientes
            </p>
            <div className="flex flex-col gap-3 text-in-gray md:font-medium font-in-poppins [&_a]:hover:text-in-cyan [&_a]:transition-colors">
              <Link href="#">Términos y Condiciones</Link>
              <Link target="_blank" href="/docs/politica-de-privacidad.pdf">Política de privacidad CRM</Link>
              <Link href="/libro-de-reclamaciones">Libro de reclamaciones</Link>
            </div>
          </article>
          <article className="space-y-2 sm:col-span-2 md:col-span-1 xl:col-span-2">
            <p className="font-in-nunito font-bold md:font-medium text-in-blue-dark md:text-in-gray-base">
              Sobre INSALUD
            </p>
            <div className="flex flex-col gap-3 text-in-gray md:font-medium font-in-poppins [&_a]:hover:text-in-cyan [&_a]:transition-colors">
              <Link href="#nosotros">Nosotros</Link>
              <Link href="/blog">Blog</Link>
              <Link href="#">Trabaja con nosotros</Link>
            </div>
          </article>
          <article className="space-y-2 sm:col-span-2 md:col-span-1 xl:col-span-3">
            <p className="font-in-nunito font-bold md:font-medium text-in-blue-dark md:text-in-gray-base">
              Enfermedades
            </p>
            <div className="flex flex-col gap-3 text-in-gray md:font-medium font-in-poppins [&_a]:hover:text-in-cyan [&_a]:transition-colors">
              <Link href="/enfermedades">Prostatitis Crónica</Link>
              <Link href="/enfermedades">Eyaculación Precoz</Link>
              <Link href="/enfermedades">Micosis Genital</Link>
              <Link href="/enfermedades">Enfermedad de Transmisión Sexual</Link>
              <Link href="/enfermedades">Disfunción Eréctil</Link>
              <Link href="/enfermedades">Herpes Genital</Link>
              <Link href="/enfermedades">Infertilidad</Link>
              <Link href="/enfermedades">Chequeo Prostático</Link>
            </div>
          </article>
          <article className="space-y-2 sm:col-span-3 md:col-span-2 xl:col-span-3">
            <button
              onClick={handleOpenReservationModal}
              className="group w-full max-w-[320px] h-full min-h-[180px] rounded-2xl bg-gradient-to-br from-in-cyan to-in-blue p-6 flex flex-col justify-between text-left shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="space-y-1">
                <p className="text-white font-in-nunito font-semibold text-lg leading-tight">
                  Empezar un tratamiento
                </p>
                <p className="text-white/80 font-in-poppins text-sm">
                  Agenda tu cita con un especialista
                </p>
              </div>
              <span className="self-end flex items-center justify-center w-10 h-10 rounded-full bg-white/15 text-white group-hover:bg-white group-hover:text-in-blue transition-colors duration-300">
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </span>
            </button>
          </article>
        </div>
        <div className="flex order-2 md:order-3 flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0 mb-16">
          <nav className="flex gap-4">
            <Link
              href="https://www.facebook.com/insalud.medicinaespecializada?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Síguenos en Facebook"
              className="hover:text-in-cyan transition-colors"
            >
              <FaFacebook size={24} />
            </Link>
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
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <a
              href="tel:017431363"
              className="text-lg font-in-poppins hover:text-in-cyan transition-colors"
            >
              01 7431363
            </a>
            <p className="text-lg font-in-poppins">
              {STATS_LABEL.especialistas} especialistas disponibles en Lima, Perú y Latam.
            </p>
          </div>
        </div>
        <div className="flex order-4 flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0 font-in-poppins">
          <p className="text-in-gray-base text-sm">© {new Date().getFullYear()} INSALUD CORP</p>
          <div className="flex flex-col md:flex-row gap-4 text-sm text-in-gray-base [&_a]:hover:text-in-cyan [&_a]:transition-colors">
            <Link href="/">Terminos y condiciones</Link>
            <Link href="/">Politica y privacidad</Link>
            <Link href="/">Cookie settings</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
