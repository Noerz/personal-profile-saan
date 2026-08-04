import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';
import { Request, Response } from 'express';

/**
 * Logging + Request ID Interceptor.
 * - Attaches a unique X-Request-ID to every request & response.
 * - Logs incoming request method, path, and response time.
 */
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger('HTTP');

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    // Attach a unique request ID
    const requestId = uuidv4();
    request['requestId'] = requestId;
    response.setHeader('X-Request-ID', requestId);

    const { method, url, ip } = request;
    const userAgent = request.get('user-agent') || '';
    const startTime = Date.now();

    this.logger.log(`→ [${requestId}] ${method} ${url} - IP: ${ip}`);

    return next.handle().pipe(
      tap({
        next: () => {
          const duration = Date.now() - startTime;
          const statusCode = response.statusCode;
          this.logger.log(`← [${requestId}] ${method} ${url} ${statusCode} - ${duration}ms - ${userAgent}`);
        },
        error: (error: unknown) => {
          const duration = Date.now() - startTime;
          this.logger.error(
            `← [${requestId}] ${method} ${url} ERROR - ${duration}ms`,
            error instanceof Error ? error.stack : String(error),
          );
        },
      }),
    );
  }
}
