export const useReedirectWsp = (number:string = "51957016010", message:string = "¡Hola! vi su pagina web Insalud y me gustaría agendar una cita") => {
    const link = `https://wa.me/${number}?text=${encodeURIComponent(message)}`

    const redirect = () => {
        if (typeof window !== "undefined") {
          window.open(link, "_blank"); // abre en nueva pestaña
        }
      };

    return {
        link,
        redirect
    }
}