import { Role } from '../enums/role.enum';

export interface JwtPayload {
  sub: string;       // admin ID
  email: string;
  role: Role;
  iat?: number;
  exp?: number;
}

export interface JwtRefreshPayload {
  sub: string;       // admin ID
  tokenId: string;   // refresh_token record ID — used for revocation
  iat?: number;
  exp?: number;
}
