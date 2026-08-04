import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * Guard specifically for the refresh token endpoint.
 * Uses the 'jwt-refresh' strategy which validates the refresh token.
 */
@Injectable()
export class JwtRefreshGuard extends AuthGuard('jwt-refresh') {}
