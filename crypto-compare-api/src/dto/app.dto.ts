import { IsString, IsNumberString, IsDefined } from 'class-validator'
export class QueryParamDto {
    @IsDefined()
    @IsString()
    currencyFrom: string;

    @IsDefined()
    @IsString()
    currencyTo: string;

    @IsDefined()
    @IsNumberString()
    amount: number;
}