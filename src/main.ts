import { NestFactory } from '@nestjs/core';
import { AppModule } from "./app.module";
import {LoggerUsers } from './Middlewares/logger.middleware';
import { ValidationPipe } from '@nestjs/common';
import { auth } from 'express-openid-connect';
import {config as auth0config} from "./Config/Auth0_config";
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
 
  const app = await NestFactory.create(AppModule);
  app.use(auth(auth0config));
  app.use(LoggerUsers);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true
  }))
  const sweaggerConfig = new DocumentBuilder()
  .setTitle("Demo Nest")
  .setDescription("Api generada con Nest referida al modulo N° 4 de la carrera Full-Stack")
  .setVersion("^7.4.0")
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app,sweaggerConfig ,{deepScanRoutes:true});
  SwaggerModule.setup("api" , app , document);

 await app.listen(3000);

}
bootstrap();