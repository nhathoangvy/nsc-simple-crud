import { Module } from '@nestjs/common';
import { StockResolver } from './stock.resolver';
import { StockService } from './stock.service';

@Module({
  providers: [StockService, StockResolver],
})
export class StockModule {}
