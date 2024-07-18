import { create } from "zustand";

interface GanadoModalStore {
  isOpen: boolean;
  onOpen: () => void;
 
  onClose: (callback?: () => void) => void;
}

const useGanadoModal = create<GanadoModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: (callback) => set((state) => {
    if (callback) callback();
    return { isOpen: false };
  }),
}));

export default useGanadoModal;