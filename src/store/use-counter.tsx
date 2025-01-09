import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CounterStore {
  count: number;
  increaseCount: () => void;
  decreaseCount: () => void;
  resetCount: () => void;
}

export const useCounter = create(
  persist<CounterStore>(
    (set) => ({
      count: 0,
      increaseCount: () => set((state) => ({ count: state.count + 1 })),
      decreaseCount: () => set((state) => ({ count: state.count - 1 })),
      resetCount: () => set(() => ({ count: 0 })),
    }),
    {
        name: 'count-storage'
    }
  )
);
