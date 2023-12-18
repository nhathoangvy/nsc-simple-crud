import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { FUNCTION } from './stock.enum';
import * as error from '../errors/error.constant';
import { AppConfigService } from '../config/config.service';

@Injectable()
export class StockService {
  constructor(private readonly appConfigService: AppConfigService) {}

  async query(func: FUNCTION, symbol: string): Promise<any> {
    const { data } = await axios.get(
      `https://www.alphavantage.co/query?function=${func}&symbol=${symbol}&apikey=${this.appConfigService.system.apiKey}`,
    );
    if (!data) throw new Error(error[400]);
    return { data: JSON.stringify(data) };
  }
}
