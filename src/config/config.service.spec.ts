import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';

import { getTestingGlobalModule } from '../shared/test/util';
import { AppConfigService } from './config.service';
import systemConfig from './environments/system';

describe('ConfigService', () => {
  let service: AppConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule(
      getTestingGlobalModule({
        imports: [
          ConfigModule.forRoot({
            cache: true,
            load: [systemConfig],
          }),
        ],
        providers: [AppConfigService],
      }),
    ).compile();

    service = module.get<AppConfigService>(AppConfigService);
  });

  it('should be defined and contains correct data', () => {
    expect(service).toBeDefined();
    expect(service.system).toEqual(systemConfig());
  });
});
