import { PaginatedResult } from '../interfaces/paginated-result.interface';

export interface PaginationParams {
  page?: number;
  limit?: number;
}

/**
 * Normalizes pagination parameters with safe defaults and limits.
 */
export function normalizePagination(params: PaginationParams): { page: number; limit: number; skip: number } {
  const page = Math.max(1, params.page || 1);
  const limit = Math.min(100, Math.max(1, params.limit || 10));
  const skip = (page - 1) * limit;

  return { page, limit, skip };
}

/**
 * Builds a standardized PaginatedResult from raw data and count.
 */
export function buildPaginatedResult<T>(
  data: T[],
  total: number,
  page: number,
  limit: number,
): PaginatedResult<T> {
  const totalPages = Math.ceil(total / limit);

  return {
    data,
    meta: {
      total,
      page,
      limit,
      totalPages,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1,
    },
  };
}
