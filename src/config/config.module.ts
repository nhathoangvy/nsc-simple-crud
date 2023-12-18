import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppConfigService } from './config.service';
import systemConfig from './environments/system';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      load: [systemConfig],
    }),
  ],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}
