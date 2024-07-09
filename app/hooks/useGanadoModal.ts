import { create } from "zustand";

interface GanadoModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useGanadoModal = create<GanadoModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useGanadoModal;