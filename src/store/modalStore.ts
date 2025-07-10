import { create } from "zustand";

interface ModalStore {
    isReservationModalOpen: boolean;
    openReservationModal: () => void;
    closeReservationModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
    isReservationModalOpen: false,
    openReservationModal: () => set({ isReservationModalOpen: true }),
    closeReservationModal: () => set({ isReservationModalOpen: false }),
}))





