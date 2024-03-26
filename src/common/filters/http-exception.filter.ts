import {
  Catch,
  HttpException,
  ExceptionFilter,
  ArgumentsHost,
} from '@nestjs/common';
import { Response } from 'express';
import { ErrorCodesEnum } from '../exceptions/enums/error-codes.enum';
import { ErrorMethods } from '../errors/error-methods.class';
import { CustomHttpException } from '../exceptions/exceptions/custom-http.exception';

@Catch(CustomHttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse() as {
      errorCode: ErrorCodesEnum;
      extraMessage?: string;
    };

    response.status(status).json({
      statusCode: status,
      errorCode: exceptionResponse.errorCode,
      message: ErrorMethods.getMessage(exceptionResponse.errorCode),
    });
  }
}
