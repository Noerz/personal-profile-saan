import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { SettingsState, Theme, Language } from "../types";

interface SettingsActions {
  setTheme: (theme: Theme) => void;
  setLanguage: (language: Language) => void;
  toggleNotifications: () => void;
  reset: () => void;
}

const initialState: SettingsState = {
  theme: "dark",
  language: "id",
  notifications: true,
};

export const useSettingsStore = create<SettingsState & SettingsActions>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,

        setTheme: (theme) => set({ theme }),
        setLanguage: (language) => set({ language }),
        toggleNotifications: () =>
          set({ notifications: !get().notifications }),
        reset: () => set(initialState),
      }),
      { name: "settings-store" }
    ),
    { name: "SettingsStore" }
  )
);
