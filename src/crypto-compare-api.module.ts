import { Module } from '@nestjs/common';
import { CryptoCompareApiController } from './crypto-compare-api.controller';
import { CryptoCompareApiService } from './crypro-compare-api.service';
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [CryptoCompareApiController],
  providers: [CryptoCompareApiService],
})
export class CryptoCompareApiModule {}
