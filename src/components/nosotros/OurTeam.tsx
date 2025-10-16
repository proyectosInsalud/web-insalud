import Image from "next/image"

const teamMembers = [
    {
        name: "Dr. Juan Pérez",
        title: "Médico General",
        image: "/images/nosotros/our-team/doctor-ejemplo.png",
    },
    {
        name: "Dr. María López",
        title: "Nutricionista",
        image: "/images/nosotros/our-team/doctor-ejemplo.png",
    },
    {
        name: "Dr. Carlos Rodríguez",
        title: "Esteticista",
        image: "/images/nosotros/our-team/doctor-ejemplo.png",
    }
]

export const OurTeam = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 lg:py-24 space-y-12">
        <div className="text-center space-y-4">
            <h2 className="font-in-nunito text-2xl text-in-blue-title font-semibold md:text-3xl lg:text-4xl xl:text-5xl">Nuestro Equipo</h2>
            <p className="font-in-poppins max-w-[480px] mx-auto text-sm lg:text-base">Contamos con un equipo multidisciplinario de médicos, nutricionistas y especialistas en estética </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto gap-x-0 md:gap-x-8 gap-y-12 ">
            {teamMembers.map((member, index) => (
                <article className={` ${index >= 1 && index % 2 !== 0? "mt-0 md:mt-12": ""}`} key={index}>
                    <div className="flex items-center justify-center relative">
                        <Image src={member.image} alt={member.name} width={300} height={300} className={`max-w-[280px] w-full h-full object-cover rounded-3xl`}/>
                        <div className="p-4 absolute bottom-2 max-w-[250px] mx-auto left-1 right-0">
                            <h3 className="text-in-cyan text-xl font-semibold">{member.name}</h3>
                            <p className="text-white text-sm">{member.title}</p>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    </section>
  )
}
