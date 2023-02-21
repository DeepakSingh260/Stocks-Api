import { Controller , Get } from "@nestjs/common";

@Controller("stock-history")
export class StockHistoryController{
    constructor(){}

    @Get("/:stocksymbol")
    async getStockHistory(){
        return "Stock History"
    }



}