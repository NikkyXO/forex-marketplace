import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module';
import { Client, ClientsModule, Transport } from '@nestjs/microservices';
import path from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth, User } from './entitties';
import { JwtService } from './services/jwt.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';


@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'dev',
      signOptions: { expiresIn: '365d' },
    }),
    ClientsModule.register([
      {
        name: 'wallet',
        transport: Transport.GRPC,
        options: {
          package: 'wallet',
          protoPath: path.join(__dirname, '/assets/wallet.proto'),
        },
      },
      

    ]),
    DatabaseModule,
    TypeOrmModule.forFeature([Auth, User])
  ],
  controllers: [AppController],

  providers: [
    AppService,
    JwtService,
    JwtStrategy,
  ]
  ,
})
export class AppModule {}
