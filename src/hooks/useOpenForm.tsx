import { eventRegisterGtm } from "@/lib/utils";
import { useModalStore } from "@/schema/store/modalStore";

export const useOpenForm = () => {
    const openReservationModal = useModalStore(
        (state) => state.openReservationModal
        
    );

    const handleTrackReservation = () => {
        openReservationModal()
        eventRegisterGtm("booking_start");
    }

    return {
        handleTrackReservation
    }
}

