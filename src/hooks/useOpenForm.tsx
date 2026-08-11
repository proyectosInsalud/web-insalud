import { eventRegisterGtm } from "@/lib/utils";
import { useModalStore } from "../store/modalStore";

export const useOpenForm = () => {
    const openReservationModal = useModalStore(
        (state) => state.openReservationModal
        
    );

    const handleTrackReservation = () => {
        openReservationModal()
        eventRegisterGtm("booking_start", { cta_source: "form_prereserva" });
    }

    return {
        handleTrackReservation
    }
}

