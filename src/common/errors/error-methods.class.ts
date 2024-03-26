import { ErrorCodesEnum } from '../exceptions/enums/error-codes.enum';

export class ErrorMethods {
  public static getMessage(errorCode: ErrorCodesEnum): string {
    switch (errorCode) {
      case ErrorCodesEnum.REGISTER_NOT_FOUND:
        return 'The register requested was not found';
      case ErrorCodesEnum.INVALID_ID:
        return 'Invalid ID';
    }
  }
}
