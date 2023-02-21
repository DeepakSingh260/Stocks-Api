import { Controller , Get ,Req , Param } from "@nestjs/common";
import { Request } from "express";
import { StockHistoryProvider } from "./stock-history.provider";

@Controller("stock-history")
export class StockHistoryController{
    constructor(private stockHistoryProvider:StockHistoryProvider){}

    @Get("/:stocksymbol")
    async getStockHistory(@Req() req:Request , @Param() param){
        // console.log(param.stocksymbol)
        
        const response = await this.stockHistoryProvider.priceHistory(param.stocksymbol)
        return response
    }


}