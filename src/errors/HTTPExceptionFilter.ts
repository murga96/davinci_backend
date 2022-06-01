import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import {
  CannotCreateEntityIdMapError,
  EntityNotFoundError,
  QueryFailedError,
  TypeORMError,
} from 'typeorm';
import { CustomResponse } from './Response';

@Catch(HttpException, TypeORMError)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    let message = (exception as any).message;
    let status = HttpStatus.INTERNAL_SERVER_ERROR;

    console.log(`Exception filter for ${exception.constructor.name}`);

    switch (exception.constructor) {
      case QueryFailedError:
        status = HttpStatus.UNPROCESSABLE_ENTITY;
        break;
      case EntityNotFoundError:
        status = HttpStatus.UNPROCESSABLE_ENTITY;
        break;
      case CannotCreateEntityIdMapError:
        status = HttpStatus.UNPROCESSABLE_ENTITY;
        break;
      case HttpException:
        status = (exception as HttpException).getStatus();
        break;
      default:
        if(exception instanceof HttpException){
          status = (exception as HttpException).getStatus();
        }else{
          status = HttpStatus.INTERNAL_SERVER_ERROR;
          message = 'Ocurrió un error interno en el servidor.';
        }
    }

    const responseBody: CustomResponse = {
      statusCode: status,
      timestamp: new Date(),
      message: message,
      error: exception.constructor.name,
      path: request.path,
    };

    response.status(status).json(responseBody);
  }
}
