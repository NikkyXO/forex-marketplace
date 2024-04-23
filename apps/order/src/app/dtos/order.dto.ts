import { allProductResponse, createProductResponse } from "../../assets/order";

export class CurrencyExchangeDto {
  amount: number;
  fromCurrency: string;
  toCurrency: string;
}

export class CreateTransactionDto extends CurrencyExchangeDto {
  userId: string;
  type: 'buy' | 'sell';
}

export class buyProductDto {
  buyingUserId?: string
  userProductId: string;
  quantity: number;
  fromCurrency: string;
  toCurrency: string;
}

export  class allProductsDto implements allProductResponse {
  products: createProductResponse[];

}
