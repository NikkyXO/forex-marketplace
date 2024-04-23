import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module';
import { ProductService } from './services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProduct } from './entiities/user-product.entity';
import { Product } from './entiities/product.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';
import path from 'path';
import { Item } from './entiities/item.entity';


@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([Product, UserProduct, Item]),
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
    ]),
  ],
  controllers: [AppController],
  providers: [AppService, ProductService],
})
export class AppModule {}
