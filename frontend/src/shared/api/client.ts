import type { ApiResponse } from "@/shared/types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

type RequestMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface RequestOptions<TBody = unknown> {
  method?: RequestMethod;
  body?: TBody;
  headers?: HeadersInit;
  token?: string;
}

/**
 * Base fetch wrapper with automatic JSON handling and typed responses.
 *
 * @example
 * const res = await apiClient<User[]>("/users");
 * const created = await apiClient<User>("/users", { method: "POST", body: payload });
 */
export async function apiClient<TData = unknown, TBody = unknown>(
  endpoint: string,
  options: RequestOptions<TBody> = {}
): Promise<ApiResponse<TData>> {
  const { method = "GET", body, headers = {}, token } = options;

  const requestHeaders: HeadersInit = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...headers,
  };

  const config: RequestInit = {
    method,
    headers: requestHeaders,
    ...(body ? { body: JSON.stringify(body) } : {}),
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, config);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw {
      message: errorData?.message ?? "An unexpected error occurred",
      statusCode: response.status,
      errors: errorData?.errors,
    };
  }

  return response.json() as Promise<ApiResponse<TData>>;
}
