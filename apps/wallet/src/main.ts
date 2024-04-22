import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import path from 'path';
import { Logger } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'wallet',
      protoPath: path.join(__dirname, './assets/wallet.proto'),
      url: '127.0.0.1:3335',
    },
   });
   await app.listen();
   Logger.log(
    `🚀 wallet Application is now running on: grpc://localhost:3335`
  );
}

bootstrap();
