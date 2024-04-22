

export class CurrencyExchangeDto {
  amount: number;
  from: string;
  to: string;
}

export class CreateTransactionDto extends CurrencyExchangeDto {
  userId: string;
  type: 'buy' | 'sell';
}

