import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';

/**
 * Mark a route as public (bypass the global JwtAuthGuard).
 * Apply this decorator to endpoints that do not require authentication.
 * @example @Public()
 */
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
