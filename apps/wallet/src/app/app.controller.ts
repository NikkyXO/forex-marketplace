
import { AppService } from './app.service';
import { Controller } from '@nestjs/common';
import { UserWallet } from './wallet.entity';
import { GrpcMethod } from '@nestjs/microservices';
import { TransactionService } from './services/transaction.service';
import { checkTransactionRequest, fundWalletPayload, getUserTransactionRequest, getUserWalletRequest, TransactionCreatePayload } from '../assets/wallet';

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
  createUserWallet(data: Partial<UserWallet>) {
    return this.appService.createUserWallet(data);
  }

  @GrpcMethod('WalletServiceClient', 'fundWallet')
  fundUserWallet(data: fundWalletPayload) {
    return this.appService.fundUserWallet(data);
  }

  @GrpcMethod('WalletServiceClient', 'transferFundsFromWallet')
  transferFundFromUserWallet(data: fundWalletPayload) {
    this.appService.transferFundFromUserWallet(data)
  }

  @GrpcMethod('WalletServiceClient', 'transferFundsIntoWallet')
  transferFundIntoUserWallet(data: fundWalletPayload) {
    this.appService.transferFundsIntoUserWallet(data);
  }


  @GrpcMethod('wallet', 'createTransaction')
  createTransaction(data: TransactionCreatePayload) {
    this.transactionService.createTransaction(data);
  }


  @GrpcMethod('wallet', 'getUserTransaction')
  getUserTransction(data: getUserTransactionRequest) {
    this.transactionService.getTransaction(data)
  }


  @GrpcMethod('wallet', 'checkTransactionwithRef')
  checkTranscationwithRef(data: checkTransactionRequest) {
    this.transactionService.checkTransactionWithPayRef(data.paymentReference)
  }

}
