"use client";

import { useRouter } from "next/navigation";
import { AuthForm } from "@/components/organisms/AuthForm";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { ROUTES } from "@/shared/config/routes";
import type { AuthFormData } from "@/components/organisms/AuthForm";

export default function LoginPage() {
  const router = useRouter();
  const { login, isLoading, error, clearError } = useAuth();

  const handleSubmit = async (data: AuthFormData) => {
    clearError();
    
    // --- Dummy Admin Login Logic ---
    if (data.email === "admin" && data.password === "admin") {
      // Set dummy cookies for middleware
      document.cookie = "auth-token=dummy-admin-token; path=/";
      document.cookie = "user-role=admin; path=/";
      
      // Navigate to admin dashboard
      router.push("/admin/dashboard");
      return;
    }
    // -------------------------------

    try {
      await login({ email: data.email, password: data.password });
      router.push(ROUTES.HOME);
    } catch {
      // error is shown via store
    }
  };

  return (
    <AuthForm
      mode="login"
      onSubmit={handleSubmit}
      isLoading={isLoading}
      error={error ?? undefined}
      onSwitchMode={() => router.push(ROUTES.REGISTER)}
    />
  );
}
