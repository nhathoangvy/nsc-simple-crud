import { Injectable } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import * as systemConfig from './environments/system';

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService) {}

  get system() {
    return this.configService.get<ConfigType<typeof systemConfig.default>>(
      systemConfig.CONFIG_NAME,
      systemConfig.default(),
    );
  }
}
