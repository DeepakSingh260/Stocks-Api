import { Controller, Get , Param } from "@nestjs/common";
import { StockNewsProvider } from "./stocks-new.provider";

@Controller('stock-news')
export class StockNewsController{
    constructor(private stockNewsProvider:StockNewsProvider){}
    @Get('/')
    async getStockNews():Promise<object>{
        const response = await this.stockNewsProvider.getNews()
        return response
    }
    @Get('/:stockSymbol')
    async getStockNewsForStock(@Param() param):Promise<object>{
        // console.log(param.stockSymbol)
        const response = await this.stockNewsProvider.getNewsForStock(param.stockSymbol.toString())
        return response
    }
}