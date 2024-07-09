import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {LoggerUsers } from './Middlewares/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(LoggerUsers);
  await app.listen(3000);
}
bootstrap();
