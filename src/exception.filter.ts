import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();
    let errorMessage = exception.message;

    if (
      typeof exceptionResponse === 'object' &&
      'message' in exceptionResponse
    ) {
      errorMessage = (exceptionResponse as any).message;
    }

    response.status(status).json({
      resultado: null,
      codigoError: status,
      mensajeError: errorMessage,
    });
  }
}
