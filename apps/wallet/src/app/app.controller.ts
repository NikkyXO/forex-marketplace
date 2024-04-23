
import { AppService } from './app.service';
import { Controller } from '@nestjs/common';
import { UserWallet } from './wallet.entity';
import { GrpcMethod } from '@nestjs/microservices';
import { TransactionService } from './services/transaction.service';
import { checkTransactionRequest, createWalletPayload, fundWalletPayload, getUserTransactionRequest, getUserWalletRequest, TransactionCreatePayload } from '../assets/wallet';

@Controller()
export class AppController {

  constructor(
    private readonly appService: AppService,
    private readonly transactionService: TransactionService,
  ) { }


  @GrpcMethod('WalletServiceClient', 'getUserWallet')
  getUserWallet({ userId }: getUserWalletRequest){
    return this.appService.getUserWallet({userId});
  }

  @GrpcMethod('WalletServiceClient', 'createUserWallet')
  createUserWallet(data: createWalletPayload) {
    return this.appService.createUserWallet(data);
  }

  @GrpcMethod('WalletServiceClient', 'fundWallet')
  async fundUserWallet(data: fundWalletPayload) {
    return await this.appService.fundUserWallet(data);
  }

  @GrpcMethod('WalletServiceClient', 'transferFundsFromWallet')
  async transferFundFromUserWallet(data: fundWalletPayload) {
    return await this.appService.transferFundFromUserWallet(data)
  }

  @GrpcMethod('WalletServiceClient', 'transferFundsIntoWallet')
  transferFundIntoUserWallet(data: fundWalletPayload) {
    this.appService.transferFundsIntoUserWallet(data);
  }


  @GrpcMethod('WalletServiceClient', 'createTransaction')
  createTransaction(data: TransactionCreatePayload) {
    console.log({ inClient: data });
    return this.transactionService.createTransaction(data);
  }


  @GrpcMethod('WalletServiceClient', 'getUserTransaction')
  getUserTransction(data: getUserTransactionRequest) {
    this.transactionService.getTransaction(data)
  }


  @GrpcMethod('WalletServiceClient', 'checkTransactionwithRef')
  checkTranscationwithRef(data: checkTransactionRequest) {
    this.transactionService.checkTransactionWithPayRef(data.paymentReference)
  }

}
