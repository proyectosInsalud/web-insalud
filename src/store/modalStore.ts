import { create } from "zustand";

interface ReservationData {
    tipoAtencion: string;
    modalidad: string;
    problemaSalud: string;
    sede: string;
    turno: string;
}

interface ModalStore {
    isReservationModalOpen: boolean;
    reservationData: ReservationData;
    openReservationModal: () => void;
    closeReservationModal: () => void;
    setTipoAtencion: (tipo: string) => void;
    setModalidad: (modalidad: string) => void;
    setProblemaSalud: (problema: string) => void;
    setSede: (sede: string) => void;
    setTurno: (turno: string) => void;
    resetReservationData: () => void;
}

const initialReservationData: ReservationData = {
    tipoAtencion: '',
    modalidad: '',
    problemaSalud: '',
    sede: '',
    turno: ''
};

export const useModalStore = create<ModalStore>((set) => ({
    isReservationModalOpen: false,
    reservationData: initialReservationData,
    openReservationModal: () => set({ isReservationModalOpen: true }),
    closeReservationModal: () => set({ 
        isReservationModalOpen: false,
        reservationData: initialReservationData 
    }),
    setTipoAtencion: (tipo: string) => set((state) => ({ 
        reservationData: { ...state.reservationData, tipoAtencion: tipo }
    })),
    setModalidad: (modalidad: string) => set((state) => ({ 
        reservationData: { ...state.reservationData, modalidad: modalidad }
    })),
    setProblemaSalud: (problema: string) => set((state) => ({ 
        reservationData: { ...state.reservationData, problemaSalud: problema }
    })),
    setSede: (sede: string) => set((state) => ({ 
        reservationData: { ...state.reservationData, sede: sede }
    })),
    setTurno: (turno: string) => set((state) => ({ 
        reservationData: { ...state.reservationData, turno: turno }
    })),
    resetReservationData: () => set({ reservationData: initialReservationData }),
}))





