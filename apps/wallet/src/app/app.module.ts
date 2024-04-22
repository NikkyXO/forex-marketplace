import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionService } from './services/transaction.service';
import { DatabaseModule } from './database.module';
import { UserWallet } from './wallet.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ForexService } from './services';
import { Transaction } from './entities';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([UserWallet, Transaction])
  ],

  controllers: [AppController],
  providers: [AppService, TransactionService, ForexService],
})
export class AppModule {}
