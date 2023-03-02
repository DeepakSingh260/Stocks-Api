import { Controller , Get } from "@nestjs/common";

@Controller('stock-sell')
export class StockSellController{
    constructor(){}
    @Get('')
    async SellStock(){
        return "Stock Sold"
    }

}