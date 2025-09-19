import { create } from "zustand";

interface ReservationData {
    problemaSalud: string;
    sede: string;
    fecha: Date | null;
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
    setFecha: (fecha: Date | null) => void;
    resetReservationData: () => void;
}

const initialReservationData: ReservationData = {
    problemaSalud: '',
    sede: '',
    fecha: new Date(),  
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
    setFecha: (fecha) =>
    set((s) => ({ reservationData: { ...s.reservationData, fecha } })),
    resetReservationData: () => set({ reservationData: initialReservationData }),
}))





