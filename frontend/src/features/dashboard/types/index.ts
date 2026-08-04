import type { LoadingState } from "@/shared/types";

export interface DashboardStats {
  totalUsers: number;
  newUsersThisMonth: number;
  activeUsers: number;
  adminUsers: number;
}

export interface DashboardState {
  stats: DashboardStats | null;
  loadingState: LoadingState;
  error: string | null;
}
