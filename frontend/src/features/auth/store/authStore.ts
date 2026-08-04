import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { authApi } from "../api/authApi";
import type { AuthState, LoginPayload, RegisterPayload } from "../types";

// ──────────────────────────────────────────────────────────────
// Store Actions Interface
// ──────────────────────────────────────────────────────────────
interface AuthActions {
  login: (payload: LoginPayload) => Promise<void>;
  register: (payload: RegisterPayload) => Promise<void>;
  logout: () => Promise<void>;
  clearError: () => void;
  hydrate: () => Promise<void>;
}

// ──────────────────────────────────────────────────────────────
// Initial State
// ──────────────────────────────────────────────────────────────
const initialState: AuthState = {
  user: null,
  token: null,
  role: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

// ──────────────────────────────────────────────────────────────
// Zustand Store
// ──────────────────────────────────────────────────────────────
export const useAuthStore = create<AuthState & AuthActions>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,

        login: async (payload) => {
          set({ isLoading: true, error: null });
          try {
            const res = await authApi.login(payload);
            set({
              user: res.data.user,
              token: res.data.token,
              role: res.data.user.role,
              isAuthenticated: true,
              isLoading: false,
            });
          } catch (err: unknown) {
            const message =
              err instanceof Error ? err.message : "Login failed. Please try again.";
            set({ error: message, isLoading: false });
            throw err;
          }
        },

        register: async (payload) => {
          set({ isLoading: true, error: null });
          try {
            const res = await authApi.register(payload);
            set({
              user: res.data.user,
              token: res.data.token,
              role: res.data.user.role,
              isAuthenticated: true,
              isLoading: false,
            });
          } catch (err: unknown) {
            const message =
              err instanceof Error ? err.message : "Registration failed.";
            set({ error: message, isLoading: false });
            throw err;
          }
        },

        logout: async () => {
          const token = get().token;
          if (token) {
            await authApi.logout(token).catch(() => {});
          }
          set({ ...initialState });
        },

        hydrate: async () => {
          const token = get().token;
          if (!token) return;
          set({ isLoading: true });
          try {
            const res = await authApi.getMe(token);
            set({
              user: res.data,
              role: res.data.role,
              isAuthenticated: true,
              isLoading: false,
            });
          } catch {
            // Token expired or invalid — clear
            set({ ...initialState });
          }
        },

        clearError: () => set({ error: null }),
      }),
      {
        name: "auth-store",
        // Only persist token + user, not loading/error state
        partialize: (state) => ({
          user: state.user,
          token: state.token,
          role: state.role,
          isAuthenticated: state.isAuthenticated,
        }),
      }
    ),
    { name: "AuthStore" }
  )
);
