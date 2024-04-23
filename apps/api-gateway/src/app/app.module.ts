import {  Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import path from 'path';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { GRPCAuthController, GRPCAuthService } from './auth';
import { GRPCWalletController } from './wallet/app-wallet.controller';
import { GRPCOrderController } from './order/app-order.controller';
import { GRPCWalletService } from './wallet';
import { GRPCOrderService } from './order/app-order.service';
import { GRPCProductController } from './order/app-product.controller';


@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'dev',
      signOptions: { expiresIn: '365d' },
    }),
    ClientsModule.register([
      {
        name: 'wallet',
        transport: Transport.GRPC,
        options: {
          url: "127.0.0.1:3335",
          package: 'wallet',
          protoPath: path.join(__dirname, '/assets/wallet.proto'),
        },
      },
      {
        name: 'auth',
        transport: Transport.GRPC,
        options: {
          url: "127.0.0.1:3332",
          package: 'auth',
          protoPath: path.join(__dirname, '/assets/auth.proto'),

        },
      },
      {
        name: 'order',
        transport: Transport.GRPC,
        options: {
          url: "127.0.0.1:3333",
          package: 'order',
          protoPath: path.join(__dirname, '/assets/order.proto'),
        },
      },
      // {
      //   name: 'rate',
      //   transport: Transport.GRPC,
      //   options: {
      //     package: 'rate',
      //     protoPath: path.join(__dirname, '/assets/rate.proto'),
      //   },
      // },
    ]),
  ],
  controllers: [
    AppController,
    GRPCAuthController,
    GRPCWalletController,
    GRPCOrderController,
    GRPCProductController,
  ],
  providers: [
    AppService,
    GRPCAuthService,
    GRPCWalletService,
    GRPCOrderService
  ],
})

export class AppModule {}

