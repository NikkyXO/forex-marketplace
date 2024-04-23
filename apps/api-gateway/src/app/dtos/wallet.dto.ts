import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { fundWalletPayload, getUserWalletRequest, PaymentMethod, PaymentProvider, TransactionStatus, } from "../../assets/wallet";
import { ApiProperty } from "@nestjs/swagger";


export class getUserWalletDto implements getUserWalletRequest {

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: '641768iut384f6843' })
  userId: string;

}

enum IPaymentMethod {
  BANK_TRANSFER = 'BANK_TRANSFER',
  CREDIT_CARD = 'CREDIT_CARD',
  BANK_USSD = 'BANK_USSD',
  APP_PAY = 'APP_PAY',
}

enum ITransactionType {
  DEPOSIT = 'DEPOSIT',
  WITHDRAWAL = 'WITHDRAWAL',
  TRANSFER = 'TRANSFER',
  REFUND = 'REFUND',
}

enum IPaymentProvider {
  BANI = 'BANI',
  PAYSTACK = 'PAYSTACK',
  WALLET_PAY = 'WALLET_PAY',
  BANK = 'BANK',
}

enum ITransactionStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',

}



export class fundWalletDto implements fundWalletPayload {
  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @ApiProperty()
  @IsEnum(IPaymentMethod, { each: true})
  paymentMethod: PaymentMethod;

  @IsNotEmpty()
  @ApiProperty()
  @IsEnum(ITransactionStatus, { each: true})
  transactionStatus: TransactionStatus;

  @IsOptional()
  @ApiProperty()
  description?: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsEnum(IPaymentProvider, { each: true})
  paymentProvider: PaymentProvider;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  paymentReference: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  userId: string;

}
