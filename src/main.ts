import { NestFactory } from '@nestjs/core';
import { CryptoCompareApiModule } from './crypto-compare-api.module';

async function bootstrap() {
  const app = await NestFactory.create(CryptoCompareApiModule);
  await app.listen(3000);
}
bootstrap();
