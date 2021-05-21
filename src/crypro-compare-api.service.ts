import { Injectable, Req, Request } from '@nestjs/common';
import axios from 'axios'
import { BigNumber } from "bignumber.js";

import api_keys from './config/api_keys'
import {CryptoCompareApiModule} from "./crypto-compare-api.module";

BigNumber.set({ DECIMAL_PLACES: 2 })

@Injectable()
export class CryptoCompareApiService {
  getApiKeyFromVault() {
    return api_keys[Math.floor(Math.random() * (api_keys.length))]
  }
  async getCryptoPrice(currencyFrom, currencyTo, amount) {
    try {
      const apiKey = this.getApiKeyFromVault()
      const cryptoCompareResult = await axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${currencyFrom}&tsyms=${currencyTo}&api_key=${apiKey}`)
      return new BigNumber((cryptoCompareResult.data[currencyTo] * amount))
    }
    catch (e) {
      return e
    }
  }
}
