import { Request } from 'express';
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { CustomResponse } from './Response';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    // In certain situations `httpAdapter` might not be available in the
    // constructor method, thus we should resolve it here.
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    console.log("ExceptionFilter")
    console.log(exception.constructor.name)

    const responseBody: CustomResponse = {
      statusCode: httpStatus,
      timestamp: new Date(),
      message: "Este es un error",
      error: exception.constructor.name,
      path: request.path,
    };

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}
