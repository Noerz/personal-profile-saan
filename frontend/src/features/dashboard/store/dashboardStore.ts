import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { apiClient } from "@/shared/api/client";
import { useAuthStore } from "@/features/auth/store/authStore";
import type { DashboardState, DashboardStats } from "../types";

interface DashboardActions {
  fetchStats: () => Promise<void>;
  reset: () => void;
}

const initialState: DashboardState = {
  stats: null,
  loadingState: "idle",
  error: null,
};

// Mock data for development (replace with real API call)
const MOCK_STATS: DashboardStats = {
  totalUsers: 1280,
  newUsersThisMonth: 47,
  activeUsers: 892,
  adminUsers: 5,
};

export const useDashboardStore = create<DashboardState & DashboardActions>()(
  devtools(
    (set) => ({
      ...initialState,

      fetchStats: async () => {
        set({ loadingState: "loading", error: null });
        try {
          const token = useAuthStore.getState().token;
          // TODO: replace with real endpoint
          // const res = await apiClient<DashboardStats>("/admin/stats", { token: token ?? "" });
          // set({ stats: res.data, loadingState: "success" });

          // Mock: simulate API delay
          await new Promise((r) => setTimeout(r, 600));
          set({ stats: MOCK_STATS, loadingState: "success" });
        } catch (err: unknown) {
          const message = err instanceof Error ? err.message : "Failed to fetch stats";
          set({ error: message, loadingState: "error" });
        }
      },

      reset: () => set(initialState),
    }),
    { name: "DashboardStore" }
  )
);
