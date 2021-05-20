import { Controller, Get, Query, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { QueryParamDto } from "./dto/app.dto";
import { Response } from 'express'

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get('getCryptoPrice')
    @UsePipes(new ValidationPipe())
    async getCryptoPrice(@Query() reqParam: QueryParamDto, @Res() res: Response): Promise<Response> {
        try {
            const data = await this.appService.getCryptoPrice(reqParam);
            if (!data) {
                return res.status(500).json({"error": "Incorrect currency input"})
            }
            return res.json({[reqParam.currencyTo]: data})
        } catch (e) {
            return res.sendStatus(500).json(e)
        }
    }
}
