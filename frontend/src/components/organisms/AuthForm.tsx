"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button, Spinner } from "@/components/atoms";
import { FormField } from "@/components/molecules";
import { Card } from "@/components/molecules";
import { cn } from "@/shared/lib/utils";

export type AuthFormMode = "login" | "register";

export interface AuthFormData {
  name?: string;
  email: string;
  password: string;
}

export interface AuthFormProps {
  mode?: AuthFormMode;
  onSubmit: (data: AuthFormData) => Promise<void>;
  isLoading?: boolean;
  error?: string;
  onSwitchMode?: () => void;
}

export function AuthForm({
  mode = "login",
  onSubmit,
  isLoading = false,
  error,
  onSwitchMode,
}: AuthFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<AuthFormData>({
    name: "",
    email: "",
    password: "",
  });

  const isRegister = mode === "register";

  const handleChange = (field: keyof AuthFormData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <Card variant="glass" padding="lg" className="w-full max-w-md">
      <div className="mb-6 text-center">
        <div className="mx-auto mb-4 h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
          <span className="text-white font-bold text-lg">S</span>
        </div>
        <h1 className="text-2xl font-bold text-white">
          {isRegister ? "Create Account" : "Welcome Back"}
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          {isRegister
            ? "Fill in your details to get started"
            : "Sign in to your account"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
        {isRegister && (
          <FormField
            id="auth-name"
            label="Full Name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange("name")}
            required
            autoComplete="name"
          />
        )}

        <FormField
          id="auth-email"
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange("email")}
          required
          autoComplete="email"
        />

        <FormField
          id="auth-password"
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder={isRegister ? "Min. 8 characters" : "Enter your password"}
          value={formData.password}
          onChange={handleChange("password")}
          required
          autoComplete={isRegister ? "new-password" : "current-password"}
          rightAddon={
            <button
              type="button"
              onClick={() => setShowPassword((p) => !p)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="text-slate-400 hover:text-slate-200 transition-colors"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          }
        />

        {error && (
          <p role="alert" className="rounded-lg bg-rose-500/10 border border-rose-500/30 px-3 py-2 text-sm text-rose-400">
            {error}
          </p>
        )}

        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isLoading}
          className="mt-2 w-full"
          id="auth-submit-btn"
        >
          {isLoading ? (
            <Spinner size="sm" />
          ) : isRegister ? (
            "Create Account"
          ) : (
            "Sign In"
          )}
        </Button>
      </form>

      {onSwitchMode && (
        <p className="mt-5 text-center text-sm text-slate-400">
          {isRegister ? "Already have an account? " : "Don't have an account? "}
          <button
            type="button"
            onClick={onSwitchMode}
            className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            {isRegister ? "Sign In" : "Sign Up"}
          </button>
        </p>
      )}
    </Card>
  );
}
