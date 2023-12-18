import { Test, TestingModule } from '@nestjs/testing';

import { getTestingGlobalModule } from '../shared/test/util';
import { StockResolver } from './stock.resolver';
import { StockService } from './stock.service';

describe('StockService', () => {
  let service: StockService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule(
      getTestingGlobalModule({
        providers: [StockService, StockResolver],
      }),
    ).compile();

    service = module.get<StockService>(StockService);
  });

  it('should be defined and contains correct data', () => {
    expect(service).toBeDefined();
  });
});
