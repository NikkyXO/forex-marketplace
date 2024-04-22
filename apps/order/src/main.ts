import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import path from 'path';
import { Logger } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: '127.0.0.1:3333',
      package: 'order',
      protoPath: path.join(__dirname, './assets/order.proto'),

    },
   });

   await app.listen();
   Logger.log(
     `🚀 order Application is now running on: grpc://localhost:3333`
   );
}

bootstrap();
