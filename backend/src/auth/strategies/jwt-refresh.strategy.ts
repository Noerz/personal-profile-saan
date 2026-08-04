import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import type { Request } from 'express';
import { JwtRefreshPayload } from '../../common/interfaces/jwt-payload.interface';
import { PrismaService } from '../../prisma/prisma.service';
import * as argon2 from 'argon2';

/**
 * JWT Refresh Token Strategy.
 * Extracts the refresh token from Authorization Bearer header,
 * verifies it against the hashed token in DB, and injects tokenId into req.user.
 */
@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor(
    configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('jwt.refreshSecret') as string,
      passReqToCallback: true as true,
    });
  }

  async validate(req: Request, payload: JwtRefreshPayload) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException('Refresh token not provided.');
    }

    const refreshToken = authHeader.replace('Bearer ', '').trim();

    // Find the specific token record by tokenId from payload
    const tokenRecord = await this.prisma.refreshToken.findFirst({
      where: {
        id: payload.tokenId,
        adminId: payload.sub,
        isRevoked: false,
      },
    });

    if (!tokenRecord) {
      throw new UnauthorizedException('Refresh token has been revoked or does not exist.');
    }

    // Verify expiration
    if (tokenRecord.expiresAt < new Date()) {
      throw new UnauthorizedException('Refresh token has expired. Please login again.');
    }

    // Verify hash (constant-time comparison via argon2)
    const isValid = await argon2.verify(tokenRecord.tokenHash, refreshToken);
    if (!isValid) {
      throw new UnauthorizedException('Invalid refresh token.');
    }

    // Return enriched payload with tokenId for rotation in the service
    return {
      sub: payload.sub,
      tokenId: payload.tokenId,
      tokenRecordId: tokenRecord.id,
    };
  }
}
