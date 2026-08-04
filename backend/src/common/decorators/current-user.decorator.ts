import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/**
 * Extracts the current authenticated admin from the request object.
 * The admin object is injected by the JwtStrategy validate() method.
 *
 * @example
 * // Get full admin object
 * @CurrentUser() admin: Admin
 *
 * // Get only specific field
 * @CurrentUser('id') adminId: string
 */
export const CurrentUser = createParamDecorator((field: string | undefined, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  const user = request.user;

  return field ? user?.[field] : user;
});
