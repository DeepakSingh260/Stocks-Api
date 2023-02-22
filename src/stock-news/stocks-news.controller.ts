import { Controller, Get } from "@nestjs/common";
import { StockNewsProvider } from "./stocks-new.provider";

@Controller('stock-news')
export class StockNewsController{
    constructor(private stockNewsProvider:StockNewsProvider){}
    @Get()
    async getStockNews():Promise<object>{
        const response = await this.stockNewsProvider.getNews()
        return response
    }
}