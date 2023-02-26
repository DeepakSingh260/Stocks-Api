import { Controller, Get ,Param } from '@nestjs/common';
import { StocksWatchlistProvider } from './stocks-watchlist.provider';

@Controller('watchlist')
export class WatchlistRouter{
    constructor(private allStocksProvider:StocksWatchlistProvider){}
    @Get('all-stocks')
    async getAllStocks(){
        const stockList = await this.allStocksProvider.getAllStockList()
        return stockList
    }

    @Get('top-gainer')
    async topGainer(){
        const stockList = await this.allStocksProvider.getGainerStockList()
        return stockList
    }
    @Get('top-loser')
    async topLoser(){
        const stockList = await this.allStocksProvider.getLoserStockList()
        return stockList
    }
    @Get('StockSymbol/:stockSymbol')
    async onStock(@Param() param){
        const stockList = await this.allStocksProvider.getOneStock(param.stockSymbol.toString())
        return stockList
    }

}