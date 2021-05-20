import { Injectable, Req, Request } from '@nestjs/common';
import axios from 'axios'

import api_keys from './config/api_keys'

@Injectable()
export class AppService {
  getApiKeyFromVault() {
    return api_keys[Math.floor(Math.random() * (api_keys.length))]
  }
  async getCryptoPrice(reqParam) {
    try {
      const apiKey = this.getApiKeyFromVault()
      const cryptoCompareResult = await axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${reqParam.currencyFrom}&tsyms=${reqParam.currencyTo}&api_key=${apiKey}`)
      return (cryptoCompareResult.data[reqParam.currencyTo] * reqParam.amount).toFixed(2)
    }
    catch (e) {
      return e
    }
  }
}
