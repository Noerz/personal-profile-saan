import { apiClient } from "@/shared/api/client";
import type { LoginPayload, RegisterPayload, AuthResponse } from "../types";

/**
 * Auth API functions — replace BASE_URL in shared/api/client.ts
 * with your real API endpoint via NEXT_PUBLIC_API_URL env var.
 */

export const authApi = {
  login: (payload: LoginPayload) =>
    apiClient<AuthResponse>("/auth/login", { method: "POST", body: payload }),

  register: (payload: RegisterPayload) =>
    apiClient<AuthResponse>("/auth/register", { method: "POST", body: payload }),

  logout: (token: string) =>
    apiClient<void>("/auth/logout", { method: "POST", token }),

  getMe: (token: string) =>
    apiClient<AuthResponse["user"]>("/auth/me", { token }),
};
