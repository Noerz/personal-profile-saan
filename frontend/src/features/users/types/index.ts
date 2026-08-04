import type { User, LoadingState, PaginatedResponse } from "@/shared/types";

export interface UsersFilter {
  search?: string;
  role?: string;
  page?: number;
  limit?: number;
}

export interface UsersState {
  users: User[];
  total: number;
  page: number;
  totalPages: number;
  loadingState: LoadingState;
  error: string | null;
  selectedUser: User | null;
}
