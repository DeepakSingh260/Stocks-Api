import { Controller , Get } from "@nestjs/common";

@Controller('stock-buy')
export class StockBuyController{
    constructor(){}
    @Get('')
    async BuyStock(){
        return 'stock bought sucessfully'
    }

}