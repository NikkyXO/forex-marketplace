import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { createWalletPayload, getUserWalletRequest, WalletServiceClient } from '../../assets/wallet';


@Injectable()
export class GRPCWalletService implements OnModuleInit {
  private walletServiceClient: WalletServiceClient;

  constructor(
    @Inject('wallet') private walletGrpc: ClientGrpc,
  ) {}


  public onModuleInit() {
      this.walletServiceClient =
      this.walletGrpc.getService<WalletServiceClient>("WalletServiceClient");
  }

  getUserWallet(data: getUserWalletRequest) {
    return this.walletServiceClient.getUserWallet(data);
  }

}
