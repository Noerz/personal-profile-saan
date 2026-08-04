"use client";

import { useRouter } from "next/navigation";
import { AuthForm } from "@/components/organisms/AuthForm";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { ROUTES } from "@/shared/config/routes";
import type { AuthFormData } from "@/components/organisms/AuthForm";

export default function RegisterPage() {
  const router = useRouter();
  const { register, isLoading, error, clearError } = useAuth();

  const handleSubmit = async (data: AuthFormData) => {
    clearError();
    try {
      await register({
        name: data.name ?? "",
        email: data.email,
        password: data.password,
      });
      router.push(ROUTES.PROFILE);
    } catch {
      // error shown via store
    }
  };

  return (
    <AuthForm
      mode="register"
      onSubmit={handleSubmit}
      isLoading={isLoading}
      error={error ?? undefined}
      onSwitchMode={() => router.push(ROUTES.LOGIN)}
    />
  );
}
