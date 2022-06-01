import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './errors/AllExceptionFilter';
import { HttpExceptionFilter } from './errors/HTTPExceptionFilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  app.useGlobalFilters(new HttpExceptionFilter())
  await app.listen(3001);
}
bootstrap();
