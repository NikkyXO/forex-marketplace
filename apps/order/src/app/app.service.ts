import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ProductService } from './services/product.service';
import {
  PaymentMethod,
  PaymentProvider,
  SystemPaymentPurpose,
  TransactionCreatePayload,
  TransactionStatus,
  TransactionType,
  WalletServiceClient,
} from '../assets/wallet';
import { ClientGrpc } from '@nestjs/microservices';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { Item } from './entiities/item.entity';
import { buyProductDto, CurrencyExchangeDto } from './dtos/order.dto';
import { firstValueFrom, Observable } from 'rxjs';
import { error } from 'console';

@Injectable()
export class AppService implements OnModuleInit {
  // constructor(private readonly productService: ProductService) {}

  private readonly API_KEY = '305f44084e8548c9a149c945175489cc';
  private readonly API_URL = `https://openexchangerates.org/api/latest.json?app_id=${this.API_KEY}`;

  private walletServiceClient: WalletServiceClient;

  constructor(
    @Inject('wallet')
    private readonly walletGrpc: ClientGrpc,

    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,

    private readonly productService: ProductService
  ) {}

  public onModuleInit() {
    this.walletServiceClient = this.walletGrpc.getService<WalletServiceClient>(
      'WalletServiceClient'
    );
  }

  async fetchExchangeRates(): Promise<any> {
    try {
      const response = await axios.get(this.API_URL);
      return response.data.rates;
    } catch (error) {
      console.error('Error fetching exchange rates:', error.message);
      throw error;
    }
  }

  async convertCurrency(data: CurrencyExchangeDto): Promise<number> {
    const rates = await this.fetchExchangeRates();

    const fromRate = rates[data.fromCurrency];
    const toRate = rates[data.toCurrency];

    if (!fromRate || !toRate) {
      throw new Error('Invalid currency');
    }

    console.log({ fromRate });
    console.log({ toRate });
    return (data.amount / fromRate) * toRate;
  }

  async createItem(data: Partial<Item>) {
    return await this.itemRepository.create({
      ...(data as any),
    });
  }

  async generateReference() {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return `APP-${result}-${Date.now()}`;
  }

  async buyASellerProduct(data: buyProductDto) {
    try {
      const quantity = data.quantity;

      const userProduct = await this.productService.getUserProductById(
        data.userProductId
      );
      console.log({ userProduct });
      if (!userProduct) {
        return {
          error: ' user product doesnt exist',
          message: ''
        };
      }
      const totalPrice = Number(userProduct.sellingPrice) * quantity;
      const exchangeData = {
        amount: totalPrice,
        fromCurrency: data.fromCurrency,
        toCurrency: data.toCurrency,
      };
      // calculates amount to pay from with exchnge forex rates per item amount from external api
      const convertedAmount = await this.convertCurrency(exchangeData);

      // creates item record with quantity and amount calc
      const itemCreateData = {
        amount: totalPrice,
        quantity: data.quantity,
        productId: userProduct.productId,
      };
      const item = await this.createItem(itemCreateData);
      console.log({ item });

      const userWallet = await firstValueFrom(
        this.walletServiceClient.getUserWallet({
          userId: data.buyingUserId,
        }) as unknown as Observable<any>
      );
      console.log({ userWallet });
      const transactionData: TransactionCreatePayload = {
        amount: totalPrice,
        paymentPurpose: SystemPaymentPurpose.FUND_WALLET,
        userWalletId: userWallet.wallet.id,
        exchangeRate: Number(convertedAmount / totalPrice),
        paymentProvider: PaymentProvider.WALLET_PAY,
        paymentReference: await this.generateReference(),
        userId: data.buyingUserId,
        paymentMethod: PaymentMethod.APP_PAY,
        baseCurrency: data.fromCurrency,
        transactionType: TransactionType.DEPOSIT,
        transactionStatus: TransactionStatus.COMPLETED,
        accountNumber: userWallet.wallet.accountNumber,
      };

      // creates transaction record
      const transaction = await firstValueFrom(
        this.walletServiceClient.createTransaction(
          transactionData
        ) as unknown as Observable<any>
      );
      console.log({ transaction });
      if(!transaction) {
        return {
          message: '',
          error: 'error occured while creating order'
        }
      }
      const fundWalletData = {
        amount: totalPrice,
        paymentProvider: PaymentProvider.WALLET_PAY,
        paymentReference: await this.generateReference(),
        userId: data.buyingUserId,
        paymentMethod: PaymentMethod.APP_PAY,
        transactionStatus: TransactionStatus.COMPLETED,
      };

      const fundSellerWalletData = {
        ...fundWalletData,
        userId: userProduct.userId,
      };

      await this.walletServiceClient.transferFundsFromWallet(fundWalletData);
      await this.walletServiceClient.transferFundsIntoWallet(
        fundSellerWalletData
      );

      const removeUserProductData = {
        productId: userProduct.productId,
        userId: userProduct.userId,
      };
      await this.productService.removeUserProduct(removeUserProductData);

      const addUserProductData = {
        productId: userProduct.productId,
        userId: userWallet.wallet.userId,
      };

      const userBoughtProduct =
        this.productService.addBoughtProductToUser(addUserProductData);
      if (userBoughtProduct) {
        return {
          message: 'SUccessfully ordered and received product',
          error: '',
        };
      }
    } catch (error) {
      return {
        message: '',
        error: error.message,
      };
    }
  }
}
