import { ModuleMetadata } from '@nestjs/common';
import { AppConfigModule } from '../../config/config.module';

export function getTestingGlobalModule(metadata?: ModuleMetadata) {
  const { imports = [], providers = [], controllers = [] } = metadata || {};
  return {
    imports: [AppConfigModule, ...imports],
    providers: [...providers],
    controllers,
  };
}
