import type { User, LoadingState } from "@/shared/types";

export interface ProfileUpdatePayload {
  name?: string;
  bio?: string;
  location?: string;
  website?: string;
  avatarUrl?: string;
}

export interface ProfileState {
  profile: User | null;
  loadingState: LoadingState;
  error: string | null;
}
