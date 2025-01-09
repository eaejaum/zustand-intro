import { create } from "zustand";

interface CounterStore {
    count: number,
    increaseCount: () => void;
    decreaseCount: () => void;
    resetCount: () => void;
}

export const useCounter = create<CounterStore>((set) => ({
    count: 0,
    increaseCount: () => set((state) => ({ count: state.count + 1})),
    decreaseCount: () => set((state) => ({ count: state.count - 1 })),
    resetCount: () => set(() => ({ count: 0 })),
}))