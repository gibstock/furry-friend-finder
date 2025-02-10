import { create } from "zustand";
import { persist } from "zustand/middleware";

// loading state
type LoadingStateStore = {
  loading: boolean,
  setLoading: (value: boolean) => void,
}

export const LoadingStateStore = create<LoadingStateStore>()(
  (set) => ({
    loading: true,
    setLoading: (v) => set(() => ({ loading: v}))
  })
)