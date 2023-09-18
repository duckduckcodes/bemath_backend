import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
      origin: 'http://localhost:3000', //l'url de l'application
      credentials: true,
    },
  });
  app.useGlobalPipes(new ValidationPipe());
  app.use(helmet());

  await app.listen(3000);
}
bootstrap();
