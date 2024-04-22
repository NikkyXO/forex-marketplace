import { HttpStatus, Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { AuthServiceClient, LoginRequest, RegisterRequest, resultData, ValidateRequest } from '../../assets/auth';
import { WalletServiceClient } from '../../assets/wallet';
import { lastValueFrom, Observable } from 'rxjs';
import { firstValueFrom } from 'rxjs';
import { promisify } from 'util';

@Injectable()
export class GRPCAuthService implements OnModuleInit {
  private authServiceClient: AuthServiceClient;
  private walletServiceClient: WalletServiceClient;


  constructor(
    @Inject('auth') private authGrpc: ClientGrpc,
    @Inject('wallet') private walletGrpc: ClientGrpc,
  ) {}


  public onModuleInit() {
    this.authServiceClient =
      this.authGrpc.getService<AuthServiceClient>("AuthServiceClient");
      this.walletServiceClient =
      this.walletGrpc.getService<WalletServiceClient>("WalletServiceClient");
  }

  async registerUser(data: RegisterRequest) {
    const res =  await this.authServiceClient.register(data);
    const wallet = await lastValueFrom(this.walletServiceClient.createUserWallet({userId: res.userId}) as unknown as  Observable<any>);
    console.log({ walletInGateway: wallet });
    return res;
  }

  loginUser(data: LoginRequest) {
    return this.authServiceClient.login(data);
  }

  ValidateUser(data: ValidateRequest) {
    return this.authServiceClient.validate(data);
  }
}
