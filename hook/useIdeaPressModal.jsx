import { create } from "zustand";

const useIdeaPressModal = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useIdeaPressModal;
