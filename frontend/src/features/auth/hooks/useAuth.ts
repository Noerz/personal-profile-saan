"use client";

import { useAuthStore } from "../store/authStore";
import type { LoginPayload, RegisterPayload } from "../types";

/**
 * useAuth — convenience hook abstracting the auth store.
 *
 * @example
 * const { user, isAuthenticated, login, logout } = useAuth();
 */
export function useAuth() {
  const user = useAuthStore((s) => s.user);
  const role = useAuthStore((s) => s.role);
  const token = useAuthStore((s) => s.token);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const isLoading = useAuthStore((s) => s.isLoading);
  const error = useAuthStore((s) => s.error);
  const login = useAuthStore((s) => s.login);
  const register = useAuthStore((s) => s.register);
  const logout = useAuthStore((s) => s.logout);
  const clearError = useAuthStore((s) => s.clearError);
  const hydrate = useAuthStore((s) => s.hydrate);

  const isAdmin = role === "admin";
  const isUser = role === "user";

  return {
    user,
    role,
    token,
    isAuthenticated,
    isAdmin,
    isUser,
    isLoading,
    error,
    login: async (payload: LoginPayload) => login(payload),
    register: async (payload: RegisterPayload) => register(payload),
    logout,
    clearError,
    hydrate,
  };
}
