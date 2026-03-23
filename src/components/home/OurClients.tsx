import Image from "next/image";

const CLIENTS = [
    "/images/convenios/logo_convenio_1.png",
    "/images/convenios/logo_convenio_2.png",
    "/images/convenios/logo_convenio_3.png",
    "/images/convenios/logo_convenio_4.png",
    "/images/convenios/logo_convenio_5.png",
    "/images/convenios/logo_convenio_6.png",
];

export const OurClients = () => {
    return (
        <section className="w-full pt-16 md:pt-24 overflow-hidden">
            <div className="container mx-auto px-4 mb-10 text-center">
                <h2 className="font-in-nunito text-in-blue-dark text-3xl md:text-4xl font-bold pb-4 md:pb-0">
                    Nuestros <span className="text-in-cyan">Convenios</span>
                </h2>
                <p className="text-in-gray mt-4 max-w-2xl mx-auto text-[15px] md:text-base">
                    Trabajamos con las principales empresas para brindarte la mejor atención de salud.
                </p>
            </div>

            <div className="relative w-full overflow-hidden bg-gray-50/50 py-10 flex border-y border-gray-100">
                <div
                    className="flex w-max hover:[animation-play-state:paused]"
                    style={{ animation: 'marquee 30s linear infinite' }}
                >
                    {[...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS].map((src, idx) => (
                        <div key={idx} className="w-64 md:w-80 h-28 md:h-36 mx-4 md:mx-8 flex-shrink-0 flex items-center justify-center">
                            <Image
                                src={src}
                                alt={`Convenio ${idx + 1}`}
                                width={320}
                                height={160}
                                className="object-contain w-full h-full px-2 filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-105"
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
            `}} />
        </section>
    );
};
