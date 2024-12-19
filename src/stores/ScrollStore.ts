import { create } from "zustand";
import { ScrollState } from "./ScrollStore.interface";

export const ScrollStore = create<ScrollState>()((set) => ({
  scrollY: 0,
  setScrollY: (y) => set(() => ({ scrollY: y })),
}));
