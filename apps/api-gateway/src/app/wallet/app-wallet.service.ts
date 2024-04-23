import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { createWalletPayload, fundWalletPayload, getUserWalletRequest, getUserWalletResponse, WalletServiceClient } from '../../assets/wallet';
import { firstValueFrom, lastValueFrom, Observable } from 'rxjs';


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

  async getUserWallet(data: getUserWalletRequest): Promise<getUserWalletResponse> {
    console.log(" calling client ", data );
    const wallet =  await firstValueFrom(this.walletServiceClient.getUserWallet(data) as unknown as Observable<any>);
    console.log("from client ", wallet  );
    return wallet
  }

  async fundUserWallet(data: fundWalletPayload) {
    console.log(" calling client ", data );
    const wallet =  await firstValueFrom(this.walletServiceClient.fundWallet(data) as unknown as Observable<any>);
    console.log("from client ", wallet  );
    return wallet
  }

}
