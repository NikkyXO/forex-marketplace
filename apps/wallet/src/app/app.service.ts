import { BadRequestException, Injectable } from '@nestjs/common';
import { UserWallet } from './wallet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import {
  createWalletPayload,
  fundWalletPayload,
  getUserWalletRequest,
  getUserWalletResponse,
} from './../assets/wallet';
import { TransactionService } from './services/transaction.service';
import {
  PaymentMethod,
  SystemPaymentPurpose,
  TransactionStatus,
  TransactionType,
} from './entities';
import { generateTransactionNumber } from './util';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable()
export class AppService {

  constructor(
    private readonly transactionService: TransactionService,
    private readonly dataSource: DataSource,
    @InjectRepository(UserWallet) private userWallet: Repository<UserWallet>
  ) {
  }





  async createUserWallet(data: createWalletPayload) {
    console.log({ data });
    const walletExists = await this.userWallet.findOne({
      where: { userId: data.userId },
    });
    console.log({ walletExists });
    if (!walletExists) {
      const createData = {
        userId: data.userId,
        actualSpend: 0,
        balance: 0,
        totalCredit: 0,
      };
      const wallet = this.dataSource.getRepository(UserWallet).save(createData)
      return wallet;
    }
    return walletExists;
  }

  async getUserWallet({
    userId,
  }: getUserWalletRequest): Promise<getUserWalletResponse> {
    const wallet = await this.userWallet.findOne({ where: { userId: userId } });
    console.log({ walletExists: wallet });
    return { wallet };
  }

  async fundUserWallet(data: fundWalletPayload) {
    if (data.paymentReference) {
      const transaction =
        await this.transactionService.checkTransactionWithPayRef(
          data.paymentReference
        );
      if (transaction) throw new Error('transaction already used');
    }

    const userWallet = await this.getUserWallet({ userId: data.userId });
    if (!userWallet) {
      throw new Error("Wallet not found'");
    }
    const curr = Number(userWallet.wallet?.balance);
    const total = curr + Number(data.amount);
    userWallet.wallet.balance = total;
    const totalCredited = Number(userWallet.wallet?.totalCredit);
    const CurrentTotalCredited = totalCredited + Number(data.amount);
    userWallet.wallet.totalCredit = CurrentTotalCredited;
    await this.dataSource.manager.save(userWallet.wallet);
    await this.transactionService.createTransaction({
      ...(data as any),
      paymentPurpose: SystemPaymentPurpose.FUND_WALLET,
      paymentReference: data.paymentReference
        ? data.paymentReference
        : generateTransactionNumber(),
    });
    return userWallet.wallet;
  }

  async transferFundFromUserWallet(data: Partial<fundWalletPayload>) {
    try {
      const userWallet = await this.getUserWallet({ userId: data.userId });

      if (!userWallet) throw new BadRequestException('Wallet not found');
      const curr = Number(userWallet.wallet?.balance);
      if (curr < Number(data.amount))
        throw new BadRequestException('Insufficient funds');
      if (Number(data.amount) <= 0)
        throw new BadRequestException('Invalid amount');

      const currentBalance = curr - Number(data.amount);
      userWallet.wallet.balance = currentBalance;
      userWallet.wallet.ActualSpend += Number(data.amount);
      await this.dataSource.manager.save(userWallet.wallet);
      await this.transactionService.createTransaction({
        ...(data as any),
        amount: Number(data.amount),
        type: TransactionType.TRANSFER,
        userWalletId: userWallet.wallet.id,
        status: TransactionStatus.COMPLETED,
        paymentPurpose: SystemPaymentPurpose.FUND_WALLET,
        paymentMethod: PaymentMethod.APP_PAY,
      });
      console.log({ userWallet });
      return userWallet.wallet;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async transferFundsIntoUserWallet(data: Partial<fundWalletPayload>) {
    try {
      const userWallet = await this.getUserWallet({ userId: data.userId });

      if (!userWallet) throw new BadRequestException('Wallet not found');
      if (Number(data.amount) <= 0)
        throw new BadRequestException('Invalid amount');
      const curr = Number(userWallet.wallet?.balance);
      const currentBalance = curr + Number(data.amount);
      userWallet.wallet.balance = currentBalance;
      userWallet.wallet.totalCredit += Number(data.amount);
      await this.dataSource.manager.save(userWallet.wallet);
      await this.transactionService.createTransaction({
        ...(data as any),
        amount: Number(data.amount),
        type: TransactionType.DEPOSIT,
        userWalletId: userWallet.wallet.id,
        status: TransactionStatus.COMPLETED,
        paymentPurpose: SystemPaymentPurpose.FUND_WALLET,
        paymentMethod: PaymentMethod.APP_PAY,
      });
      console.log({ userWallet });
      return userWallet.wallet;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
