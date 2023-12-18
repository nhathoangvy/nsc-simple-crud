import { registerAs } from '@nestjs/config'

export const CONFIG_NAME = 'system'

export default registerAs(CONFIG_NAME, () => ({
  env: process.env.NODE_ENV || 'local',
  host: process.env.HOST || '0.0.0.0',
  port: parseInt(process.env.PORT || '3000', 10) || 3000,
  apiKey: process.env.API_KEY || '' 
}))