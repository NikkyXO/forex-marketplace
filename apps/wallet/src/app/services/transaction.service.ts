// transaction.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { ForexService } from './forex.service';
import { Transaction } from '../entities/user-transction.entity';
import { checkTransactionRequest, getUserTransactionRequest, TransactionCreatePayload } from '../../assets/wallet';


@Injectable()
export class TransactionService {
  constructor(
    private readonly forexService: ForexService,
    private readonly dataSource: DataSource,
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>
  ) {}

  async checkTransactionWithPayRef(paymentReference: string) {
    return await this.transactionRepository.findOne({
      where: { paymentReference  },
    });
  }

  async createTransaction(data: TransactionCreatePayload) {
    return this.transactionRepository.create({
      ...data as any,
    });
  }

  async generateReference(): Promise<string> {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return `Cut-${result}-${Date.now()}`;
  }

  async getTransaction(data: getUserTransactionRequest) {
    return this.transactionRepository.findOne({ where: { ...data } });
  }
}
