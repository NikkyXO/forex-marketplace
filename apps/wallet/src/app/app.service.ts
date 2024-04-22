
import { BadRequestException, Injectable } from '@nestjs/common';
import { UserWallet } from './wallet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { fundWalletPayload, getUserWalletRequest } from './../assets/wallet';
import { TransactionService } from './services/transaction.service';
import { PaymentMethod, SystemPaymentPurpose, TransactionStatus, TransactionType } from './entities';
import { generateTransactionNumber } from './util';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable()
export class AppService {

  constructor(
    private readonly transactionService: TransactionService,
    private readonly dataSource: DataSource,
    @InjectRepository(UserWallet) private userWallet: Repository<UserWallet>
  ) {}

  async createUserWallet(data: Partial<UserWallet>) {
    console.log({data});
    const walletExists = await this.userWallet.findOne({
      where: { userId: data.userId },
    });
    console.log({walletExists});
    if (!walletExists) {
      const wallet = this.userWallet.create(data);
      const savedWallet = await this.dataSource.manager.save(wallet);
      console.log({ savedWallet });
      return wallet;
    }
    return walletExists;
  }

  async getUserWallet({userId}: getUserWalletRequest): Promise<UserWallet> | null {
    return await this.userWallet.findOne({ where: { userId } });
  }

  async fundUserWallet(data: fundWalletPayload) {
    if (data.paymentReference) {
      const transaction =
        await this.transactionService.checkTransactionWithPayRef(
          data.paymentReference
        );
      if (transaction) throw new Error('transaction already used');
    }

    const wallet = await this.getUserWallet({userId: data.userId});
    if (!wallet) {
      throw new Error("Wallet not found'");
    }
    const curr = Number(wallet?.balance);
    const total = curr + Number(data.amount);
    wallet.balance = total;
    const totalCredited = Number(wallet?.totalCredit);
    const CurrentTotalCredited = totalCredited + Number(data.amount);
    wallet.totalCredit = CurrentTotalCredited;
    await this.dataSource.manager.save(wallet);
    await this.transactionService.createTransaction({
      ...data as any,
      paymentPurpose: SystemPaymentPurpose.FUND_WALLET,
      paymentReference: data.paymentReference ? data.paymentReference: generateTransactionNumber(),
    });
    return wallet;
  }

  async transferFundFromUserWallet(data: Partial<fundWalletPayload>) {

    try {
      const wallet = await this.getUserWallet({userId: data.userId})

      if (!wallet) throw new BadRequestException('Wallet not found');
      const curr = Number(wallet?.balance);
      if (curr < Number(data.amount))
        throw new BadRequestException('Insufficient funds');
      if (Number(data.amount) <= 0) throw new BadRequestException('Invalid amount');

      const currentBalance = curr - Number(data.amount);
      wallet.balance = currentBalance;
      wallet.actualSpend += Number(data.amount);
      await this.dataSource.manager.save(wallet);
      await this.transactionService.createTransaction(
        {
          ...data as any,
          amount: Number(data.amount),
          type: TransactionType.TRANSFER,
          userWalletId: wallet.id,
          status: TransactionStatus.COMPLETED,
          paymentPurpose: SystemPaymentPurpose.FUND_WALLET,
          paymentMethod: PaymentMethod.APP_PAY,

        },
      );
      return wallet;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async transferFundsIntoUserWallet(data: Partial<fundWalletPayload>) {
    try {
      const wallet = await this.getUserWallet({userId: data.userId})

      if (!wallet) throw new BadRequestException('Wallet not found');
      if (Number(data.amount) <= 0) throw new BadRequestException('Invalid amount');
      const curr = Number(wallet?.balance);
      const currentBalance = curr + Number(data.amount);
      wallet.balance = currentBalance;
      wallet.totalCredit += Number(data.amount)
      await this.dataSource.manager.save(wallet);
      await this.transactionService.createTransaction(
        {
          ...data as any,
          amount: Number(data.amount),
          type: TransactionType.DEPOSIT,
          userWalletId: wallet.id,
          status: TransactionStatus.COMPLETED,
          paymentPurpose: SystemPaymentPurpose.FUND_WALLET,
          paymentMethod: PaymentMethod.APP_PAY,

        },
      );
      return wallet;
    } catch (error) {
      throw new BadRequestException(error.message);
    }

  }
}
