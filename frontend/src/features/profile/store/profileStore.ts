import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { apiClient } from "@/shared/api/client";
import { useAuthStore } from "@/features/auth/store/authStore";
import type { ProfileState, ProfileUpdatePayload } from "../types";

interface ProfileActions {
  fetchProfile: () => Promise<void>;
  updateProfile: (payload: ProfileUpdatePayload) => Promise<void>;
  reset: () => void;
}

const initialState: ProfileState = {
  profile: null,
  loadingState: "idle",
  error: null,
};

export const useProfileStore = create<ProfileState & ProfileActions>()(
  devtools(
    (set) => ({
      ...initialState,

      fetchProfile: async () => {
        set({ loadingState: "loading", error: null });
        try {
          const { token, user } = useAuthStore.getState();
          // TODO: replace with real API
          // const res = await apiClient<User>("/profile", { token: token ?? "" });
          // set({ profile: res.data, loadingState: "success" });

          await new Promise((r) => setTimeout(r, 400));
          set({ profile: user, loadingState: "success" });
        } catch (err: unknown) {
          const message = err instanceof Error ? err.message : "Failed to fetch profile";
          set({ error: message, loadingState: "error" });
        }
      },

      updateProfile: async (payload) => {
        set({ loadingState: "loading", error: null });
        try {
          const { token, user } = useAuthStore.getState();
          // TODO: replace with real API
          // const res = await apiClient<User>("/profile", { method: "PATCH", body: payload, token: token ?? "" });

          // Optimistic update with mock
          const updated = { ...user!, ...payload };
          set({ profile: updated, loadingState: "success" });
        } catch (err: unknown) {
          const message = err instanceof Error ? err.message : "Failed to update profile";
          set({ error: message, loadingState: "error" });
        }
      },

      reset: () => set(initialState),
    }),
    { name: "ProfileStore" }
  )
);
