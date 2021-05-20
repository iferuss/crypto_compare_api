import {Controller, Get, Query, Res, UsePipes, ValidationPipe} from '@nestjs/common';
import {AppService} from './app.service';
import {Response} from 'express'

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get('getCryptoPrice')
    // @UsePipes(new ValidationPipe())
    async getCryptoPrice(@Query('currencyFrom') currencyFrom: string,
                         @Query('currencyTo') currencyTo: string,
                         @Query('amount') amount: number,
                         @Query('api_key') api_key: string,
                         @Res() res: Response
    ): Promise<Response> {
        try {
            let data;
            if (api_key === process.env.SERVICE_API_KEY) {
                data = await this.appService.getCryptoPrice(currencyFrom, currencyTo, amount);
            } else {
                throw 'Wrong api key'
                return
            }
            if (isNaN(data)) {
                throw "Incorrect currency input"
                return
            }
            return res.json({[currencyTo]: data})
        } catch (e) {
            return res.json({"error": e})
        }
    }
}
