import { create } from "zustand";

interface State {
  member: {
    name: string;
    email: string;
    position: string;
  };
  isError: string;
}

interface Action {
  setMember: (name: State["member"]) => void;
  setError: (error: State["isError"]) => void;
}

const useFormStore = create<State & Action>((set) => ({
  member: {
    name: "",
    email: "",
    position: "Some position",
  },
  isError: "",
  setMember: (member) => set(() => ({ member: member })),
  setError: (error) => set(() => ({ isError: error })),
}));

export default useFormStore;
