import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { apiClient } from "@/shared/api/client";
import { useAuthStore } from "@/features/auth/store/authStore";
import type { User } from "@/shared/types";
import type { UsersState, UsersFilter } from "../types";

interface UsersActions {
  fetchUsers: (filter?: UsersFilter) => Promise<void>;
  deleteUser: (userId: string) => Promise<void>;
  selectUser: (user: User | null) => void;
  reset: () => void;
}

const MOCK_USERS: User[] = [
  { id: "1", name: "Alice Admin", email: "alice@example.com", role: "admin", createdAt: "2024-01-10T00:00:00Z", updatedAt: "2024-01-10T00:00:00Z" },
  { id: "2", name: "Bob User", email: "bob@example.com", role: "user", createdAt: "2024-02-15T00:00:00Z", updatedAt: "2024-02-15T00:00:00Z" },
  { id: "3", name: "Carol User", email: "carol@example.com", role: "user", createdAt: "2024-03-20T00:00:00Z", updatedAt: "2024-03-20T00:00:00Z" },
];

const initialState: UsersState = {
  users: [],
  total: 0,
  page: 1,
  totalPages: 1,
  loadingState: "idle",
  error: null,
  selectedUser: null,
};

export const useUsersStore = create<UsersState & UsersActions>()(
  devtools(
    (set, get) => ({
      ...initialState,

      fetchUsers: async (filter = {}) => {
        set({ loadingState: "loading", error: null });
        try {
          // TODO: replace with real API
          // const token = useAuthStore.getState().token;
          // const res = await apiClient<PaginatedResponse<User>>("/admin/users", { token: token ?? "" });
          // set({ users: res.data.data, total: res.data.total, totalPages: res.data.totalPages, loadingState: "success" });

          await new Promise((r) => setTimeout(r, 500));
          set({ users: MOCK_USERS, total: MOCK_USERS.length, totalPages: 1, loadingState: "success" });
        } catch (err: unknown) {
          const message = err instanceof Error ? err.message : "Failed to fetch users";
          set({ error: message, loadingState: "error" });
        }
      },

      deleteUser: async (userId) => {
        const current = get().users;
        set({ users: current.filter((u) => u.id !== userId) });
        // TODO: call real API
      },

      selectUser: (user) => set({ selectedUser: user }),

      reset: () => set(initialState),
    }),
    { name: "UsersStore" }
  )
);
