import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Response Interceptor.
 * Wraps all successful controller responses in a standard API format:
 * { success: true, message: "Success", data: <original response> }
 *
 * If the controller already returns a full ApiResponse object (has `success` field),
 * it passes through unchanged to allow custom messages.
 */
@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, unknown> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    return next.handle().pipe(
      map((data) => {
        // If controller returned a pre-formatted ApiResponse, pass through
        if (data && typeof data === 'object' && 'success' in data) {
          return data;
        }

        return {
          success: true,
          message: 'Success',
          data,
        };
      }),
    );
  }
}
