// forex.service.ts

import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CurrencyExchangeDto } from '../dtos/create-transaction.dto';

@Injectable()
export class ForexService {
  private readonly API_KEY = '305f44084e8548c9a149c945175489cc';
  private readonly API_URL = `https://openexchangerates.org/api/latest.json?app_id=${this.API_KEY}`;

  async fetchExchangeRates(): Promise<any> {
    try {
      const response = await axios.get(this.API_URL);
      return response.data.rates;
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
      throw error;
    }
  }

  async convertCurrency(data: CurrencyExchangeDto): Promise<number> {
    const rates = await this.fetchExchangeRates();
    const fromRate = rates[data.from];
    const toRate = rates[data.to];

    if (!fromRate || !toRate) {
      throw new Error('Invalid currency');
    }

    return (data.amount / fromRate) * toRate;
  }
}
