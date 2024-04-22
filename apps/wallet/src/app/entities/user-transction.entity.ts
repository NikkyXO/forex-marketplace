import { Entity, Column, ObjectIdColumn, Repository } from 'typeorm';




export enum TransactionStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export enum SystemPaymentPurpose {
  FUND_WALLET = 'FUND_WALLET',
  FUND_ORDER = 'FUND_ORDER',
}

export enum PaymentMethod {
  BANK_TRANSFER = 'BANK_TRANSFER',
  CREDIT_CARD = 'CREDIT_CARD',
  BANK_USSD = 'BANK_USSD',
  APP_PAY = 'APP_PAY'
}

export enum TransactionType {
  DEPOSIT = 'DEPOSIT',
  WITHDRAWAL = 'WITHDRAWAL',
  TRANSFER = 'TRANSFER',
  REFUND = 'REFUND',
}

export enum PaymentProvider {
  BANI = 'BANI',
  PAYSTACK = 'PAYSTACK',
  BANK = 'BANK_TRANSFER',
  WALLET_PAY  = 'WALLET_PAY',
}



@Entity()
export class Transaction extends Repository<Transaction> {
  @ObjectIdColumn()
  id: string;

  @Column()
  userWalletId: string;

  @Column()
  paymentPurpose: SystemPaymentPurpose;

  @Column()
  paymentMethod: PaymentMethod

  @Column()
  baseCurrency: string;

  @Column()
  amount: string;

  @Column()
  exchangeRate: number;

  @Column()
  type: TransactionType;

  @Column()
  status: TransactionStatus;

  @Column()
  paymentReference: string;

  @Column()
  paymentProvider: PaymentProvider;

}
