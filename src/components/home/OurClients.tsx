import Image from "next/image";

const CLIENTS = [
    { src: "/images/convenios/logo_convenio_1.png", name: "Colegio de Abogados de Lima" },
    { src: "/images/convenios/logo_convenio_2.png", name: "Bonda" },
    { src: "/images/convenios/logo_convenio_3.png", name: "GOintegro by Edenred" },
    { src: "/images/convenios/logo_convenio_4.png", name: "Colegio Regional de Licenciados en Administración" },
    { src: "/images/convenios/logo_convenio_5.png", name: "IDAT" },
    { src: "/images/convenios/logo_convenio_6.png", name: "Zegel" },
];

export const OurClients = () => {
    return (
        <section className="w-full pt-16 md:pt-24 overflow-hidden">
            <div className="container mx-auto px-4 mb-10 text-center">
                <h2 className="font-in-nunito text-in-blue-dark text-3xl md:text-4xl font-bold pb-4 md:pb-0">
                    Nuestros <span className="text-in-cyan">Convenios</span>
                </h2>
                <p className="text-in-gray mt-4 max-w-2xl mx-auto text-[15px] md:text-base">
                    Si perteneces a alguna de estas instituciones o empresas, accedes a
                    tarifas preferenciales en tus consultas y tratamientos.
                </p>
            </div>

            <div className="relative w-full overflow-hidden bg-gray-50/50 py-10 flex border-y border-gray-100">
                <div className="marquee-track flex w-max hover:[animation-play-state:paused]">
                    {[...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, idx) => (
                        <div key={`${client.name}-${idx}`} className="w-56 md:w-80 h-28 md:h-36 mx-4 md:mx-8 flex-shrink-0 flex items-center justify-center">
                            <Image
                                src={client.src}
                                alt={`Convenio de InSalud con ${client.name}`}
                                width={320}
                                height={160}
                                /* El grayscale solo aplica desde md: en mobile no existe hover,
                                   así que los logos quedaban apagados de forma permanente. */
                                className="object-contain w-full h-full px-2 md:grayscale md:opacity-60 md:hover:grayscale-0 md:hover:opacity-100 transition-all duration-300 md:hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-25%); }
                }
                .marquee-track { animation: marquee 20s linear infinite; }
                @media (prefers-reduced-motion: reduce) {
                    .marquee-track { animation: none; }
                }
            `}} />
        </section>
    );
};
