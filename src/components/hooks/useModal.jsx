import { create } from "zustand";

export const useModalStore = create((set) => ({
  modal: false,
  onOpen: () => set({ modal: true }),
  setModal: (isNav) => set(() => ({ modal: isNav })),
  onClose: () => set({ modal: false }),
}));
