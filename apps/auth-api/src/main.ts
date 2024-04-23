
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import path from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'auth',
      protoPath: path.join(__dirname, './assets/auth.proto'),
      url: 'auth-api:3332' // '127.0.0.1:3332',
    },
   });
    await app.listen();
    Logger.log(
      `🚀 auth-api Application is now running on: grpc://localhost:3332`
    );
}

bootstrap();



