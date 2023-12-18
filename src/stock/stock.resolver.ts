import { Args, Query, Resolver } from '@nestjs/graphql';
import { StockService } from './stock.service';
import { FUNCTION } from './stock.enum';

@Resolver('Stock')
export class StockResolver {
  constructor(private readonly stockService: StockService) {}

  @Query('stocks')
  async getStocks(
    @Args('func')
    func: string,
    @Args('symbol')
    symbol: string,
  ) {
    return this.stockService.query(func as FUNCTION, symbol);
  }

}
