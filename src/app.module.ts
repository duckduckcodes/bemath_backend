import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { AcessTokenGuard } from './auth/guards';
import { AuthController } from './auth/auth.controller';
import { PrismaModule } from './prisma/prisma.module';
import cors from 'cors';
import helmet from 'helmet';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: AcessTokenGuard }],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cors, helmet()).forRoutes(AuthController);
  }
}
