import { create } from "zustand";

interface FilterState {
  name: string;
}

interface FilterActions {
  setName: (name: string) => void;
}

type FilterStore = FilterState & FilterActions;

export const useFilterStore = create<FilterStore>()((set) => {
  const initialState: FilterState = {
    name: "",
  };

  return {
    ...initialState,
    setName: (name: string) => {
      set({ name });
    },
  };
});