import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorCodesEnum } from '../enums/error-codes.enum';

export class CustomHttpException extends HttpException {
  constructor(
    errorCode: ErrorCodesEnum,
    httpError: HttpStatus,
    extraMessage?: string,
  ) {
    super({ errorCode: errorCode, extraMessage }, httpError);
  }
}
